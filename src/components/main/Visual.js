import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Visual() {
	return (
		<figure id='visual' className='myScroll'>
			<Swiper spaceBetween={40} slidesPerview={3}>
				<SwiperSlide>1</SwiperSlide>
				<SwiperSlide>2</SwiperSlide>
				<SwiperSlide>3</SwiperSlide>
				<SwiperSlide>4</SwiperSlide>
				<SwiperSlide>5</SwiperSlide>
			</Swiper>
		</figure>
	);
}

export default Visual;
