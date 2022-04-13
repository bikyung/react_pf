import React, { useEffect, useRef } from 'react';

function Layout(props) {
	const path = process.env.PUBLIC_URL;
	let frame = useRef(null);

	useEffect(() => {
		console.log('Layout 컴포넌트 생성');
		frame.current.classList.add('on');

		return () => {
			console.log('Layout 컴포넌트 소멸');
		};
	}, []);

	return (
		<section className={`content ${props.name}`} ref={frame}>
			<figure>
				<img src={`${path}/img/${props.name}/${props.sub_visual}.jpg`} />
			</figure>

			<div className='inner'>{props.children}</div>
		</section>
	);
}

export default Layout;
