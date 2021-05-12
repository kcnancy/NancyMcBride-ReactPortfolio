import React from "react";
import Logo from '../assets/Navigating-with-Nancy-Final.png'
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {

Container,
Row,
Column,
FooterLink,
} from "./FooterStyles";



const Footer = () => {
	const footerStyle = {
		position: 'fixed',
		bottom: '0',
		width: '100%',
		height: '80px',

	}
return (
	<div style={footerStyle} className='fixed-bottom'>
	
	<Container>
		<Row>
		<h5 style={{ color: "white",
				textAlign: "left",
				marginTop: "0px" }}>
                    Social Media
		</h5>
		<Column>
        <FooterLink href="https://www.facebook.com/navigatingwithnancy">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
		</Column>
		<Column>
        <FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
		</Column>
		<Column>
        <FooterLink href="www.linkedin.com/in/nancy-mcbride-ks">
			<i className="fab fa-linkedin">
				<span style={{ marginLeft: "10px" }}>
				LinkedIn
				</span>
			</i>
			</FooterLink>
		</Column>
		<Column>
			<FooterLink href="https://twitter.com/navwithnancy">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			</Column>
		<Column>
			<FooterLink href="http://www.navigatingwithnancy.com/">
			<i> <img src={Logo} alt="website logo" style={{height:50}} />
				<span style={{ marginLeft: "10px" }}>
				Navigating with Nancy
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</div>
);
};
export default Footer;
