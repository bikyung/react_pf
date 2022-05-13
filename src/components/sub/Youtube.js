import { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import Layout from '../common/Layout';
import Popup from '../common/Popup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

function Youtube() {
	const vidData = useSelector((state) => state.youtubeReducer.youtube);
	const pop = useRef(null);
	const [index, setIndex] = useState(0);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (vidData.length !== 0) {
			setLoading(true);
		}
	}, [vidData]);

	function getThumbnailUrl(thumbnails) {
		const { high, medium, standard } = thumbnails;
		if (high) {
			return high.url;
		} else if (medium) {
			return medium.url;
		} else if (standard) {
			return standard.url;
		} else {
			return '';
		}
	}

	return (
		<>
			<Layout name={'Youtube'}>
				<div className='txt1'>
					<h2>YOUTUBE STUDIO</h2>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
						rem error autem voluptatum unde provident.
					</p>
					<h3>Lorem, ipsum dolor Studio Video.</h3>
				</div>

				<div className='youtubeInfo'>
					{vidData.map((item, idx) => {
						const desc = item.snippet.description;
						const date = item.snippet.publishedAt;
						return (
							<article
								key={idx}
								onClick={() => {
									setIndex(idx);
									pop.current.open();
								}}>
								<div className='pic'>
									<img
										src={getThumbnailUrl(item.snippet.thumbnails)}
									/>
									<FontAwesomeIcon icon={faCirclePlay} />
								</div>
								<div className='con'>
									<span>{date.split('T')[0]}</span>
									<h2>{item.snippet.title}</h2>
									<p>
										{desc.length > 300
											? desc.substr(0, 300) + '...'
											: desc}
									</p>
								</div>
							</article>
						);
					})}
				</div>
			</Layout>
			<Popup ref={pop}>
				{vidData.length !== 0 && (
					<iframe
						src={
							'https://www.youtube.com/embed/' +
							vidData[index].snippet.resourceId.videoId
						}
						frameBorder='0'></iframe>
				)}
				<span
					onClick={() => {
						pop.current.close();
					}}>
					Close
				</span>
			</Popup>
		</>
	);
}

export default Youtube;
