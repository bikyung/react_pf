import { useState, useEffect } from 'react';

function Event() {
	const getLocalData = () => {
		const data = localStorage.getItem('posts');

		const dummyData = [
			{ title: 'Hello5', content: 'Here comes description in detail.' },
			{ title: 'Hello4', content: 'Here comes description in detail.' },
			{ title: 'Hello3', content: 'Here comes description in detail.' },
			{ title: 'Hello2', content: 'Here comes description in detail.' },
			{ title: 'Hello1', content: 'Here comes description in detail.' },
		];

		if (data) {
			return JSON.parse(data);
		} else {
			return dummyData;
		}
	};

	const [posts] = useState(getLocalData);
	useEffect(() => {
		localStorage.setItem('posts', JSON.stringify(posts));
	}, []);

	return (
		<main id='Event' className='myScroll'>
			<h1>Event</h1>

			<ul>
				{posts.map((post, idx) => {
					if (idx < 4) {
						return (
							<li key={idx}>
								<h2>{post.title}</h2>
								<p>{post.content}</p>
							</li>
						);
					}
				})}
			</ul>
		</main>
	);
}

export default Event;
