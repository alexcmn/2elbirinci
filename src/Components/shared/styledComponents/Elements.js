import styled from 'styled-components';

export const StyledHeadline = styled.h1`
    text-align: center;
    font-weight: bold;
    color: var(--blue1);
    position: relative;
    z-index: 12;
    font-size: 3rem;
    margin-bottom: 1rem;
    white-space: nowrap;
    &::before{
        position: absolute;
        content: attr(data-text);
        color: var(--grey2);
        font-weight: bold;
        z-index: -1;
        font-size: 4rem;
        bottom: 1rem;
        left: 50%;
        transform: translateX(-50%);
        white-space: nowrap;
        ${({ theme }) => theme.phone`
            display: none;
        `};
    }
    ${({ theme }) => theme.phone`
        font-size: 1.75rem;
    `};
`