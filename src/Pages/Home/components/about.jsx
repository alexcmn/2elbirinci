import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { StyledHomeAbout } from '../StyledHome'
import Car from 'Assets/cars/car1.png';
import { StyledHeadline } from 'Components/shared/styledComponents/Elements';
import { ReactComponent as HB1 } from 'Assets/icons/hb1.svg';
import { ReactComponent as HB2 } from 'Assets/icons/hb2.svg';
import { ReactComponent as HB3 } from 'Assets/icons/hb3.svg';
import { ReactComponent as HB4 } from 'Assets/icons/hb4.svg';
import { ReactComponent as HB5 } from 'Assets/icons/hb5.svg';
import { ReactComponent as HB6 } from 'Assets/icons/hb6.svg';
import { translate } from 'react-switch-lang';

function About({ t }) {

    let parent = document.querySelectorAll('.animate-text');
    useEffect(() => {
        for (let i = 0; i < parent.length; i++) {
            parent[i].style.width = parent[i].children[0].clientWidth + "px";
        };
    }, [parent])

    return (
        <StyledHomeAbout>
            <div className="ab-wrapp">
                <Container>
                    <Row>
                        <Col md={5} className="left-ab">
                            <img src={Car} alt="" />
                        </Col>
                        <Col md={7} className="right-ab">
                            <div className="desc-box">
                                <StyledHeadline data-text={t('home.about.h1')}>{t('home.about.h1')}</StyledHeadline>
                                <p>{t('home.about.p1')}</p>
                            </div>
                            <div className="desc-box">
                                <StyledHeadline data-text={t('home.about.h2')}>{t('home.about.h2')}</StyledHeadline>
                                <p>{t('home.about.p2')}</p>
                                <div className="row icon-desc">
                                    <Col md={2}>
                                        <HB1/>
                                        <p>{t('home.about.icon1')}</p>
                                    </Col>
                                    <Col md={2}>
                                        <HB2/>
                                        <p>{t('home.about.icon2')}</p>
                                    </Col>
                                    <Col md={2}>
                                        <HB3/>
                                        <p>{t('home.about.icon3')}</p>
                                    </Col>
                                    <Col md={2}>
                                        <HB4/>
                                        <p>{t('home.about.icon4')}</p>
                                    </Col>
                                    <Col md={2}>
                                        <HB5/>
                                        <p>{t('home.about.icon5')}</p>
                                    </Col>
                                    <Col md={2}>
                                        <HB6/>
                                        <p>{t('home.about.icon6')}</p>
                                    </Col>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div class="bg-text-container">
                    <div class="animate-text">
                        <span> 2.El Birinci</span>
                        <span> 2.El Birinci</span>
                    </div>
                    <div class="animate-text left">
                        <span> 2.El Birinci</span>
                        <span> 2.El Birinci</span>
                    </div>
                </div>
            </div>
        </StyledHomeAbout>
    )
}

export default translate(About);
