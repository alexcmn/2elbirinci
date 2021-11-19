import React from 'react'
import Navigation from 'Components/Navigation';
import Footer from 'Components/Footer';
import ModalSystem from 'Components/ModalSystem'
import Sidebar from 'Components/Sidebar';
import { useLocation } from 'react-router-dom';

export default function Layout(props) {

    const location = useLocation();

    return (
        <>
            {/* <Navigation /> */}
            <Sidebar/>
            {props.children}
            <Footer />
            <ModalSystem />
        </>
    )
}
