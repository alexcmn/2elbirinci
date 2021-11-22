import React from 'react'
import { Accordion, Col, Container, Row } from 'react-bootstrap'
import { StyledHomeFAQ } from '../StyledHome'
import Car from 'Assets/cars/car4.png';
import { translate } from 'react-switch-lang';

function FAQ({ t }) {

    const faqs = [
        {
            id: 0,
            title: t('home.faq.faq1h'),
            desc: t('home.faq.faq1p'),
        },
        {
            id: 1,
            title: t('home.faq.faq2h'),
            desc: t('home.faq.faq2p'),

        },
        {
            id: 2,
            title: t('home.faq.faq3h'),
            desc: t('home.faq.faq3p'),

        },
        {
            id: 3,
            title: t('home.faq.faq4h'),
            desc: t('home.faq.faq4p'),

        },
        {
            id: 4,
            title: t('home.faq.faq5h'),
            desc: t('home.faq.faq5p'),

        },
        {
            id: 5,
            title: t('home.faq.faq6h'),
            desc: t('home.faq.faq6p'),

        },
        {
            id: 6,
            title: t('home.faq.faq7h'),
            desc: t('home.faq.faq7p')
        }
    ]

    return (
        <StyledHomeFAQ>
            <Container>
                <Row>
                    <Col md={12} className="faq-wrapp">
                        <img src={Car} alt="" />
                        <h2>{t('home.faq.title')}</h2>
                        <p>{t('home.faq.desc')}</p>
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

export default translate(FAQ);
