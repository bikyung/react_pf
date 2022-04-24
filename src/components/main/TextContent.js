import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';

function TextContent() {
	const [textCon, setTextCon] = useState([]);
	const path = process.env.PUBLIC_URL;

	useEffect(() => {
		axios.get(`${path}/DB/textContent.json`).then((json) => {
			setTextCon(json.data.data);
		});
	}, []);
	return (
		<>
			<section id='textContent' className='myScroll'>
				<div className='inner'>
					<h2>My CONTENT UPDATE</h2>
					<h3>New & Content Update</h3>
					<div className='wrap'>
						{textCon.map((text, idx) => {
							return (
								<article key={idx}>
									<h2>{text.title}</h2>
									<p>{text.detail}</p>
									<span>{text.date}</span>
								</article>
							);
						})}
					</div>
					<h3>GO TO CONTENT</h3>
				</div>
			</section>
		</>
	);
}

export default TextContent;
