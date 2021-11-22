import React, { useState } from 'react'
import { StyledLangBtn } from './StyledLangBtn'
import {ReactComponent as Lang} from 'Assets/icons/lang.svg';
import EN from 'Assets/icons/eng.png';
import TUR from 'Assets/icons/tur.png';
import { translate } from 'react-switch-lang';

function LangBtn(props) {

    const [open, setOpen] = useState(false);
    const { t, changeLanguage } = props;

    const openLang = () => setOpen(!open);

    return (
        <StyledLangBtn className={`language-btn ${open ? 'active' : ''}`} onClick={() => openLang()}>
            <span><Lang /></span>
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