import React from "react";
import Logo from "../assets/Navigating-with-Nancy-Final.png";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  //Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
//import ReactDOM from 'react-dom'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);

const Footer = () => {
  // const footerStyle = {
  // 	position: 'fixed',
  // 	bottom: '0',
  // 	width: '100%',
  // 	height: '80px',

  // }
  return (
    //<div style={footerStyle} className='fixed-bottom'>

    <Container>
      <Row>
        <Column>
          <h3 style={{ color: "white", textAlign: "left", marginTop: "0px" }}>
            Social Media
          </h3>
        </Column>
        <Column>
          <Heading>Facebook</Heading>
          <FooterLink href="https://www.facebook.com/navigatingwithnancy" target="_blank">
            <span style={{ marginLeft: "10px"}}>
              <i className="fab fa-facebook"></i>
            </span>
          </FooterLink>
        </Column>

        <Column>
          <Heading>Instagram</Heading>
          <FooterLink href="https://www.instagram.com/nancy.mcbride.940/" target="_blank">
            <span style={{ marginLeft: "10px" }}>
              <i className="fab fa-instagram"></i>
            </span>
          </FooterLink>
        </Column>

        <Column>
          <Heading>LinkedIn</Heading>
          <FooterLink href="www.linkedin.com/in/nancy-mcbride-ks" target="_blank">
            <span style={{ marginLeft: "10px" }}>
              <i className="fab fa-linkedin" />
            </span>
          </FooterLink>
        </Column>

        <Column>
          <Heading>Twitter</Heading>
          <FooterLink href="https://twitter.com/navwithnancy" target="_blank">
            <span style={{ marginLeft: "10px" }}>
              <i className="fab fa-twitter"></i>
            </span>
          </FooterLink>
        </Column>

        <Column>
          <Heading>Navigating with Nancy</Heading>
          <FooterLink href="http://www.navigatingwithnancy.com/" target="_blank">
            <span style={{ marginLeft: "10px" }}>
              <img src={Logo} alt="website logo" style={{ height: 45 }} />
            </span>
          </FooterLink>
        </Column>
      </Row>
    </Container>
    //</div>
  );
};
export default Footer;
