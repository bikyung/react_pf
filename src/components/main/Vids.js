import { useSelector } from 'react-redux';
import Popup from '../common/Popup';
import { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

function Vids() {
	const vidData = useSelector((state) => state.youtubeReducer.youtube);
	console.log(vidData);
	const [index, setIndex] = useState(0);
	const pop = useRef(null);

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
			<section id='vids' className='myScroll'>
				<div className='inner'>
					<h2>Recent Youtube</h2>
					<div className='wrap'>
						<ul className='vidList'>
							{vidData.map((vid, idx) => {
								const description = vid.snippet.description;
								const date = vid.snippet.publishedAt;
								if (idx < 6)
									return (
										<li
											key={idx}
											onClick={() => {
												setIndex(idx);
												pop.current.open();
											}}>
											<img
												src={getThumbnailUrl(
													vid.snippet.thumbnails
												)}
											/>
											<p>
												{description.length > 90
													? description.substr(0, 90) + '...'
													: description}
											</p>
											<span>{date.split('T')[0]}</span>
											<FontAwesomeIcon icon={faCirclePlay} />
										</li>
									);
							})}
						</ul>
					</div>
				</div>
			</section>

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

export default Vids;
