import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/Navigating-with-Nancy-Final.png'

const Navbar = () => {
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	const closeMenu = () => {
		setOpen(false);
	};

	return (
		<nav className="navbar">
			<Link to="/" className="nav-logo">
			<img src={logo} alt='logo' style={{ width:'80px'}}/>
				Nancy McBride
			</Link>


			<div onClick={handleClick} className="nav-icon">
				{open ? <FiX /> : <FiMenu />}
			</div>


			<ul className={open ? 'nav-links active' : 'nav-links'}>
				<li className="nav-item">
					<Link to="/" className="nav-link"
			onClick={closeMenu}>
						Home
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/portfolio" className="nav-link" onClick={closeMenu}>
						Portfolio
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/contact" className="nav-link" onClick={closeMenu}>
						Contact
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;