import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container className="container">
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/md-samir-9ba4351bb/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/Samir-Alam"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/samir_ig_0/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
        <p className="align-items-center text-center dbs">Developed By Samir</p>
    </footer>
  )
}