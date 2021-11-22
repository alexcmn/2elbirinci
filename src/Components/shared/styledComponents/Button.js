import styled from "styled-components";
import { Button } from "react-bootstrap";
// import { transparentize } from "polished";

export const ButtonPrimary = styled(Button)`
    width: 100%;
    height: 4rem;
    background-color: var(--red) !important;
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-top-left-radius: 30px;
    border-bottom-right-radius: 30px;
    position: relative;
    transition: 0.5s ease-in-out;
    ${({ theme }) => theme.phone`

    `};
    ${({ theme }) => theme.tablet`
        
    `};
`

export const ButtonSecondary = styled(ButtonPrimary)`
    background: none;
    border: 1px solid var(--white);
    color: var(--white);
    &:hover, &:focus{
        background-color: var(--white);
        color: var(--grey4);
        border: 1px solid var(--white);
    }   
`