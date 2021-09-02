import styled, { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    primaryBg: "#fdfc47",
    secondaryBg: "#33ff33",
    lightBg: "#ccff99",
    primaryDarkText: "#009900",
    secondaryDarkText: "#66ff33",
    primaryLightText: "#ffff00",
    secondaryLightText: "#ffffff",
    primaryBgGradient: "linear-gradient(to right,#24fe41, #fdfc47)",
  },
  fontWeight: {
    medium: "500",
    bold: "700",
  },
  media: {
    phone: "(max-width: 320px)",
    tablet: "(max-width: 768px)",
    desktop: "(max-width: 1024px)",
  },
};

export const StyledCommon = createGlobalStyle`

html {
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  color: #212121;
  background-color: #fffffe;
  line-height: 1.333;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img {
  display: block;
  width: 100%;
  height: auto;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin-top: 0;
}
`;

export const StyledBasicList = styled.ul`
  margin-top: 0;
  padding-left: 0;
  list-style: none;
`;

export const StyledBasicButton = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  font-family: inherit;
  line-height: inherit;
`;

export const StyledBasicLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  font-style: normal;
  color: inherit;
`;

export const StyledErrorMessage = styled.p`
  font-size: 24px;
  color: ${() => theme.colors.secondaryDarkText};
  font-weight: ${() => theme.fontWeight.bold};
`;
