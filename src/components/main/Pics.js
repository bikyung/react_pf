import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import Popup from '../common/Popup';

const path = process.env.PUBLIC_URL;
function Pics() {
	const { flickr } = useSelector((state) => state.flickrReducer);
	const pop = useRef(null);
	const [index, setIndex] = useState(0);

	return (
		<>
			<section id='pics' className='myScroll'>
				<div className='inner'>
					<h2>Recent Gallery</h2>
					<h3>Behind The Scenes</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
						unde voluptas numquam in. Nobis, incidunt explicabo excepturi
						libero nesciunt ratione, cum impedit beatae ipsum voluptatum,
						recusandae corrupti dolores eligendi vitae!
					</p>
					<div className='pics_con'>
						<img src={`${path}/img/pic1.jpg`} />
					</div>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit.
						Aspernatur aliquid harum voluptatibus. Excepturi, tempora
						voluptatem fugiat fuga culpa, consequuntur, recusandae ipsam
						nihil atque voluptas laborum neque qui ex harum similique.
					</p>
					<div className='wrap'>
						{flickr.map((item, idx) => {
							if (idx < 4) {
								return (
									<article
										key={idx}
										onClick={() => {
											setIndex();
											pop.current.open();
										}}>
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
			<Popup ref={pop}>
				{flickr.length !== 0 && (
					<img
						src={`https://live.staticflickr.com/${flickr[index].server}/${flickr[index].id}_${flickr[index].secret}_b.jpg`}
					/>
				)}
				<span onClick={() => pop.current.close()}>Close</span>
			</Popup>
		</>
	);
}

export default Pics;
