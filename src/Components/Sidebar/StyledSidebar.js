import styled from 'styled-components';

export const StyledHamburger = styled.div`
    position: fixed;
    width: 5rem;
    height: 5rem;
    background: var(--white);
    border-radius: 10px;
    z-index: 99999999;
    top: 3rem;
    right: 3rem;
    box-shadow: 0 0 20px 0 rgba(0,0,0,0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    svg{
        cursor: pointer;
        transition: transform 400ms;
        user-select: none;
        .line{
            fill:none;
            transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
            stroke: var(--blue1);
            stroke-width:5.5;
            stroke-linecap:round;
        }
        &.ham6{
            .top {
                stroke-dasharray: 40 172;
            }
            .middle {
                stroke-dasharray: 40 111;
            }
            .bottom {
                stroke-dasharray: 40 172;
            }
        }
    }
    &.active{
        svg{
            &.ham6{
                .top {
                    stroke-dashoffset: -132px;
                }
                .middle {
                    stroke-dashoffset: -71px;
                }
                .bottom {
                    stroke-dashoffset: -132px;
                }
            }
        }
    }
    ${({ theme }) => theme.phone`
        width: 3rem;
        height: 3rem;
        top: 1.5rem;
        right: 1.5rem;
    `};
`
export const StyledSidebar = styled.div`
    position: fixed;
    top: 0;
    right: -200%;
    width: 100vw;
    height: 100vh;
    background: var(--blue1);
    transition: 0.5s ease-in-out;
    z-index: 9999999;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    ul{
        position: relative;
        li{
            text-align: center;
            list-style: none;
            a{
                color: var(--blue3);
                text-decoration: none;
                font-size: 3em;
                padding: 5px 20px;
                display: inline-flex;
                font-weight: 700;
                transition: 0.5s;
                ${({ theme }) => theme.phone`
                    font-size: 2rem;
                `};
                &::before{
                    position: absolute;
                    content: '';
                    top: 50%;
                    left: 40%;
                    transform: translate(-50%, -50%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 3em;
                    color: rgba(66, 100, 149, 0.25);
                    border-radius: 50%;
                    z-index: -1;
                    opacity: 0;
                    font-weight: 900;
                    text-transform: uppercase;
                    letter-spacing: 500px;
                    white-space: nowrap;
                    transition: letter-spacing 0.5s, left 0.5s;
                    ${({ theme }) => theme.phone`
                        font-size: 1.5em;
                    `};
                }
                &:hover{
                    &::before{
                        content: attr(data-text);
                        opacity: 1;
                        left: 50%;
                        letter-spacing: 10px;
                        width: 1800px;
                        height: 1800px;
                        ${({ theme }) => theme.phone`
                            font-size: 2em;
                            letter-spacing: unset;
                        `};
                    }
                }
            }
            &:hover{
                a{
                    background: var(--blue2);
                    border-radius: 10px;
                }
            }
        }
        &:hover{
            li{
                a{
                    color: #0002;
                }
                &:hover{
                    a{
                        color: var(--blue3);
                    }
                }
            }
        }
    }
    &.active{
        right: 0;
    }
`