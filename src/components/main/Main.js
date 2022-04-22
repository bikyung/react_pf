import Visual from './Visual';
import Event from './Event';
import Vids from './Vids';
import Pics from './Pics';
import Header from '../common/Header';
import Anime from '../../class/anim';
import Btns from './Btns';
import { useEffect, useRef, useState } from 'react';

const path = process.env.PUBLIC_URL;

function Main() {
	const main = useRef(null);
	const pos = useRef([]);
	const [index, setIndex] = useState(0);

	const getPos = () => {
		const secs = main.current.querySelectorAll('.myScroll');
		pos.current = [];
		for (const sec of secs) pos.current.push(sec.offsetTop);
	};

	const activation = () => {
		const base = -200;
		let scroll = window.scrollY;
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

	useEffect(() => {
		new Anime(window, {
			prop: 'scroll',
			value: pos.current[index],
			duration: 500,
		});
	}, [index]);
	return (
		<main ref={main}>
			<Header type={'main'} logoSrc={`${path}/img/logo.png`} />
			<Visual />
			<Event />
			<Vids />
			<Pics />
			<Btns setIndex={setIndex} />
		</main>
	);
}

export default Main;
