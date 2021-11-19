import React, { useEffect, useState } from 'react'
import { StyledHome } from './StyledHome'
import { ReactComponent as Logo } from 'Assets/logo-w.svg';
import { ReactComponent as Lines } from 'Assets/lines.svg';
import Car from 'Assets/cars/car16.png';
import CarFilters from './components/carFilters';
import About from './components/about';
import FAQ from './components/faq';
import useWindowDimensions from 'Hooks/useWindowDimensions';
import { FiMoreHorizontal } from 'react-icons/fi';

export default function Home() {

    const [showFilters, setShowFilters] = useState(false);
    const { width } = useWindowDimensions();

    return (
        <StyledHome>
            <div className="banner">
                <img className="car-img" src={Car} alt="" />
                <div className="overlay"><Lines /></div>
                <div className="logo">
                    <Logo />
                </div>
                <div className="content">
                    <div class="headline" data-text="Let's choose">Let's choose</div>
                    <div class="headline" data-text="your companion">your companion</div>
                    <div class="headline" data-text="together">together</div>
                </div>
                {
                    width < 768 ?
                        <div className="plus-btn" onClick={() => setShowFilters(!showFilters)}><FiMoreHorizontal/></div>
                    : null
                }
                <CarFilters isMobActive={showFilters} />
            </div>
            <About />
            <FAQ />
        </StyledHome>
    )
}
