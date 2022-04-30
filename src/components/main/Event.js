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
		<section id='Event' className='myScroll'>
			<div className='inner'>
				<h2>NEWS & Preview</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
					dolorem tempore. Ducimus, at.
				</p>
				<div className='wrap'>
					<ul>
						{posts.map((post, idx) => {
							if (idx < 6) {
								return (
									<li key={idx}>
										<h2>{post.title}</h2>
										<p>{post.content}</p>
									</li>
								);
							}
						})}
					</ul>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Cupiditate accusantium fugiat natus inventore sint
						reprehenderit porro, et doloremque similique aperiam excepturi
						distinctio illo quam incidunt nostrum voluptatem alias aliquid
						repudiandae possimus. Explicabo corporis, fuga fugiat corrupti
						iusto consequatur eos hic non error. Dolore explicabo aut
						expedita, rem tempore consequuntur officiis?
					</p>
				</div>
			</div>
		</section>
	);
}

export default Event;
