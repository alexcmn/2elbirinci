import React from 'react'
import { withScriptjs, withGoogleMap } from 'react-google-maps';
import { StyledContact } from './StyledContact'
import Car from 'Assets/cars/car3.png'
import PropMap from './components/propMap';
import { Col, Container, Row } from 'react-bootstrap'
import { StyledHeadline } from 'Components/shared/styledComponents/Elements';
import { FiMapPin, FiPhoneCall, FiMail } from 'react-icons/fi';
import { ImWhatsapp } from 'react-icons/im';

const LocationMap = withScriptjs(withGoogleMap(PropMap));

export default function Contact() {
    return (
        <StyledContact>
            <div className="banner">
                <img className="car-img" src={Car} alt="" />
                <div className="main-head">
                    <h1>Contact US</h1>
                </div>
            </div>
            <div className="contact">
                <Container>
                    <Row>
                        <Col md={6} className="map">
                            <LocationMap
                                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyA0XKiBvpN0ZC5I75h4va9H1ZZJe82zFRQ`}
                                loadingElement={<div style={{ height: '100%' }}></div>}
                                containerElement={<div style={{ height: '100%' }}></div>}
                                mapElement={<div style={{ height: '100%' }}></div>}
                            />
                        </Col>
                        <Col md={6} className="info">
                            <p>İnciroğlu Otomotiv A.Ş.</p>
                            <StyledHeadline data-text="İnciroglu 2nd Hand First">İnciroglu 2nd Hand First</StyledHeadline>
                            <ul>
                                <li><FiMapPin/> Address: ANKARA YOLU 12. KM. AMBAR MEVKİ / KAYSERİ</li>
                                <li><FiPhoneCall/> Phone: 0 352 311 40 00</li>
                                <li><ImWhatsapp/> WhatsApp: 0 554 537 26 00</li>
                                <li><FiMail/> Mail: info@incirogluikinciel.com</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        </StyledContact>
    )
}
