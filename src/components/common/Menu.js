import { useState, forwardRef, useImperativeHandle } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const Menu = forwardRef((props, ref) => {
	const active = { color: 'rgba(20, 88, 63, 0.8)' };
	const [open, setOpen] = useState(false);

	useImperativeHandle(ref, () => {
		return {
			open: () => setOpen(true),
			close: () => setOpen(false),
		};
	});

	return (
		<AnimatePresence>
			{open && (
				<>
					<motion.nav
						initial={{
							x: -280,
							opacity: 0,
						}}
						animate={{
							x: 0,
							opacity: 1,
							transition: { duration: 0.5, type: 'spring', bounce: 0 },
						}}
						exit={{
							x: -280,
							opacity: 0,
							transition: { duration: 0.5, type: 'spring', bounce: 0 },
						}}>
						<h1>
							<NavLink exact to='/'>
								<img src={props.logoSrc} alt='logo' />
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
					</motion.nav>
				</>
			)}
		</AnimatePresence>
	);
});

export default Menu;
