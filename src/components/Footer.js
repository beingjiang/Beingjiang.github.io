import { Container, Row, Col } from "react-bootstrap";
import logo from '../assets/Assets/logo.png';
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          
      </Container>
    </footer>
  )
}
