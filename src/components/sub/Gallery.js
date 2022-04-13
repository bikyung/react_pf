import axios from 'axios';
import { useEffect, useState } from 'react';
import Layout from '../common/Layout';
import Popup from '../common/Popup';

function Gallery() {
	const base = 'https://www.flickr.com/services/rest/?';
	const key = '86007043f7007d67ce5b5f460ff91ac7';
	const username = '195311166@N04';
	const per_page = '100';
	const method_people = 'flickr.people.getPhotos';
	const url_people = `${base}method=${method_people}&api_key=${key}&per_page=${per_page}&format=json&nojsoncallback=1&user_id=${username}`;

	const [items, setItems] = useState([]);
	const [open, setOpen] = useState(false);
	const [index, setIndex] = useState(0);

	useEffect(() => {
		axios.get(url_people).then((json) => {
			console.log(json.data.photos.photo);
			setItems(json.data.photos.photo);
		});
	}, []);

	return (
		<>
			<Layout name={'Gallery'} sub_visual={'gallery'}>
				<ul>
					{items.map((item, idx) => {
						return (
							<li
								key={idx}
								onClick={() => {
									setOpen(true);
									setIndex(idx);
								}}>
								<div className='inner'>
									<div className='pic'>
										<img
											src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`}
										/>
									</div>
									<h2>KAWASAKI</h2>
									<h3>{item.title}</h3>
								</div>
							</li>
						);
					})}
				</ul>
			</Layout>

			{open ? (
				<Popup setOpen={setOpen}>
					<img
						src={`https://live.staticflickr.com/${items[index].server}/${items[index].id}_${items[index].secret}_b.jpg`}
					/>
				</Popup>
			) : null}
		</>
	);
}

export default Gallery;
