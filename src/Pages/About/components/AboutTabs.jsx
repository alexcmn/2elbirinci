import React from 'react'
import { Tabs, Tab, Container, Row, Col } from 'react-bootstrap'
import { StyledHeadline } from 'Components/shared/styledComponents/Elements'
import { StyledAboutTabs } from '../StyledAbout'
import { translate } from 'react-switch-lang';
import Gar1 from 'Assets/gar1.png';
import Gar2 from 'Assets/gar2.png';

function AboutTabs({ activeTab, handleTabChange, t }) {
    return (
        <StyledAboutTabs>
            <Container>
                <Tabs
                    id="controlled-tab-example"
                    activeKey={activeTab}
                    onSelect={(k) => handleTabChange(k)}
                >
                    <Tab eventKey="about" title={t(`about.tabs.about`)}>
                        <StyledHeadline data-text={t('about.tab1.h1')}>{t('about.tab1.h1')}</StyledHeadline>
                        <p className="mb-5">{t('about.tab1.p1')}</p>
                        <StyledHeadline data-text={t('about.tab1.h2')}>{t('about.tab1.h2')}</StyledHeadline>
                        <p className="mb-5">{t('about.tab1.p2')}</p>
                    </Tab>
                    <Tab eventKey="mission" title={t(`about.tabs.mission`)}>
                        <StyledHeadline data-text={t('about.tab2.h1')}>{t('about.tab2.h1')}</StyledHeadline>
                        <p className="mb-5">{t('about.tab2.p1')}</p>
                        <StyledHeadline data-text={t('about.tab2.h2')}>{t('about.tab2.h2')}</StyledHeadline>
                        <p className="mb-5">{t('about.tab2.p2')}</p>
                    </Tab>
                    <Tab eventKey="guaranty" title={t(`about.tabs.guaranty`)}>
                        <StyledHeadline data-text={t('about.tab3.h1')}>{t('about.tab3.h1')}</StyledHeadline>
                        <p className="mb-5">{t('about.tab3.p1')}</p>
                        <Row>
                            <Col xs={12} md={6}>
                                <img src={Gar1} alt="" />
                                <p>{t('about.tab3.gar1')}</p>
                            </Col>
                            <Col xs={12} md={6}>
                                <img src={Gar2} alt="" />
                                <p>{t('about.tab3.gar2')}</p>
                            </Col>
                        </Row>
                    </Tab>
                </Tabs>
            </Container>
        </StyledAboutTabs>
    )
}

export default translate(AboutTabs);