import styled from 'styled-components';

export const StyledAllCars = styled.div`
    width: 100vw;
    position: relative;
`

export const StyledFilterSidebar = styled.div`
    position: fixed;
    width: 20vw;
    height: 100vh;
    padding: 2rem;
    background: linear-gradient(270deg, #1c4484, #33538f, #44649c, #5876a3, #7c94bc);
    background-size: 400% 400% !important;
    animation: backLineAnimation 20s ease infinite;
    z-index: 99999;
    @keyframes backLineAnimation {
        0% {background-position: 0% 50%}
        50% {background-position: 100% 50%}
        100% {background-position: 0% 50%}
    }
    .logo{
        width: 100%;
        display: flex;
        margin-bottom: 2rem;
        img{
            margin: 0 auto;
            width: 50%;
        }
    }
    ${({ theme }) => theme.phone`
        position: fixed;
        top: 0;
        width: 100vw;
        left: -100%;
        transition: 0.3s ease-in-out;
        &.active{
            left: 0;
            overflow-y: scroll;
        }
    `};
`

export const StyledResultCars = styled.div`
    /* position: absolute; */
    /* top: 0; */
    margin-left: 20vw;
    width: 80vw;
    padding: 5rem 0;
    .container{
        .row{
            .wrapp{
                width:100%;
                height:100%;
                padding: 20px;
                .car-card {
                    position:relative;
                    width:100%;
                    height:412px;
                    background: #fff;
                    box-shadow: 5px 5px 20px 10px rgb(0,0,0,0.1);
                    border-radius: 18px;
                    transition:0.5s ease-out;
                    .image {
                        position:relative;
                        top:0;
                        left:0;
                        width:100%;
                        height:100%;
                        img{
                            position:absolute;
                            left:0;
                            top:0;
                            width:100%;
                            height:80%;
                            display:block;
                            border-top-left-radius: 18px;
                            border-top-right-radius: 18px;
                            transition:0.5s; 
                        }
                    }
                    .content {
                        position:absolute;
                        left:0;
                        bottom:0;
                        width:100%;
                        height: 90px;
                        box-sizing:border-box;
                        transition: 0.5s cubic-bezier(.22,.68,0,1.71);
                        overflow:hidden;
                        padding:12px;
                        background: #fff;
                        border-bottom-left-radius:18px;
                        border-bottom-right-radius:18px;
                    }
                    h1 {
                      font-size:1.25rem;
                      color: var(--blue1);
                      text-align:center;
                    }
                    &:hover{
                        transform: scale(1.1);
                        .content {
                            width:100%;
                            height:70%;
                            left:0;
                            bottom:0;
                            text-align:center;                      
                        }
                    }
                    p {
                      text-align:left;
                      font-size: 15px;
                      padding: 10px 20px;
                      &.price{
                        color: var(--blue1);
                        font-weight: 500;
                      }
                    }
                    .more-content{
                        width: 100%;
                        padding: 10px 0;
                        display: flex;
                        align-items: center;
                        justify-content: space-evenly;
                        border: 1px solid var(--blue1);
                        border-radius: 10px;
                        span{
                            width: 33%;
                            text-align: center;
                            color: var(--blue1);
                            font-weight: 500;
                            &:nth-child(2){
                                border-left: 1px solid var(--blue1);
                                border-right: 1px solid var(--blue1);
                            }
                        }
                    }
                    button{
                        height: 3rem;
                        width: 50%;
                        margin: 0 auto;
                    }
                }
                ${({ theme }) => theme.phone`
                    padding: 1rem;
                `};
            }
        }
    }
    ${({ theme }) => theme.phone`
        width: 100vw;
        margin-left: 0;
        height: unset;
    `};
`

export const StyledFilterButton = styled.div`
    width: 3rem;
    height: 3rem;
    border-radius: 10px;
    background: var(--white);
    display: none;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 20px 0 rgba(0,0,0,0.25);
    position: fixed;
    top: 2rem;
    left: 2rem;
    z-index: 999999;
    svg{
        width: 2rem;
        height: 2rem;
        path{
            fill: var(--blue1);
        }
    }
    ${({ theme }) => theme.phone`
        display: flex;
    `};
`