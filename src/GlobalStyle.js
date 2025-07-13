// src/GlobalStyle.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* Reset and box-sizing */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* Base font styles */
  body {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
    background-color: #002D62;
    color: white;
    line-height: 1.6;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    cursor: default;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

 .button-sporty {
  background-color: #E31837; /* Fever Red */
  color: white;
  padding: 14px 28px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  transition: transform 0.2s ease, background-color 0.3s ease;
}

.button-sporty:hover {
  background-color: #FDBB30; /* Fever Gold */
  transform: scale(1.05);
  color: #002D62; /* Fever Navy */
}


  h1, h2, h3 {
    font-weight: 700;
  }

  section {
    padding: 80px 20px;
  }
`;

export default GlobalStyle;
