import styled from 'styled-components';
import { Col } from 'react-bootstrap';

export const StyledFormField = styled(Col)`
    .form-group{
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        text-align: left;
        label{
            color: var(--grey4);
            width: 100%;
            /* font-weight: 500; */
            font-size: 18px;
        }
        input, select, textarea{
            background: var(--grey1);
            border-radius: 5px;
            border: 1px solid var(--grey2);
            padding: 10px;
            height: 4rem;
            color: var(--grey4);
            color: #777;
            &:focus, select:focus{
                box-shadow: none !important;
            }
            &::placeholder{
                color: var(--grey4);
            }
            &.invalid-input{
                border: 1px solid var(--red);
                background: rgba(229, 60, 55, 0.1);
                color: var(--red);
                &::placeholder{
                    color: var(--red)
                }
            }
        }
        textarea{
            height: unset;
        }
        .error_label{
            color: var(--red);
            width: 100%;
        }
        .type-checkbox {
          display: block;
          position: relative;
          padding-left: 28px;
          cursor: pointer;
          font-size: 14px;
          color: var(--grey4);
          user-select: none;
          margin-left: 0;
          span {
            position: absolute;
            top: 0;
            left: 0;
            height: 20px;
            width: 20px;
            background-color: var(--white);
            border: 1px solid var(--grey4);
            border-radius: 2px;
            display: flex;
            align-items: center;
            justify-content: center;
            svg {
              width: 12px;
              height: 12px;
            }
          }
          input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;
            &:checked ~ span {
              background-color: var(--red);
              border-color: var(--red);
                svg{
                    color: var(--white);
                }
            }
          }
        }
    }
    .range-min-max{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--grey4);
    }
`