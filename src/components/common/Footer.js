import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const path = process.env.PUBLIC_URL;

function Footer() {
	return (
		<footer id='footer'>
			<div className='inner'>
				<div className='wrap'>
					<div className='footer_logo'>
						<h1>
							<NavLink exact to='/'>
								<img src={`${path}/img/logo.png`} alt='logo' />
							</NavLink>
						</h1>
						<ul>
							<li className='on'>
								<FontAwesomeIcon icon={faFacebook} />
							</li>
							<li>
								<FontAwesomeIcon icon={faYoutube} />
							</li>
							<li>
								<FontAwesomeIcon icon={faTwitter} />
							</li>
						</ul>
					</div>
					<div className='footer_txt'>
						<div className='txt1'>
							<h3>Our Service</h3>
							<ul>
								<li>Equipment Hire</li>
								<li>Filmming Service</li>
								<li>Studio Hire</li>
								<li>Dressing</li>
								<li>Flexibe Office Space</li>
							</ul>
						</div>
						<div className='txt1'>
							<h3>Quick Links</h3>
							<ul>
								<li>My Account</li>
								<li>View Order</li>
								<li>About Us</li>
								<li>Promotions</li>
								<li>Contact us</li>
							</ul>
						</div>
						<div className='txt1'>
							<h3>Conect Width us</h3>
							<ul>
								<li>A:L.E Goulburn st.</li>
								<li>P:(+88) 1990 6886</li>
								<li>E:contact@studio.com</li>
							</ul>
						</div>
					</div>
				</div>
				<div className='policy'>
					<h2>Copright 2022NineStudio-All Right Reserved</h2>
					<ul>
						<li>PRIVACY POLICY</li>
						<li>TEAM AND CONDITIONS</li>
					</ul>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
