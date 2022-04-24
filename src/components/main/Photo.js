import React from 'react';

function Photo() {
	const path = process.env.PUBLIC_URL;
	return (
		<>
			<section id='Photo' className='myScroll'>
				<div className='inner'>
					<div className='wrap'>
						<div className='photo'>
							<img src={`${path}/img/section1.jpg`} />
						</div>
						<div className='txt'>
							<h2>
								We are a creative film and video production company
								based in Berlin & Hamburg
							</h2>
							<p>
								Lorem ipsum dolor, sit amet consectetur adipisicing
								elit. Fugiat beatae quod aperiam doloremque dignissimos,
								facere eaque deserunt consequuntur quo et nam. Vitae ex
								dolore, perspiciatis deserunt maxime nihil eum dolor.
							</p>
							<p>
								Lorem ipsum dolor sit amet consectetur, adipisicing
								elit. Necessitatibus, illum.
							</p>
							<a href='#'>HIRE US NOW</a>
							<div className='schedule'>
								<article>
									<h2>27</h2>
									<h3>YEARS OF EXPERIENCE</h3>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing
										elit. Obcaecati, vero.
									</p>
								</article>
								<article>
									<h2>31</h2>
									<h3>COMPLETED PROJECTS</h3>
									<p>
										Lorem ipsum, dolor sit amet consectetur
										adipisicing elit. Soluta?
									</p>
								</article>
							</div>
						</div>
					</div>
				</div>
			</section>
			;
		</>
	);
}

export default Photo;
