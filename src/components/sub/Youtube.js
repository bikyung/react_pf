import Layout from '../common/Layout';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Youtube() {
	const [items, setItems] = useState([]);
	useEffect(() => {
		const key = 'AIzaSyBA0vVAYlhuCiLDSkDUi_LswCkyeB6NAoI';
		const num = 6;
		const id = 'PL92HST3Zi7rbsat9oT6ZUtyan4CUs8Tas';
		const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&maxResults=${num}&playlistId=${id}`;

		axios.get(url).then((json) => {
			setItems(json.data.items);
		});
	}, []);

	return (
		<Layout name={'Youtube'}>
			{items.map((item, idx) => {
				const desc = item.snippet.description;
				const date = item.snippet.publishedAt;
				return (
					<article key={idx}>
						<img src={item.snippet.thumbnails.medium.url} />
						<h2>{item.snippet.title}</h2>
						<p>
							{desc.length > 100 ? desc.substr(0, 100) + '...' : desc}
						</p>
						<span>{date.split('T')[0]}</span>
					</article>
				);
			})}
		</Layout>
	);
}

export default Youtube;
