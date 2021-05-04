import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,

} from './navbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />
		<NavMenu>
		<NavLink to='/aboutme' activeStyle>
			About
		</NavLink>
		<NavLink to='/projects' activeStyle>
			Projects
		</NavLink>
		<NavLink to='/contactme' activeStyle>
			Contact Me
		</NavLink>

		</NavMenu>

	</Nav>
	</>
);
};

export default Navbar;
