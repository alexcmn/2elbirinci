import React from "react";
import { StyledFooter } from "./StyledFooter";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Bg from "Assets/cars/car8.png";
import Logo from "Assets/logo1.png";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { translate } from "react-switch-lang";

function Footer(props) {
  const { t } = props;

  const corporatneLinks = [
    {
      name: t("footer.links1.li1"),
      path: "/about"
    },
    {
      name: t("footer.links1.li2"),
      path: "/mission"
    },
    {
      name: t("footer.links1.li3"),
      path: "/contact"
    }
  ];

  const serviceLinks = [
    {
      name: t("footer.links2.li1"),
      path: "/garanty"
    },
    {
      name: t("footer.links2.li2"),
      path: "/expertise"
    },
    {
      name: t("footer.links2.li3"),
      path: "/insurance"
    },
    {
      name: t("footer.links2.li4"),
      path: "/casco"
    },
    {
      name: t("footer.links2.li5"),
      path: "/help"
    }
  ];

  // const policyLinks = [
  //     {
  //         name: 'Privacy Policy',
  //         path: '/abouts'
  //     },
  //     {
  //         name: 'Membership Agreement',
  //         path: '/abouts'
  //     },
  //     {
  //         name: 'Terms of Use',
  //         path: '/abouts'
  //     },
  //     {
  //         name: 'Protection of Personal Data',
  //         path: '/abouts'
  //     },
  //     {
  //         name: 'Cookie Policy',
  //         path: '/abouts'
  //     },
  //     {
  //         name: 'About Vehicle Options',
  //         path: '/abouts'
  //     }
  // ]

  const renderLinks = (links) => {
    const newLinks = links.map((link, idx) => {
      return (
        <li key={idx}>
          <Link to={link.path}>{link.name}</Link>
        </li>
      );
    });

    return <ul>{newLinks}</ul>;
  };

  return (
    <StyledFooter bg={Bg}>
      <Container>
        <Row>
          <Col className="footer-col" xs={12} md={4}>
            <div className="logo">
              <img src={Logo} alt="" />
            </div>
            <p>{t("footer.desc")}</p>
          </Col>
          <Col className="footer-col" xs={6} md={4}>
            <h2>{t("footer.links1.h1")}</h2>
            {renderLinks(corporatneLinks)}
          </Col>
          <Col className="footer-col" xs={6} md={4}>
            <h2>{t("footer.links2.h1")}</h2>
            {renderLinks(serviceLinks)}
          </Col>
          {/* <Col className="footer-col" xs={12} md={3}>
                        <h2>Our Service Policy</h2>
                        {renderLinks(policyLinks)}
                    </Col> */}
        </Row>
        <div className="copyrights">
          <div className="cpr">
            <p>
              Designed and developed by{" "}
              <a
                href="https://www.oneitsol.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                ONE IT Solutions
              </a>{" "}
              <AiOutlineCopyrightCircle />
            </p>
          </div>
          <div className="social">
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/inciroglu2elbirinci"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiFacebook />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/incirogluikincielbirinci/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiInstagram />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/inciro%C4%9Flu-otomotiv"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </StyledFooter>
  );
}

export default translate(Footer);
