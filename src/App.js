import { Route, Switch } from 'react-router-dom';

import './scss/style.scss';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

import Visual from './components/main/Visual';
import Content from './components/main/Content';

import Motorcycle from './components/sub/Motorcycle';
import Department from './components/sub/Department';
import Youtube from './components/sub/Youtube';
import Gallery from './components/sub/Gallery';
import News from './components/sub/News';
import Contact from './components/sub/Contact';
import Join from './components/sub/Join';

function App() {
	return (
		<>
			<Switch>
				<Route exact path='/'>
					<Header type={'main'} />
					<Visual />
					<Content />
				</Route>

				<Route path='/'>
					<Header type={'sub'} />
				</Route>
			</Switch>

			<Route path='/motorcycle' component={Motorcycle} />
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
