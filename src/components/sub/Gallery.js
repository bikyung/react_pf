import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import Layout from '../common/Layout';
import Popup from '../common/Popup';
import Masonry from 'react-masonry-component';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Gallery() {
	const path = process.env.PUBLIC_URL;
	const masonryOptions = {
		transitionDuration: '0.5s',
	};

	const [index, setIndex] = useState(0);
	const [load, setload] = useState(false);
	const [loading, setLoading] = useState(true);
	const [enableClick, setEnableClick] = useState(true);
	const [items, setItems] = useState([]);

	const frame = useRef(null);
	const input = useRef(null);
	const pop = useRef(null);

	const getFlickr = async (opt) => {
		const base = 'https://www.flickr.com/services/rest/?';
		const key = '86007043f7007d67ce5b5f460ff91ac7';
		const method1 = 'flickr.interestingness.getList';
		const method2 = 'flickr.photos.search';
		const method3 = 'flickr.favorites.getList';
		const method4 = 'flickr.galleries.getPhotos';
		const username = '195311166@N04';
		const galleryId = '72157720599016444';
		const num = opt.count;
		let url = '';

		if (opt.type === 'interest') {
			url = `${base}method=${method1}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1`;
		}

		if (opt.type === 'search') {
			url = `${base}method=${method2}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1&tags=${opt.tags}`;
		}

		if (opt.type === 'album') {
			url = `${base}method=${method3}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1&user_id=${username}&tags=${opt.tags}`;
		}
		if (opt.type === 'favorite') {
			url = `${base}method=${method4}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1&user_id=${username}&tags=${opt.tags}&gallery_id=${galleryId}`;
		}

		await axios.get(url).then((json) => {
			if (json.data.photos.photo.length === 0) {
				alert('해당 검색어의 이미지가 없습니다');
				return;
			}
			setItems(json.data.photos.photo);
			setload(true);
		});

		setTimeout(() => {
			frame.current.classList.add('on');
			setLoading(false);

			setTimeout(() => {
				setEnableClick(true);
			}, 1000);
		}, 1000);
	};

	const showSearch = () => {
		const result = input.current.value.trim();
		if (!result || result === '') {
			alert('검색어를 입력하세요.');
			return;
		}

		if (enableClick) {
			setEnableClick(false);
			setLoading(true);
			frame.current.classList.remove('on');

			getFlickr({
				type: 'search',
				count: 1000,
				tags: result,
			});
			input.current.value = '';
		}
	};

	useEffect(() => {
		getFlickr({
			type: 'interest',
			count: 50,
		});
	}, []);

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
										getFlickr({
											type: 'album',
											count: 100,
										});
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
										getFlickr({
											type: 'interest',
											count: 100,
										});
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
										getFlickr({
											type: 'favorite',
											count: 100,
										});
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
								if (e.key === 'Enter') showSearch();
							}}
						/>
						<button onClick={showSearch}>
							<FontAwesomeIcon icon={faMagnifyingGlass} />
						</button>
					</div>
				</div>

				<div className='frame' ref={frame}>
					<Masonry elementType={'div'} options={masonryOptions}>
						{items.map((item, idx) => {
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
