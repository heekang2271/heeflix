import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}

    * {
        box-sizing: border-box;
    }

    body {
        position: relative;
        background-color: #000000;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 16px;
        color: #FFF;
    }

    a {
        color: inherit;
        font-family: inherit;
        font-size: inherit;
        text-decoration: none;
    }

    main {
        padding: 130px 20px;
    }
`;

export default GlobalStyles;