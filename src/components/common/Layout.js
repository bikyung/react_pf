import React, { useEffect, useRef } from 'react';

function Layout(props) {
	const path = process.env.PUBLIC_URL;
	let frame = useRef(null);
	const cursor = useRef(null);
	let isCursor = false;

	const handleMove = (e) => {
		if (isCursor) {
			cursor.current.style.left = e.clientX - 375 + 'px';
			cursor.current.style.top = e.clientY - 260 + 'px';
		}
	};

	useEffect(() => {
		const figure = frame.current.querySelector('figure');
		figure.addEventListener('mouseenter', () => {
			isCursor = true;
			cursor.current.style.display = 'block';
		});
		figure.addEventListener('mouseleave', () => {
			isCursor = false;
			cursor.current.style.display = 'none';
		});

		frame.current.classList.add('on');
		window.addEventListener('mousemove', handleMove);

		return () => window.removeEventListener('mousemove', handleMove);
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
						<div className='cursor' ref={cursor}></div>
					</div>
				</div>
			</figure>
			<div className='inner'>{props.children}</div>
		</section>
	);
}

export default Layout;
