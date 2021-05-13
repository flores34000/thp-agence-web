import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Roboto', sans-serif;
    transition: all .5s linear;
    margin:0;
    padding:0;
    box-sizing:border-box;
    line-height: 1.5rem;
  }
 
  .btn-primary {
    /* background: ${({ theme }) => theme.primary}; */
    background:#bb86fc;
    color: ${({ theme }) => theme.body};
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
    border-radius: 2px;
    cursor: pointer;
    outline: none;
    border: none;
    font-weight: 900;
    text-decoration:none;
    transition: all 0.2s ease-in-out;
    :hover {
      transform: scale(1.1)
    }
  }
  .card-border{
    border-bottom: 1.5px solid ${({ theme }) => theme.text};
  }
  a{
    color: ${({ theme }) => theme.text}
  }
  .color-title-card{
    color:#cc03fe;
  }
`;

export const lightTheme = {
  body: '#e0ebfc',
  text: '#7d7a7a',
  // primary: '#6200ee',
};

export const darkTheme = {
  body: '#151515',
  text: '#bdbcbc',
  // primary: '#bb86fc',
};