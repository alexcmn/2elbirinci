import styled from 'styled-components';

export const StyledHome = styled.div`
    width: 100vw;
    .banner{
        width: 100%;
        height: 100vh;
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
            background-image: url('https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1228&q=80');
            background-repeat: no-repeat;
            background-position: bottom;
            background-size: cover;
            background-attachment: fixed;
        }
        .overlay{
            width: 100%;
            height: 100%;
            position: relative;
            z-index: 10;
            overflow: hidden;
            svg{
                transform: rotate(325deg);
                .anim-line{
                    stroke-dasharray: 2000;
                    stroke-dashoffset: 2000;
                    position: absolute;
                    mix-blend-mode: multiply;
                    &.st0{
                        animation: dash 6s linear alternate infinite;
                        top: 0;
                        left: 0;
                        z-index: 2;
                    }
                    &.st1{
                        animation: dash 4s linear alternate infinite;
                        top: -500px;
                        left: -500px;
                        z-index: 4;
                    }
                    &.st2{
                        animation: dash 3s linear alternate infinite;
                        top: -500px;
                        left: -500px;
                        z-index: 3;
                    }
                    &.st3{
                        animation: dash 2s linear alternate infinite;
                        top: -500px;
                        left: -500px;
                        z-index: 3;
                    }
                }
                @keyframes dash {
                    to {
                        stroke-dashoffset: 0;
                    }
                }
            }
        }
        .car-img{
            position: absolute;
            bottom: 0;
            right: 2vw;
            z-index: 12;
            width: 50%;
            ${({ theme }) => theme.phone`
                width: 100%;
            `};
        }
        .logo{
            width: 20rem;
            height: 10rem;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 12;
            svg{
                width: 100%;
                height: 100%;
            }
            ${({ theme }) => theme.phone`
                left: -4rem;
                top: -2rem;
            `};
        }
        .content{
            position: absolute;
            top: 50%;
            left: 5rem;
            width: 50%;
            transform: translateY(-50%);
            .headline {
                font-family: arial;
                position: relative;
                color: var(--white);
                font-size: 5rem;
                margin: 0 auto;
                width: 100%;
                height: 100%;
                font-weight: bold;
                text-transform: uppercase;
                &::before, &::after{
                    content: attr(data-text);
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                }
                &::before{
                    left: 2px;
                    clip: rect(79px, 1200px, 86px, 0);
                    text-shadow: -1px 0 red;
                    background: var(--blue1);
                    animation: brasil-anim-2 1s infinite linear alternate-reverse;
                }
                &::after{
                    left: -2px;
                    clip: rect(79px, 1200px, 86px, 0);
                    text-shadow: -1px 0 blue;
                    background: var(--blue1);
                    animation: brasil-anim-1 1s infinite linear alternate-reverse;
                    animation-delay: -1s;
                }
                @keyframes brasil-anim-1 {
                    0% {
                        clip: rect(20px, 1200px, 76px, 0);
                    }
                    20% {
                        clip: rect(19px, 1200px, 16px, 0);
                    }
                    40% {
                        clip: rect(16px, 1200px, 3px, 0);
                    }
                    60% {
                        clip: rect(62px, 1200px, 78px, 0);
                    }
                    80% {
                        clip: rect(25px, 1200px, 13px, 0);
                    }
                    100% {
                        clip: rect(53px, 1200px, 86px, 0);
                    }
                }

                @keyframes brasil-anim-2 {
                    0% {
                        clip: rect(79px, 1200px, 86px, 0);
                    }
                    
                    20% {
                        clip: rect(20px, 1200px, 30px, 0)
                    }
                    
                    40% {
                        clip: rect(25px, 1200px, 5px, 0)
                    }
                    
                    60% {
                        clip: rect(65px, 1200px, 85px, 0)
                    }
                    
                    80% {
                        clip: rect(120px, 1200px, 145px, 0)
                    }
                    
                    100% {
                        clip: rect(95px, 1200px, 75px, 0)
                    }
                }
            }
            ${({ theme }) => theme.phone`
                width: unset;
                top: 30vh;
                left: 50%;
                transform: translateX(-50%);
                .headline{
                    font-size: 2rem;
                    text-align: center;
                    white-space: nowrap;
                }
            `};
        }
        .plus-btn{
            position: absolute;
            bottom: 2rem;
            background: var(--white);
            left: 50%;
            transform: translateX(-50%);
            width: 3rem;
            height: 3rem;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            font-weight: bold;
            color: var(--blue1);
            z-index: 12;
            box-shadow: 0 0 20px 0 rgba(0,0,0,0.25);
        }
    }
`

