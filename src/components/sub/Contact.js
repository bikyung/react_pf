import React, { useRef, useEffect, useState } from 'react';
import Layout from '../common/Layout';

function Contact() {
	const path = process.env.PUBLIC_URL;
	const container = useRef(null);
	const { kakao } = window;

	const info = [
		{
			title: '서울지점',
			latlng: new kakao.maps.LatLng(37.580730918499754, 127.02210456849461),
			imgSrc: `${path}/img/marker1.png`,
			imgSize: new kakao.maps.Size(80, 80),
			imgPos: { offset: new kakao.maps.Point(110, 90) },
		},
		{
			title: '대전지점',
			latlng: new kakao.maps.LatLng(36.304590089162524, 127.45000346864543),
			imgSrc: `${path}/img/marker2.png`,
			imgSize: new kakao.maps.Size(50, 50),
			imgPos: { offset: new kakao.maps.Point(110, 90) },
		},
		{
			title: '광주지점',
			latlng: new kakao.maps.LatLng(35.1748019321974, 126.91626746156524),
			imgSrc: `${path}/img/marker2.png`,
			imgSize: new kakao.maps.Size(50, 50),
			imgPos: { offset: new kakao.maps.Point(110, 90) },
		},
	];
	const [map, setMap] = useState(null);
	const [traffic, setTraffic] = useState(false);
	const [mapInfo] = useState(info);
	const [index, setIndex] = useState(0);

	useEffect(() => {
		container.current.innerHTML = '';

		const options = {
			center: mapInfo[index].latlng,
			level: 3,
		};
		const mapInstance = new kakao.maps.Map(container.current, options);

		const markerPosition = mapInfo[index].latlng;
		const imgSrc = mapInfo[index].imgSrc;
		const imgSize = mapInfo[index].imgSize;
		const imgPos = mapInfo[index].imgPos;
		const markerImg = new kakao.maps.MarkerImage(imgSrc, imgSize, imgPos);
		const marker = new kakao.maps.Marker({
			position: markerPosition,
			image: markerImg,
		});

		marker.setMap(mapInstance);

		const mapTypeControl = new kakao.maps.MapTypeControl();

		mapInstance.addControl(
			mapTypeControl,
			kakao.maps.ControlPosition.TOPRIGHT
		);

		const zoomControl = new kakao.maps.ZoomControl();
		mapInstance.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

		const mapInit = () => {
			mapInstance.setCenter(mapInfo[index].latlng);
		};
		setMap(mapInstance);

		window.addEventListener('resize', mapInit);

		return () => {
			window.addEventListener('resize', mapInit);
		};
	}, [index]);

	useEffect(() => {
		handleTraffic();
	}, [traffic]);

	const handleTraffic = () => {
		if (map) {
			traffic
				? map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC)
				: map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
		}
	};

	return (
		<Layout name={'Contact'}>
			<div id='map' ref={container}></div>
			<button onClick={() => setTraffic(!traffic)}>
				{traffic ? 'Traffic OFF' : 'Traffic On'}
			</button>

			<ul className='branch'>
				{mapInfo.map((info, idx) => {
					return (
						<li
							key={idx}
							onClick={() => {
								setIndex(idx);
							}}>
							{info.title}
						</li>
					);
				})}
			</ul>
		</Layout>
	);
}

export default Contact;
