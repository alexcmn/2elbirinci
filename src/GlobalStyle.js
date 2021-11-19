import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    html{
        line-height: normal;
        --blue1: #1b4380;
        --blue2: #426495;
        --blue3: #adbbce;
        --red: #e2000f;
        --grey1: #f5f5f5;
        --grey2: #ececec;
        --grey3: #cccccc;
        --grey4: #777777;
        --white: #ffffff;
        --black: #515151;
        body{
            overflow-x: hidden !important;
        }
        button:focus{
            outline: none !important;
            box-shadow: none !important;
            border: none !important;
        }
        .form-control:focus{
            outline: none !important;
            box-shadow: none !important;
        }
        section{
            padding: 5rem 0;
            background: var(--white);
        }  
    }
    ${({ theme }) => theme.phone`
        html{
            button{
                border-width: 1px !important;
            }
        }
    `}
`

export default GlobalStyle;