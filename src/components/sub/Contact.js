import React, { useRef, useEffect, useState } from 'react';
import Layout from '../common/Layout';

function Contact() {
	const container = useRef(null);
	const { kakao } = window;
	const [map, setMap] = useState(null);
	const [traffic, setTraffic] = useState(false);

	useEffect(() => {
		const options = {
			center: new kakao.maps.LatLng(33.450701, 126.570667),
			level: 3,
		};

		const map = new kakao.maps.Map(container.current, options);
		setMap();
	}, []);

	useEffect(() => {
		console.log(traffic);
		handleTraffic();
	}, [traffic]);

	const handleTraffic = () => {
		if (map) {
			traffic
				? map.addOverlayMaptypeId(kakao.maps.MapTypeId.TRAFFIC)
				: map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
		}
	};
	return (
		<Layout name={'Contact'}>
			<div id='map' ref={container}></div>
			{/* <button onClick={() => setTraffic(!traffic)}>
				{traffic ? 'Traffic Off' : 'Traffic On'}
			</button> */}
		</Layout>
	);
}

export default Contact;
