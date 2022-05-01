import Header from '../common/Header';
import Visual from './Visual';
import Photo from './Photo';
import Event from './Event';
import Vids from './Vids';
import Pics from './Pics';
import TextContent from './TextContent';
import Anime from '../../class/anim';
import Btns from './Btns';

import { useEffect, useRef, useState } from 'react';

const path = process.env.PUBLIC_URL;

function Main() {
	const main = useRef(null);
	const pos = useRef([]);
	const [index, setIndex] = useState(0);
	const [scrolled, setScrolled] = useState(0);

	const getPos = () => {
		const secs = main.current.querySelectorAll('.myScroll');
		pos.current = [];
		for (const sec of secs) pos.current.push(sec.offsetTop);
	};

	const activation = () => {
		const base = -200;
		let scroll = window.scrollY;
		setScrolled(scroll);
		const btns = main.current.querySelectorAll('.btns li');

		pos.current.map((pos, idx) => {
			if (scroll >= pos + base) {
				for (const btn of btns) btn.classList.remove('on');
				btns[idx].classList.add('on');
			}
		});
	};

	useEffect(() => {
		getPos();
		window.addEventListener('resize', getPos);
		window.addEventListener('scroll', activation);
		return () => {
			window.removeEventListener('resize', getPos);
			window.removeEventListener('scroll', activation);
		};
	}, []);

	useEffect(() => {}, [scrolled]);

	useEffect(() => {
		new Anime(window, {
			prop: 'scroll',
			value: pos.current[index],
			duration: 500,
		});
	}, [index]);

	return (
		<>
			<main ref={main}>
				<Header
					type={'main'}
					logoSrc={`${path}/img/logo.png`}
					className='myScroll'
				/>
				<Visual />
				<Photo scrolled={scrolled} posStart={pos.current[1]} />
				<Vids scrolled={scrolled} posStart={pos.current[3]} />
				<TextContent scrolled={scrolled} posStart={pos.current[4]} />
				<Pics scrolled={scrolled} posStart={pos.current[5]} />
				<Event scrolled={scrolled} posStart={pos.current[6]} />
				<Btns setIndex={setIndex} />
			</main>
		</>
	);
}

export default Main;
