import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import Popup from '../common/Popup';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const path = process.env.PUBLIC_URL;
function Pics(props) {
	const { flickr } = useSelector((state) => state.flickrReducer);
	const pop = useRef(null);
	const [index, setIndex] = useState(0);
	const scrolled = props.scrolled;
	const start = props.posStart;
	const base = -800;
	const position = scrolled - start + base;

	return (
		<>
			<section id='pics' className='myScroll'>
				<div className='inner'>
					<h2>Recent Gallery</h2>
					<h3>Behind The Scenes</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
						aperiam numquam, temporibus doloribus obcaecati autem nesciunt
						rem reprehenderit similique fugit non aspernatur quos deserunt
						perferendis commodi? Adipisci, deserunt pariatur. Sed, velit
						debitis quam necessitatibus modi temporibus, nulla distinctio
						eaque aliquid quidem quo! Dolor tenetur porro modi animi
						eligendi quasi vero!
					</p>
					<div className='pics_con'>
						<div
							className='pics1'
							style={
								position >= 0
									? { transform: `translateX(-${position / 2}px)` }
									: null
							}>
							<img src={`${path}/img/pic2.jpg`} />
							<img src={`${path}/img/pic4.jpg`} />
						</div>
						<div
							className='pics2'
							style={
								position >= 0
									? {
											transform: `translateX(${position / 2}px)`,
									  }
									: null
							}>
							<img src={`${path}/img/pic1.jpg`} />
							<img src={`${path}/img/pic3.jpg`} />
						</div>
					</div>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Officia ipsa accusamus est laudantium fugiat quisquam
						voluptatum! Perspiciatis nobis id numquam! Dignissimos natus
						aperiam, excepturi eos, et modi earum exercitationem quisquam
						amet itaque reprehenderit accusamus neque praesentium
						voluptate, voluptates commodi tempore aliquid quod dicta est
						laudantium vero suscipit optio! Reiciendis eligendi minus eum
						labore error. Enim dolorem dolor minus explicabo recusandae!
					</p>
					<div className='wrap'>
						<h2>Related Projects</h2>
						<Swiper
							spaceBetween={5}
							navigation
							loop={true}
							autoplay={{
								delay: 3000,
								disableOnInteraction: true,
							}}
							breakpoints={{
								0: {
									width: 0,
									slidesPerView: 1,
								},
								539: {
									width: 539,
									slidesPerView: 2,
								},
								768: {
									width: 768,
									slidesPerView: 3,
								},
								1179: {
									width: 1179,
									slidesPerView: 4,
								},
							}}
							modules={[Navigation, Pagination, Autoplay]}>
							{flickr.map((item, idx) => {
								if (idx < 12) {
									return (
										<SwiperSlide key={idx}>
											<article
												onClick={() => {
													setIndex();
													pop.current.open();
												}}>
												<div className='pic'>
													<img
														src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_c.jpg`}
													/>
												</div>
												<div className='txt'>
													<h2>{item.owner}</h2>
													<p>{item.title}</p>
												</div>
											</article>
										</SwiperSlide>
									);
								}
							})}
						</Swiper>
					</div>
				</div>
			</section>
			<Popup ref={pop}>
				{flickr.length !== 0 && (
					<img
						src={`https://live.staticflickr.com/${flickr[index].server}/${flickr[index].id}_${flickr[index].secret}_b.jpg`}
					/>
				)}
				<span onClick={() => pop.current.close()}>Close</span>
			</Popup>
		</>
	);
}

export default Pics;
