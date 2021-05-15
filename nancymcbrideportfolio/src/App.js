import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from "./components/Footer";
import Contact from './pages/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import { dom } from '@fortawesome/fontawesome-svg-core'

dom.watch() // This will kick of the initial replacement of i to svg tags and configure a MutationObserver

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/home" exact component={Home} />
					<Route path="/portfolio" exact component={Portfolio} />
					<Route path="/contact" exact component={Contact} />
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
