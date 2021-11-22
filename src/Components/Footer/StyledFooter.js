import styled from 'styled-components';

export const StyledFooter = styled.footer`
    height: 50vh;
    position: relative;
    background: linear-gradient(270deg, #1c4484, #33538f, #44649c, #5876a3, #7c94bc);
    background-size: 400% 400% !important;
    animation: backLineAnimation 20s ease infinite;
    padding: 3rem 0 0;
    @keyframes backLineAnimation {
        0% {background-position: 0% 50%}
        50% {background-position: 100% 50%}
        100% {background-position: 0% 50%}
    }
    .container{
        height: 100%;
        position: relative;
        .row{
            height: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            .footer-col{
                &:first-child{
                    .logo{
                        width: 100%;
                        height: 50%;
                        margin-bottom: 1rem;
                        img{
                            width: 50%;
                        }
                    }
                    p{
                        color: var(--white);
                        margin-bottom: 0;
                    }
                }
                h2{
                    color: var(--white);
                    font-weight: bold;
                }
                ul{
                    li{
                        overflow: hidden;
                        list-style: none;
                        a{
                            text-decoration: none;
                            color: var(--white);
                            transition: 0.3s ease;
                            position: relative;
                            overflow: hidden;
                            &::before{
                                position: absolute;
                                content: '';
                                width: 100%;
                                bottom: 0;
                                left: -100%;
                                height: 1px;
                                background: var(--red);
                                transition: 0.3s ease;
                            }
                        }
                        &:not(:last-child){
                            margin-bottom: 10px;
                        }   
                        &:hover{
                            a{
                                color: var(--red);
                                &::before{
                                    left: 0
                                }
                            }
                        }
                    }
                }
                ${({ theme }) => theme.phone`
                    margin: 1rem 0;
                `};
            }
        }
    }
    .copyrights{
        position: absolute;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        border-top: 1px solid var(--white);
        padding: 10px 0;
        &>div{
            width: 50%;
            &.cpr{
                p{
                    color: var(--white);
                    a{
                        text-decoration: underline var(--white);
                        color: var(--white);
                        font-weight: bold;
                    }
                }
            }
            &.social{
                ul{
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    li{
                        list-style: none;
                        margin: 0 5px;
                        background-color: var(--white);
                        width: 1.75rem;
                        height: 1.75rem;
                        border-radius: 50%;
                        transition: 0.3s ease-in-out;
                        a{
                            width: 100%;
                            height: 100%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            svg{
                                margin: 0 auto;
                                width: 1rem;
                                height: 1rem;
                                stroke: var(--blue1);
                            }
                        }
                        &:hover{
                            background: rgba(255, 255, 255, 0.75);
                            a{
                                svg{
                                    stroke: var(--red);
                                }
                            }
                        }
                    }
                }
            }
        }
        ${({ theme }) => theme.phone`
            position: unset;
            flex-direction: column;
            &>div{
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                &.cpr{
                    order: 2;
                }
                &.social{
                    order: 1;
                    ul{
                        margin: 10px 0;
                    }
                }
            }
        `};
    }
    ${({ theme }) => theme.phone`
        height: unset;
    `};
`