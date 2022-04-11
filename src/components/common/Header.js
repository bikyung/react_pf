import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

const path = process.env.PUBLIC_URL;

function Header(props) {
	const active = { color: '#999' };
	const active1 = { color: '#4fb627' };

	return (
		<header id='header' className={props.type}>
			<div className='inner'>
				<h1>
					<NavLink exact to='/'>
						<img src={`${path}/img/logo1.png`} alt='logo' />
					</NavLink>
				</h1>

				<nav>
					<ul className='gnb'>
						<li>
							<NavLink to='/motorcycle' activeStyle={active}>
								Motorcycle
							</NavLink>
						</li>
						<li>
							<NavLink to='/department' activeStyle={active}>
								Department
							</NavLink>
						</li>
						<li>
							<NavLink to='/gallery' activeStyle={active}>
								Gallery
							</NavLink>
						</li>
						<li>
							<NavLink to='/youtube' activeStyle={active}>
								Youtube
							</NavLink>
						</li>
						<li>
							<NavLink to='/news' activeStyle={active}>
								News
							</NavLink>
						</li>
						<li>
							<NavLink to='/contact' activeStyle={active}>
								Contact
							</NavLink>
						</li>
					</ul>

					<ul className='util'>
						<li>
							<NavLink to='/join' activeStyle={active1}>
								<FontAwesomeIcon icon={faUserPlus} />
							</NavLink>
						</li>
					</ul>
				</nav>
				<FontAwesomeIcon icon={faBars} />
			</div>
		</header>
	);
}

export default Header;
