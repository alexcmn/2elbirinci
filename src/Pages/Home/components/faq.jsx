import React from 'react'
import { Accordion, Col, Container, Row } from 'react-bootstrap'
import { StyledHomeFAQ } from '../StyledHome'
import Car from 'Assets/cars/car4.png';
import { StyledHeadline } from 'Components/shared/styledComponents/Elements';
import { ButtonPrimary } from 'Components/shared/styledComponents/Button';

export default function FAQ() {

    const faqs = [
        {
            id: 0,
            title: 'This is some FAQ Question 1',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        },
        {
            id: 1,
            title: 'This is some FAQ Question 2',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',

        },
        {
            id: 2,
            title: 'This is some FAQ Question 3',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',

        },
        {
            id: 3,
            title: 'This is some FAQ Question 4',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',

        },
        {
            id: 4,
            title: 'This is some FAQ Question 5',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',

        },
        {
            id: 5,
            title: 'This is some FAQ Question 6',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',

        },
        {
            id: 6,
            title: 'This is some FAQ Question 7',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',

        }
    ]

    return (
        <StyledHomeFAQ>
            <Container>
                <Row>
                    <Col md={12} className="faq-wrapp">
                        <img src={Car} alt="" />
                        <h2>Let us take your vehicle</h2>
                        <p>İlan ile uğraşma! Düşük ve yanlış fiyat verenlerden uzak dur! Ekspertiz randevusu almak ile zaman kaybetme! Aracını en yüksek fiyata sat! Paran anında hesabında! Üye olmak yok, şifre oluşturmak yok!</p>
                        <Accordion>
                            {
                                faqs.map((faq, idx) => {
                                    return (
                                        <Accordion.Item eventKey={faq.id}>
                                            <Accordion.Header>{faq.title}</Accordion.Header>
                                            <Accordion.Body>{faq.desc}</Accordion.Body>
                                        </Accordion.Item>
                                    )
                                })
                            }
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </StyledHomeFAQ>
    )
}
