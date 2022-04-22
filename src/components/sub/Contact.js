import React, { useRef, useEffect, useState } from 'react';
import Layout from '../common/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

function Contact() {
	const path = process.env.PUBLIC_URL;
	const container = useRef(null);
	const { kakao } = window;
	const branch = useRef(null);
	const info = [
		{
			title: 'SEOUL',
			latlng: new kakao.maps.LatLng(37.512714519901536, 127.06064893707484),
			imgSrc: `${path}/img/marker.gif`,
			imgSize: new kakao.maps.Size(90, 70),
			imgPos: { offset: new kakao.maps.Point(110, 90) },
			name: 'Lorem ipsum dolor',
			phone: '02-1588-1234',
		},
		{
			title: 'GWANGJU',
			latlng: new kakao.maps.LatLng(37.57599374423426, 126.97686384130986),
			imgSrc: `${path}/img/marker.gif`,
			imgSize: new kakao.maps.Size(90, 70),
			imgPos: { offset: new kakao.maps.Point(110, 90) },
			name: 'Alea iacta est',
			phone: '1588-1234',
		},
		{
			title: 'INCHEON',
			latlng: new kakao.maps.LatLng(37.55163472770302, 126.98815135296329),
			imgSrc: `${path}/img/marker.gif`,
			imgSize: new kakao.maps.Size(90, 70),
			imgPos: { offset: new kakao.maps.Point(110, 90) },
			name: 'Xitus acta probat regulam',
			phone: '032-1588-1234',
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
			kakao.maps.ControlPosition.TOPLEFT
		);

		const zoomControl = new kakao.maps.ZoomControl();
		mapInstance.addControl(zoomControl, kakao.maps.ControlPosition.LEFT);

		const mapInit = () => {
			mapInstance.setCenter(mapInfo[index].latlng);
		};

		setMap(mapInstance);

		const lis = branch.current.querySelectorAll('li');
		for (const li of lis) li.classList.remove('on');

		lis[index].classList.add('on');

		window.addEventListener('resize', mapInit);

		return () => {
			window.removeEventListener('resize', mapInit);
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
			<div className='wrap'>
				<div className='txt1'>
					<article>
						<h2>ADDRESS</h2>
						<p>1800 Abbot Kinney Blvd.</p>
						<p>UNIT D & E Venice.CA 90291</p>
					</article>
					<article>
						<h2>PHONE</h2>
						<p>Mobile : (+88)-1990-6886</p>
						<p>Hotline : 1800-1102</p>
					</article>
					<article>
						<h2>EMAIL</h2>
						<p>support@studio.com</p>
						<p>contact@studio.com</p>
					</article>
					<article>
						<h2>SOCIAL</h2>
						<ul>
							<li>
								<FontAwesomeIcon icon={faFacebook} />
							</li>
							<li>
								<FontAwesomeIcon icon={faYoutube} />
							</li>
							<li>
								<FontAwesomeIcon icon={faTwitter} />
							</li>
						</ul>
					</article>
				</div>
				<div className='txt2'>
					<h2>Get In Touch</h2>
					<table>
						<caption>txt양식</caption>
						<tbody>
							<tr>
								<td>
									<input
										type='text'
										name='user'
										id='user'
										placeholder='Your Name'
									/>
									<input
										type='text'
										name='email'
										id='email'
										placeholder='Your Email'
									/>
									<input
										type='text'
										name='web'
										id='web'
										placeholder='Web site'
									/>
								</td>
							</tr>
							<tr>
								<td>
									<textarea
										name='txt'
										id='area'
										cols='30'
										rows='10'
										placeholder='Comment'></textarea>
								</td>
							</tr>
							<tr>
								<td>
									<input type='submit' value='SUBMIT' />
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div className='map_wrap'>
				<div className='map_con'>
					<ul className='branch' ref={branch}>
						{mapInfo.map((info, idx) => {
							console.log(map);
							return (
								<li key={idx} onClick={() => setIndex(idx)}>
									<h2>{info.title}</h2>
									<h3>{info.name}</h3>
									<span>{info.phone}</span>
								</li>
							);
						})}
					</ul>
					<button onClick={() => setTraffic(!traffic)}>
						{traffic ? 'Traffic OFF' : 'Traffic On'}
					</button>
				</div>
				<div id='map' ref={container}></div>
			</div>
		</Layout>
	);
}

export default Contact;
