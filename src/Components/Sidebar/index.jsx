import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { StyledHamburger, StyledSidebar } from './StyledSidebar'
import useWindowScroll from 'Hooks/useWindowScroll';
import { SideBarOpenAction } from 'Store/actions/layout_actions';
import { ReactComponent as Menu } from 'Assets/menu.svg';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {

    const history = useHistory();
    const dispatch = useDispatch();
    const { scrollTop } = useWindowScroll();
    const [active, setActive] = useState(false);

    const openSidebar = () => {
        dispatch(SideBarOpenAction())
    }

    return (
        <>
            <StyledHamburger className={active ? 'hamburger-menu active' : 'hamburger-menu'} onClick={() => setActive(!active)}>
                <Menu/>
            </StyledHamburger>
            <StyledSidebar className={active ? 'active' : ''}>
                <ul>
                    <li>
                        <NavLink exact to="/" data-text="Home">Home</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/about" data-text="Corporate">Corporate</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/about" data-text="Service">Service</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/about" data-text="Find Your Vehicle">Find Your Vehicle</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/about" data-text="Contact Us">Contact Us</NavLink>
                    </li>
                </ul>
            </StyledSidebar>
        </>
    )
}
