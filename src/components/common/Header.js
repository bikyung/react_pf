import React from 'react';
import { NavLink } from 'react-router-dom';

const path = process.env.PUBLIC_URL;

function Header(props) {
	const active = { color: '#999' };

	return (
		<header id='header' className={props.type}>
			<div className='inner'>
				<h1>
					<NavLink exact to='/'>
						<img src={`${path}/img/logo.png`} alt='logo' />
					</NavLink>
				</h1>

				<nav>
					<ul className='gnb'>
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
						<li>
							<NavLink to='/join' activeStyle={active}>
								Join
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header;
