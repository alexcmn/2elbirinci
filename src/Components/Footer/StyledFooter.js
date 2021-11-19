import styled from 'styled-components';

export const StyledFooter = styled.footer`
    height: 50vh;
    position: relative;
    background-color: var(--blue1);
    
    /* &::after{
        content: ' ';
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0.05;
        background-image: ${({ bg }) => `url(${bg})`};
        background-repeat: no-repeat;
        background-position: bottom;
        background-size: contain;
        background-attachment: fixed;
    } */
`