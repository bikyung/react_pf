import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setMembers, setYoutube } from './redux/actions';
import axios from 'axios';

import './scss/style.scss';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

import Main from './components/main/Main';

import Department from './components/sub/Department';
import Youtube from './components/sub/Youtube';
import Gallery from './components/sub/Gallery';
import News from './components/sub/News';
import Contact from './components/sub/Contact';
import Join from './components/sub/Join';
import { useEffect } from 'react';

const path = process.env.PUBLIC_URL;

function App() {
	const dispatch = useDispatch();
	// const abc = useSelector((state) => state.memberReducer.members);
	const fetchMembers = async () => {
		const url = path + '/DB/department.json';
		await axios.get(url).then((json) => {
			dispatch(setMembers(json.data.data));
		});
	};

	const fetchYoutube = async () => {
		const key = 'AIzaSyBA0vVAYlhuCiLDSkDUi_LswCkyeB6NAoI';
		const num = 9;
		const id = 'PL92HST3Zi7rbOhNiZxBGcwmdmkYaEl72W';
		const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&maxResults=${num}&playlistId=${id}`;

		await axios.get(url).then((json) => {
			dispatch(setYoutube(json.data.items));
		});
	};

	useEffect(() => {
		fetchMembers();
		fetchYoutube();
	}, []);

	return (
		<>
			<Switch>
				<Route exact path='/'>
					<Main />
				</Route>

				<Route path='/'>
					<Header type={'sub'} />
				</Route>
			</Switch>

			<Route path='/department' component={Department} />
			<Route path='/gallery' component={Gallery} />
			<Route path='/youtube' component={Youtube} />
			<Route path='/news' component={News} />
			<Route path='/contact' component={Contact} />
			<Route path='/join' component={Join} />

			<Footer />
		</>
	);
}

export default App;
