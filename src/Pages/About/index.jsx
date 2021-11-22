import React, { useState } from 'react'
import { StyledAbout } from './StyledAbout'
import Car from 'Assets/cars/car15.png'
import AboutTabs from './components/AboutTabs'
import { translate } from 'react-switch-lang';

function About(props) {

    const [activeTab, setActiveTab] = useState('about')
    const { t } = props;

    return (
        <StyledAbout>
            <div className="banner">
                <img className="car-img" src={Car} alt="" />
                <div className="main-head">
                    <h1>{t(`about.tabs.${activeTab}`)}</h1>
                </div>
            </div>
            <AboutTabs
                activeTab={activeTab}
                t={t}
                handleTabChange={(tab) => setActiveTab(tab)}
            />
        </StyledAbout>
    )
}

export default translate(About);