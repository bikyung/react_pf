import Layout from '../common/Layout';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Popup from '../common/Popup';

function Youtube() {
	const key = 'AIzaSyBA0vVAYlhuCiLDSkDUi_LswCkyeB6NAoI';
	const num = 8;
	const id = 'PL92HST3Zi7rbsat9oT6ZUtyan4CUs8Tas';
	const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&maxResults=${num}&playlistId=${id}`;

	const [items, setItems] = useState([]);
	const [open, setOpen] = useState(false);
	const [index, setIndex] = useState(0);
	useEffect(() => {
		axios.get(url).then((json) => {
			setItems(json.data.items);
		});
	}, []);

	return (
		<>
			<Layout name={'Youtube'} sub_visual={'youtube'}>
				<div className='txt1'>
					<h2>NINJA ZX-10RR</h2>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
						rem error autem voluptatum unde provident.
					</p>
					<h3>Lorem, ipsum dolor Studio Video.</h3>
				</div>

				<div className='youtubeInfo'>
					{items.map((item, idx) => {
						const desc = item.snippet.description;
						const date = item.snippet.publishedAt;
						return (
							<article
								key={idx}
								onClick={() => {
									setOpen(true);
									setIndex(idx);
								}}>
								<div className='pic'>
									<img src={item.snippet.thumbnails.medium.url} />
								</div>
								<div className='con'>
									<h2>{item.snippet.title}</h2>
									<p>
										{desc.length > 100
											? desc.substr(0, 100) + '...'
											: desc}
									</p>
									<span>{date.split('T')[0]}</span>
								</div>
							</article>
						);
					})}
				</div>
			</Layout>
			{open ? (
				<Popup setOpen={setOpen}>
					<iframe
						src={
							'https://www.youtube.com/embed/' +
							items[index].snippet.resourceId.videoId
						}
						frameBorder='0'></iframe>
				</Popup>
			) : null}
		</>
	);
}

export default Youtube;
