import styled from 'styled-components';

export const StyledPagination = styled.ul`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    li{
        width: 35px;
        height: 35px;
        border-radius: 50%;
        margin: 0 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.3s ease-in-out;
        cursor: pointer;
        a{
            display: block;
            width: 100%;
            height: 100%;
            align-items: center;
            justify-content: center;
            display: flex;
            color: var(--grey4);
            text-decoration: none;
            svg{
                width: 1rem;
                height: 1rem;
                path{
                    fill: var(--grey4);
                }
            }
        }
        &.disabled{
            background-color: rgba(0, 0, 0, 0.1);
            pointer-events: none;
            a{
                color: var(--grey4);
                opacity: 0.25;
            }
        }
        &.active{
            background: linear-gradient(-135deg, var(--blue1) 0%, var(--blue3) 100%);
            a{
                color: #fff;
                font-weight: bold;
            }
            &:hover{
                a{
                    color: #fff;
                }
            }
        }
        &:hover{
            background-color: rgba(0, 0, 0, 0.08);

        }
    }
`