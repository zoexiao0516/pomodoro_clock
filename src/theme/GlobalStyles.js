import { createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.font};
    transition: all 0.50s linear;
  }

  main {
    font-family: ${({ theme }) => theme.font};
  }

  a {
    color: ${({ theme }) => theme.colors.link.text};
    cursor: pointer;
  }

  button {
    border: 0;
    display: inline-block;
    ${'' /* padding: 12px 24px; */}
    padding: 5px 10px;
    font-size: 14px;
    border-radius: 4px;
    ${'' /* margin-top: 5px; */}
    margin: 0 10px;
    cursor: pointer;
    ${'' /* background-color: #1064EA; */}
    background-color: ${({ theme }) => theme.colors.button.background};
    ${'' /* color: #FFFFFF; */}
    color: ${({ theme }) => theme.colors.button.text};
    font-family: ${({ theme }) => theme.font};
  }

  button.btn {
    background-color: ${({ theme }) => theme.colors.button.background};
    color: ${({ theme }) => theme.colors.button.text};
  }
`;