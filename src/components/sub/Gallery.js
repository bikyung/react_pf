import { useEffect, useState, useRef } from 'react';
import Layout from '../common/Layout';
import Popup from '../common/Popup';
import Masonry from 'react-masonry-component';
import { useSelector, useDispatch } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Gallery() {
	const path = process.env.PUBLIC_URL;
	const masonryOptions = {
		transitionDuration: '0.5s',
	};

	const { flickr } = useSelector((state) => state.flickrReducer);
	const dispatch = useDispatch();

	const [index, setIndex] = useState(0);
	const [loading, setLoading] = useState(true);
	const [enableClick, setEnableClick] = useState(true);
	const [opt, setOpt] = useState({ type: 'interest' });

	const frame = useRef(null);
	const input = useRef(null);
	const pop = useRef(null);

	const searchTag = () => {
		const tag = input.current.value.trim();
		setOpt({ type: 'search', tags: tag });
		setEnableClick(false);
		setLoading(true);
		if (!tag) {
			alert('검색어를 입력하세요.');
			return;
		}
		endLoading();
	};

	const initLoading = () => {
		setTimeout(() => {
			setLoading(true);
		}, 1000);
	};

	const endLoading = () => {
		setTimeout(() => {
			frame.current.classList.add('on');
			setLoading(false);
			setTimeout(() => setEnableClick(true), 1000);
		}, 1000);
	};

	useEffect(() => {
		dispatch({ type: 'FLICKR_START', opt });
		endLoading();
	}, [opt]);

	return (
		<>
			<Layout name={'Gallery'}>
				{loading ? (
					<img className='loading' src={path + '/img/loading.gif'} />
				) : null}

				<div className='search'>
					<ul className='searchMenu'>
						<li>
							<button
								onClick={() => {
									if (enableClick) {
										setEnableClick(false);
										setLoading(true);
										setOpt({ type: 'album' });
										initLoading();
									}
								}}>
								ALBUM
							</button>
						</li>
						<li>
							<button
								onClick={() => {
									if (enableClick) {
										setEnableClick(false);
										setLoading(true);
										setOpt({ type: 'interest' });
										initLoading();
									}
								}}>
								INTEREST
							</button>
						</li>
						<li>
							<button
								onClick={() => {
									if (enableClick) {
										setEnableClick(false);
										setLoading(true);
										setOpt({ type: 'favorite' });
										initLoading();
									}
								}}>
								FAVORITE
							</button>
						</li>
					</ul>
					<div className='searchBox'>
						<input
							placeholder='Please Write Your Search'
							type='text'
							ref={input}
							onKeyUp={(e) => {
								if (e.key === 'Enter') {
									if (enableClick) searchTag();
								}
							}}
						/>
						<button onClick={searchTag}>
							<FontAwesomeIcon icon={faMagnifyingGlass} />
						</button>
					</div>
				</div>

				<div className='frame' ref={frame}>
					<Masonry elementType={'div'} options={masonryOptions}>
						{flickr.map((item, idx) => {
							return (
								<article
									key={idx}
									onClick={() => {
										setIndex(idx);
										pop.current.open();
									}}>
									<div className='inner'>
										<div className='pic'>
											<img
												src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`}
											/>
										</div>
										<div className='txt'>
											<h2>{item.owner}</h2>
											<p>{item.title}</p>
										</div>
									</div>
								</article>
							);
						})}
					</Masonry>
				</div>
			</Layout>

			<Popup ref={pop}>
				{flickr.length !== 0 && (
					<img
						src={`https://live.staticflickr.com/${flickr[index].server}/${flickr[index].id}_${flickr[index].secret}_b.jpg`}
					/>
				)}
				<span onClick={() => pop.current.close()}>Close</span>
			</Popup>
		</>
	);
}

export default Gallery;
