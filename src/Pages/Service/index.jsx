import React, { useState } from 'react'
import { StyledService } from './StyledService';
import Car from 'Assets/cars/car13.png'
import ServiceTabs from './components/ServiceTabs'
import { translate } from 'react-switch-lang';

function Service(props) {
    const [activeTab, setActiveTab] = useState('garanty')
    const { t } = props;

    return (
        <StyledService>
            <div className="banner">
                <img className="car-img" src={Car} alt="" />
                <div className="main-head">
                    <h1>{t(`service.tabs.${activeTab}`)}</h1>
                </div>
            </div>
            <ServiceTabs
                activeTab={activeTab}
                t={t}
                handleTabChange={(tab) => setActiveTab(tab)}
            />
        </StyledService>
    )
}

export default translate(Service);