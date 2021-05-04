import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Aboutme from './components/pages/aboutme';
import Projects from '.components/pages/projects';
import Contactme from '.components/pages/contactme';

function App() {
return (
	<Router>
	<Navbar />
	<Switch>
		<Route path='./pages/aboutme' component={Aboutme} />
		<Route path='./pages/projects' component={Projects}/>
		<Route path='./pages/contactme' component={Contactme} />
	</Switch>
	</Router>
);
}

export default App;
