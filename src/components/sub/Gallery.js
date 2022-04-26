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

	const { flickr, err } = useSelector((state) => state.flickrReducer);
	const dispatch = useDispatch();

	const [opt, setOpt] = useState({ type: 'interest' });

	useEffect(() => {
		dispatch({ type: 'FLICKR_START', opt });
	}, [opt]);

	const searchTag = () => {
		const tag = input.current.value;
		setOpt({ type: 'search', tags: tag });
	};

	const [index, setIndex] = useState(0);
	const [load, setload] = useState(false);
	const [loading, setLoading] = useState(true);
	const [enableClick, setEnableClick] = useState(true);
	const [items, setItems] = useState([]);

	const frame = useRef(null);
	const input = useRef(null);
	const pop = useRef(null);

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
										frame.current.classList.remove('on');
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
										frame.current.classList.remove('on');
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
										frame.current.classList.remove('on');
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
								if (e.key === 'Enter');
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
				{load && (
					<img
						src={`https://live.staticflickr.com/${items[index].server}/${items[index].id}_${items[index].secret}_b.jpg`}
					/>
				)}
				<span onClick={() => pop.current.close()}>Close</span>
			</Popup>
		</>
	);
}

export default Gallery;
