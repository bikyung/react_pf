import React, { useEffect, useRef } from 'react';

function Layout(props) {
	const path = process.env.PUBLIC_URL;
	let frame = useRef(null);
	const cursor = useRef(null);

	useEffect(() => {
		frame.current.classList.add('on');
		return;
	}, []);

	return (
		<section className={`content ${props.name}`} ref={frame}>
			<figure>
				<div className='sub_visual'>
					<img src={`${path}/img/bg.png`} alt='bg' />
				</div>
				<div className='info'>
					<div className='infoTxt'>
						<span>HOME</span>
						<span>{props.name}</span>
						<h2>Our</h2>
						<h3>{props.name}</h3>
					</div>
				</div>
				<div className='cursor' ref={cursor}></div>
			</figure>
			<div className='inner'>{props.children}</div>
		</section>
	);
}

export default Layout;