export const StyledCardFilters = styled.div`
    width: 75%;
    min-height: 15rem;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 13;
    .wrapp{
        position: relative;
        width: 100%;
        border-top-left-radius: 30px;
        border-bottom-right-radius: 30px;
        height: 100%;
        background: var(--white);
        box-shadow: 5px 5px 20px 10px rgba(0,0,0,0.1);
        padding: 20px;
    }
    ${({ theme }) => theme.phone`
        opacity: 0;
        transition: 0.3s ease;
        top: 100%;
        z-index: -13;
        width: 85%;
        &.mob-active{
            opacity: 1;
            z-index: 13;
        }
        .wrapp{
            height: unset;
        }
    `};
`

export const StyledHomeAbout = styled.section`
    height: 100vh;
    position: relative;
    transform: skewY(-5deg);
    /* .ab-wrapp{
        height: 100%;
        width: 100%;
        overflow-x: hidden;
    } */
    .container{
        height: 100%;
        transform: skewY(5deg);
        .row{
            height: 100%;
            .left-ab{
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                img{
                    width: 100%;
                }
            }
            .right-ab{
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                flex-direction: column;
                .desc-box{
                    p{
                        text-align: center;
                    }
                }
            }
        }
    }
    .bg-text-container {
        transform: translateX(-50%);
        left: 50%;
        position: absolute;
        z-index: -999;
        width: 100vw;
        .animate-text {
            animation: text-scrolling 20s linear infinite;
            will-change: transform;
            display: block;
            position: relative;
            white-space: nowrap;
            &.left {
                animation-direction: reverse;
            }
            span {
                font-size: 15em;
                color: var(--blue3);
                text-transform: uppercase;
                display: inline-block;
                line-height: 0.75;
                min-width: auto;
                font-weight: 800;
                opacity: 0.2;
            }
        }
        @keyframes text-scrolling {
            0% { transform: translate3d(-100%, 0, 0); }
            100% { transform: translate3d(0%, 0, 0); }
        }
        ${({ theme }) => theme.phone`
            display: none;
        `};
    }
    ${({ theme }) => theme.phone`
        height: unset;
    `};
`

export const StyledHomeFAQ = styled.section`
    margin-top: 10rem;
    /* height: 100vh; */
    position: relative;
    background: transparent;
    .container{
        height: 100%;
        .row{
            height: 100%;
            .faq-wrapp{
                height: 100%;
                padding: 0 5rem;
                h2{
                    color: var(--blue1);
                    font-weight: bold;
                    margin-bottom: 3rem;
                    text-align: center;
                }
                p{
                    text-align: center;
                    width: 50%;
                    margin: 0 auto 2rem;
                }
                img{
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 50%;
                    z-index: 9;
                    transform: rotateY(180deg);
                }
                .accordion{
                    position: relative;
                    z-index: 10;
                    .accordion-item{
                        margin-bottom: 2rem;
                        border: none;
                        box-shadow: 5px 5px 20px 5px rgba(0,0,0,0.1);
                        border-radius: 5px;
                        border-top-left-radius: 30px;
                        h2{
                            margin-bottom: 0;
                            padding: 20px;
                            .accordion-button{
                                padding: 20px;
                                border-top-left-radius: 20px;
                                &:not(.collapsed){
                                    color: var(--blue1);
                                    font-weight: 700;
                                    /* background-color: var(--blue3); */
                                }
                            }
                        }
                    }
                }
                ${({ theme }) => theme.phone`
                    padding: 0 1rem;
                    p{
                        width: 100%;
                    }
                    img{
                        width: 100%;
                    }
                `};
            }
        }
    }
    ${({ theme }) => theme.phone`
        margin-top: 0;
    `};
`