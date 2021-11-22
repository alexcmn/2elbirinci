import styled from 'styled-components';

export const StyledSingleCar = styled.div`
    padding: 10rem 0;
    .container{
        .row{
            .info{
                .main-card{
                    margin: 0 auto;
                    width: 75%;
                    height: 12rem;
                    border-radius: 10px;
                    background-color: var(--blue1);
                    box-shadow: 0 0 20px 0 rgba(0,0,0,0.25);
                    padding: 20px;
                    color: var(--white);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    text-align: center;
                    h3{
                        font-weight: bold;
                    }
                    .price{
                        width: 50%;
                        padding: 10px;
                        border: 1px solid var(--white);
                        border-radius: 10px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-weight: bold;
                    }
                    ${({ theme }) => theme.phone`
                        width: 100%;
                        margin: 0 auto 3rem !important;
                    `};
                }
            }
        }
        .carr-summary{
            margin-top: 3rem;
            .item{
                border-bottom: 1px solid var(--grey3);
                margin-bottom: 1rem;
                padding: 10px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                span{
                    font-size: 18px;
                    font-weight: 500;
                    &.label{
                        color: var(--blue1);
                    }
                    &.value{
                        color: var(--red);
                    }
                }
            }
        }
    }
    .banner{
        margin: 5rem 0;
        width: 100vw;
        min-height: 60vh;
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
            border-bottom: 100px solid var(--white);
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
        .tab-wrapper{
            width: 100%;
            height: 100%;
            position: relative;
            z-index: 99;
            .container{
                width: 100%;
                height: 100%;
                .nav-tabs{
                    border: none;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    li{
                        margin: 2rem 0;
                        box-shadow: 0 0 20px 0 rgba(0,0,0,0.25);
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
                                border-radius: 0 !important;
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
                        ${({ theme }) => theme.phone`
                            margin: 0;
                            box-shadow: none;
                        `};
                    }
                    ${({ theme }) => theme.phone`
                        margin-top: 1rem;
                    `};
                }
                .tab-content{
                    .carr-summary{
                        .row{
                            &>div{
                                margin: 0 auto;
                                .item{
                                    .label{
                                        color: var(--white);
                                    }
                                }
                            }
                        }
                    }
                }
                ${({ theme }) => theme.phone`
                    padding-top: 1rem;
                `};
            }
        }
        .car-img{
            position: absolute;
            right: 0;
            bottom: -5rem;
            width: 35%;
            z-index: 99;
            ${({ theme }) => theme.phone`
                width: 100%;
            `};
        }
        ${({ theme }) => theme.phone`
            min-height: 60vh;
        `};
    }
    ${({ theme }) => theme.phone`
        padding: 5rem 0;
    `};
`