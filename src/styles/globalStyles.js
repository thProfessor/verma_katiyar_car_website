// globalStyles.js
import { createGlobalStyle } from "styled-components";
import { font } from "./pallete";

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    padding:0;
    margin:0;
    font-family:${font.family}, "Roboto",Sans-Serif;
  
}
body{
    overflow-x: hidden;
}

`;

export default GlobalStyle;
