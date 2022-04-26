import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
function Visual() {
	const path = process.env.PUBLIC_URL;
	return (
		<figure id='visual'>
			<Swiper spaceBetween={30} slidesPerView={1}>
				<SwiperSlide>
					<video
						autoPlay
						loop
						muted
						src={`${path}/video/mainvideo.mp4`}></video>
					<div className='info'>
						<h2>Film</h2>
						<h2>+ Video</h2>
						<h2>Productions</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Voluptatum repellat atque ex, saepe ad ipsum sapiente esse
							qui nemo officiis pariatur eius ea quibusdam similique, sed
							repellendus, unde magnam aperiam!
						</p>
						<div className='conBox'>
							<div className='con'>
								<FontAwesomeIcon icon={faArrowRight} />
							</div>
							<h3>HIRE US NOW</h3>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<video
						autoPlay
						loop
						muted
						src={`${path}/video/mainvideo1.mp4`}></video>
					<div className='info'>
						<h2>Film</h2>
						<h2>+ Video</h2>
						<h2>Productions</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Voluptatum repellat atque ex, saepe ad ipsum sapiente esse
							qui nemo officiis pariatur eius ea quibusdam similique, sed
							repellendus, unde magnam aperiam!
						</p>
						<div className='conBox'>
							<div className='con'>
								<FontAwesomeIcon icon={faArrowRight} />
							</div>
							<h3>HIRE US NOW</h3>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</figure>
	);
}

export default Visual;
