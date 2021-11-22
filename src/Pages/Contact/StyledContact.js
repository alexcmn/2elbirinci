import styled from 'styled-components';

export const StyledContact = styled.div`
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
            background-image: url('https://images.unsplash.com/photo-1473042904451-00171c69419d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1199&q=80');
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
                white-space: nowrap;
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
            width: 40%;
            bottom: -10rem;
            left: 50%;
            transform: translateX(-50%);
            z-index: 13;
            ${({ theme }) => theme.phone`
                width: 100%;
                bottom: -5rem;
            `};
        }
    }
    .contact{
        margin: 10rem 0 5rem;
        height: 50vh;
        .container{
            height: 100%;
            .row{
                height: 100%;
                .col{
                    height: 100%;
                }
                .info{
                    h1{
                        margin: 2rem 0;
                        &::before{
                            font-size: 3.3rem !important;
                        }
                    }
                    ul{
                        li{
                            list-style: none;
                            margin-bottom: 10px;
                            font-size: 1rem;
                            svg{
                                stroke: var(--blue1);
                                margin-right: 10px;
                            }
                            &:nth-child(3){
                                svg{
                                    path{
                                        fill: var(--blue1);
                                    }
                                }
                            }
                        }
                    }
                }
                ${({ theme }) => theme.phone`
                    .map{
                        height: 50vh;
                    }
                `};
            }
        }
        ${({ theme }) => theme.phone`
            height: unset;
        `};
    }
`
