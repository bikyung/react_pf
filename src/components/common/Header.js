import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Menu from './Menu';
import { useRef, useEffect, useState } from 'react';

function Header(props) {
	const active = { color: 'rgba(20, 88, 63, 0.8)' };
	const path = process.env.PUBLIC_URL;
	const menu = useRef(null);
	const [opened, setOpened] = useState(false);

	useEffect(() => {
		opened ? menu.current.open() : menu.current.close();
	}, [opened]);

	return (
		<>
			<Menu
				logoSrc={`${path}/img/logo.png`}
				ref={menu}
				opened={opened}
				setOpened={setOpened}
			/>
			<header id='header' className='myScroll'>
				<div className='inner'>
					<h1>
						<NavLink exact to='/'>
							<img src={`${path}/img/logo.png`} alt='logo' />
						</NavLink>
					</h1>

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
					<FontAwesomeIcon
						icon={faBars}
						onClick={() => {
							setOpened(!opened);
						}}
					/>
				</div>
			</header>
		</>
	);
}

export default Header;
