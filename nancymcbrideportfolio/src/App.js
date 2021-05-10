import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';


function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="home" exact component={Home} />
					<Route path="/portfolio" exact component={Portfolio} />
					<Route path="/contact" exact component={Contact} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
