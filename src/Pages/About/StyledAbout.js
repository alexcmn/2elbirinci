import styled from 'styled-components';

export const StyledAbout = styled.div`
    width: 100vw;
    .banner{
        width: 100%;
        height: 60vh;
        background-color: var(--blue1);
        box-shadow: inset 0 -20px 20px 0px rgba(0,0,0,0.25);
        position: relative;
        &::before{
            position: absolute;
            content: '';
            width: 0;
            height: 0;
            left: 0;
            bottom: 0;
            border-bottom: 200px solid var(--white);
            border-left: 100vw solid transparent;
            z-index: 11;
            ${({ theme }) => theme.phone`
                border-bottom: 100px solid var(--white);
            `};
        }
        &::after{
            content: ' ';
            display: block;
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            opacity: 0.25;
            background-image: url('https://images.unsplash.com/photo-1525416600700-31b31df068b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
            background-repeat: no-repeat;
            background-position: bottom;
            background-size: cover;
            background-attachment: fixed;
            ${({ theme }) => theme.phone`
                background-position: inherit;
            `};
        }
        .main-head{
            position: absolute;
            bottom: 50%;
            width: 100%;
            z-index: 10;
            transform: skewY(-6deg) translateY(50%);
            h1{
                font-size: 11em;
                text-align: center;
                margin-bottom: 0;
                text-transform: uppercase;
                font-weight: bold;
                color: transparent;
                -webkit-text-stroke-width: 2px;
                -webkit-text-stroke-color: var(--white);
                ${({ theme }) => theme.phone`
                    font-size: 2.3em;
                `};
            }
            ${({ theme }) => theme.phone`
                transform: skewY(-15deg) translateY(50%);
            `};
        }   
        .car-img{
            position: absolute;
            width: 50%;
            bottom: -10rem;
            left: 50%;
            transform: translateX(-50%);
            z-index: 13;
            ${({ theme }) => theme.phone`
                width: 100%;
                bottom: 0;
            `};
        }
    }
`

export const StyledAboutTabs = styled.section`
    margin: 5rem 0;
    .nav-tabs{
        margin-bottom: 5rem;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        li{
            button{
                background: var(--grey1);
                color: var(--blue1);
                padding: 20px 30px;
                border-radius: 0;
                &.active{
                    background: var(--blue1);
                    color: var(--white);
                }
                ${({ theme }) => theme.phone`
                    padding: 1rem;
                `};
            }
            &:first-child{
                button{
                    border-top-left-radius: 30px;
                }
            }
            &:last-child{
                button{
                    border-bottom-right-radius: 30px;
                }
            }
        }
    }
    .row{
        div{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            img{
                margin: 0 auto;
            }
        }
    }
    p{
        text-align: center;
    }
`