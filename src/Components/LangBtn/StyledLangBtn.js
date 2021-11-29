import styled from 'styled-components';

export const StyledLangBtn = styled.div`
    position: fixed;
    bottom: 25px;
    right: 25px;
    width: 4rem;
    height: 4rem;
    background-color: var(--blue1);
    border-radius: 50%;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    z-index: 999;

    span {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--blue3);
        font-size: 3em;
        transition: 0.3s ease-in-out;

        img {
            width: 3rem;
            height: 3rem;
        }
    }
    ${({ theme }) => theme.phone`
        width: 3rem;
        height: 3rem;
        span{
            img{
                width: 2rem;
                height: 2rem;
            }
        }
    `};

    ul {
        position: absolute;
        bottom: 60px;
        background: var(--white);
        min-width: 250px;
        padding: 20px;
        border-radius: 20px;
        opacity: 0;
        visibility: hidden;
        transition: 0.3s ease-in-out;
        box-shadow: 0 15px 45px rgba(0, 0, 0, 0.2);
        right: 0;
        li {
            list-style: none;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            padding: 10px 0;
            transition: 0.3s ease-in-out;
            color: var(--blue3);
            img {
                margin-right: 10px;
                opacity: 0.2;
                transform: scale(0.8);
                transition: 0.3s ease-in-out;
            }

            &:hover {
                font-weight: 600;
                img {
                    opacity: 0.8;
                }
            }

            &:not(:last-child) {
                border-bottom: 1px solid var(--blue1);
            }
        }
    }

    &.active {
        ul {
            opacity: 1;
            visibility: visible;
        }

        span {
            transform: rotate(360deg);
        }
    }
`