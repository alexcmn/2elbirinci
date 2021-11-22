import React, { useState } from 'react'
import { useHistory } from 'react-router';
import { StyledHamburger, StyledSidebar } from './StyledSidebar'
import { ReactComponent as Menu } from 'Assets/menu.svg';
import { NavLink } from 'react-router-dom';
import { translate } from 'react-switch-lang';

function Sidebar(props) {

    const history = useHistory();
    const [active, setActive] = useState(false);
    const { t } = props;

    const redirectTo = (path) =>{
        history.push(path);
        setActive(false)
    }

    return (
        <>
            <StyledHamburger className={active ? 'hamburger-menu active' : 'hamburger-menu'} onClick={() => setActive(!active)}>
                <Menu/>
            </StyledHamburger>
            <StyledSidebar className={active ? 'active' : ''}>
                <ul>
                    <li onClick={() => redirectTo('/')}>
                        <NavLink exact to="/" data-text={t('sidebar.li1')}>{t('sidebar.li1')}</NavLink>
                    </li>
                    <li onClick={() => redirectTo('/about')}>
                        <NavLink exact to="/about" data-text={t('sidebar.li2')}>{t('sidebar.li2')}</NavLink>
                    </li>
                    <li onClick={() => redirectTo('/service')}>
                        <NavLink exact to="/service" data-text={t('sidebar.li3')}>{t('sidebar.li3')}</NavLink>
                    </li>
                    <li onClick={() => redirectTo('/cars')}>
                        <NavLink exact to="/cars" data-text={t('sidebar.li4')}>{t('sidebar.li4')}</NavLink>
                    </li>
                    <li onClick={() => redirectTo('/contact')}>
                        <NavLink exact to="/contact" data-text={t('sidebar.li5')}>{t('sidebar.li5')}</NavLink>
                    </li>
                </ul>
            </StyledSidebar>
        </>
    )
}

export default translate(Sidebar)