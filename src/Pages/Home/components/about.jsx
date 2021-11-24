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
import { useHistory } from 'react-router';

function About({ t }) {

    const history = useHistory();

    let parent = document.querySelectorAll('.animate-text');
    useEffect(() => {
        for (let i = 0; i < parent.length; i++) {
            parent[i].style.width = parent[i].children[0].clientWidth + "px";
        };
    }, [parent])

    const redirectTo = () => {
        history.push('/about')
    }

    const icons = [
        {
            icon: <HB1 />,
            title: t('home.about.icon1')
        },
        {
            icon: <HB2 />,
            title: t('home.about.icon2')
        },
        {
            icon: <HB3 />,
            title: t('home.about.icon3')
        },
        {
            icon: <HB4 />,
            title: t('home.about.icon4')
        },
        {
            icon: <HB5 />,
            title: t('home.about.icon5')
        },
        {
            icon: <HB6 />,
            title: t('home.about.icon6')
        }
    ]

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
                                    {
                                        icons.map((icon, idx) => {
                                            return (
                                                <Col key={idx} md={2} onClick={() => redirectTo()}>
                                                    {icon.icon}
                                                    <p>{icon.title}</p>
                                                </Col>
                                            )
                                        })
                                    }
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
