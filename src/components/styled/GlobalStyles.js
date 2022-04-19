import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    *, *::after, *::before{
        box-sizing: border-box;
    }
    body{
        max-width: 100%;
        background-color: #fff;
        color: hsl(192, 100%, 9%);
        font-family: "Poppins", sans-serif;
        font-size: 18px;
        margin: 0;
    }
    img{
        max-width: 100%;
    }
`

export default GlobalStyles
