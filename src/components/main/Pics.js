import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function Pics() {
	const path = process.env.PUBLIC_URL;
	const { flickr } = useSelector((state) => state.flickrReducer);
	const [nimg, setImg] = useState([]);

	return (
		<section id='pics' className='myScroll'>
			<div className='inner'>
				<h2>Recent Gallery</h2>

				<div className='wrap'>
					{flickr.map((item, idx) => {
						if (idx < 12) {
							return (
								<article key={idx}>
									<div className='pic'>
										<img
											src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`}
										/>
									</div>
									<div className='txt'>
										<h2>{item.owner}</h2>
										<p>{item.title}</p>
									</div>
								</article>
							);
						}
					})}
				</div>
			</div>
		</section>
	);
}

export default Pics;
