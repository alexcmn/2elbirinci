import { css } from "styled-components";

export const sizes = {
    phone: 576,
    tablet: 1024,
    laptop: 1600,
    desktop: 2000,
    desktopMedium: 4096,
    desktopLarge: 7690,
};

const mediaQueries = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;
    return acc;
}, {});

export default mediaQueries;
