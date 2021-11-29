import React, { useState } from 'react'
import { StyledLangBtn } from './StyledLangBtn'
import EN from 'Assets/icons/eng.png';
import TUR from 'Assets/icons/tur.png';
import EN2 from 'Assets/icons/eng2.png';
import TUR2 from 'Assets/icons/tur2.png';
import { translate, getLanguage } from 'react-switch-lang';

function LangBtn(props) {

    const [open, setOpen] = useState(false);
    const { t, changeLanguage } = props;
    const activeLang = getLanguage();

    const openLang = () => setOpen(!open);

    return (
        <StyledLangBtn className={`language-btn ${open ? 'active' : ''}`} onClick={() => openLang()}>
            <span><img src={activeLang === 'en' ? EN2 : TUR2} alt="" /></span>
            <ul>
                <li onClick={() => changeLanguage('en')}>
                    <img src={EN} alt="" />{t('langBtn.li1')}
                </li>
                <li onClick={() => changeLanguage('tr')}>
                    <img src={TUR} alt="" />{t('langBtn.li2')}
                </li>
            </ul>
        </StyledLangBtn>
    )
}

export default translate(LangBtn);