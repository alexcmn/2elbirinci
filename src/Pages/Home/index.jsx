import React, { useEffect, useState } from 'react'
import { StyledHome } from './StyledHome'
import Logo from 'Assets/logo1.png';
import { ReactComponent as Lines } from 'Assets/lines.svg';
import Car from 'Assets/cars/car16.png';
import CarFilters from './components/carFilters';
import About from './components/about';
import FAQ from './components/faq';
import useWindowDimensions from 'Hooks/useWindowDimensions';
import { FiMoreHorizontal } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { getAllBodyTypes, getAllBrands, getAllCars, getAllColors, getAllFuelTypes, getAllGearTypes, getAllModels } from 'Store/actions/cars_actions';
import { translate, getLanguage } from 'react-switch-lang';

function Home(props) {

    const dispatch = useDispatch();
    const [showFilters, setShowFilters] = useState(false);
    const { width } = useWindowDimensions();
    const { t } = props;
    const activeLang = getLanguage();

    useEffect(() => {
        dispatch(getAllCars());
        dispatch(getAllBrands());
        dispatch(getAllModels());
        dispatch(getAllBodyTypes());
        dispatch(getAllFuelTypes());
        dispatch(getAllGearTypes());
        dispatch(getAllColors());
    }, [dispatch])

    return (
        <StyledHome>
            <div className="banner">
                <img className="car-img" src={Car} alt="" />
                <div className="overlay"><Lines /></div>
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>
                <div className="content">
                    <div class="headline" data-text={t('home.banner.h1')}>{t('home.banner.h1')}</div>
                    <div class="headline" data-text={t('home.banner.h2')}>{t('home.banner.h2')}</div>
                    <div class="headline" data-text={t('home.banner.h3')}>{t('home.banner.h3')}</div>
                </div>
                {
                    width < 768 ?
                        <div className="plus-btn" onClick={() => setShowFilters(!showFilters)}><FiMoreHorizontal/></div>
                    : null
                }
                <CarFilters isMobActive={showFilters} activeLang={activeLang} t={t} />
            </div>
            <About activeLang={activeLang} t={t} />
            <FAQ activeLang={activeLang} t={t} />
        </StyledHome>
    )
}

export default translate(Home);