import Layout from '../common/Layout';
import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import Popup from '../common/Popup';

function Youtube() {
	const pop = useRef(null);
	const key = 'AIzaSyBA0vVAYlhuCiLDSkDUi_LswCkyeB6NAoI';
	const num = 9;
	const id = 'PL92HST3Zi7rbOhNiZxBGcwmdmkYaEl72W';
	const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&maxResults=${num}&playlistId=${id}`;

	const [items, setItems] = useState([]);
	const [index, setIndex] = useState(0);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		axios.get(url).then((json) => {
			setItems(json.data.items);
			setLoading(true);
		});
	}, []);

	return (
		<>
			<Layout name={'Youtube'}>
				<div className='txt1'>
					<h2>YOUTUBE STUDIO</h2>
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
									setIndex(idx);
									pop.current.open();
								}}>
								<div className='pic'>
									<img src={item.snippet.thumbnails.medium.url} />
								</div>
								<div className='con'>
									<span>{date.split('T')[0]}</span>
									<h2>{item.snippet.title}</h2>
									<p>
										{desc.length > 300
											? desc.substr(0, 300) + '...'
											: desc}
									</p>
								</div>
							</article>
						);
					})}
				</div>
			</Layout>
			<Popup ref={pop}>
				{loading && (
					<iframe
						src={
							'https://www.youtube.com/embed/' +
							items[index].snippet.resourceId.videoId
						}
						frameBorder='0'></iframe>
				)}
				<span
					onClick={() => {
						pop.current.close();
					}}>
					Close
				</span>
			</Popup>
		</>
	);
}

export default Youtube;
