import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';

const GlobalStyles = createGlobalStyle`

 @font-face {
  font-family: 'radnika_next';
  src: url('/static/radnikanext-medium-webfont.woff2')
  format('woff2');
  font-weight: normal;
  font-style: normal;

}
  :root {
    /* --red: #ff0000;
    --black: #393939;
    --grey: #3a3a3a;
    --gray: var(--grey);
    --lightGrey: #e1e1e1;
    --LightGray: var(--lightGray);
    --grey-050: #ededed; */

    --maxWidth: 1000px;
    --box-shadow: 0 12px 24px 0 rgba(0,0,0,0.09);

    --indigo-050: #e0e8f9;
    --indigo-100: #bed0f7;
    --indigo-200: #98aeeb;
    --indigo-300: #7b93db;
    --indigo-400: #647acb;
    --indigo-500: #4c63b6;
    --indigo-600: #4055a8;
    --indigo-700: #35469c;
    --indigo-800: #2d3a8c;
    --indigo-900: #19216c;

    --purple-050: #eae2f8;
    --purple-100: #cfbcf2;
    --purple-200: #a081d9;
    --purple-300: #8662c7;
    --purple-400: #724bb7;
    --purple-500: #653cad;
    --purple-600: #51279b;
    --purple-700: #421987;
    --purple-800: #34126f;
    --purple-900: #240754;

    --grey-050: #f7f7f7;
    --grey-075: #f1f1f1;
    --grey-100: #e1e1e1;
    --grey-200: #cfcfcf;
    --grey-300: #b1b1b1;
    --grey-400: #9e9e9e;
    --grey-500: #7e7e7e;
    --grey-600: #626262;
    --grey-700: #515151;
    --grey-800: #3b3b3b;
    --grey-900: #222222;
    --grey-1000: #111111;

    --fonts: 'radnika_next', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
    // 62.5%
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: var(--fonts);
    margin: 0;
    padding: 0;
    font-size: 1rem;
    line-height: 2;
  }

  a {
    text-decoration: none;
    color: var(--grey-900);
  }

  a:hover {
    text-decoration: underline;
  }

  button {
    font-family: var(--fonts);
  }
`;

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2rem;
`;

export default function Page({ children }) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <InnerStyles>{children}</InnerStyles>
    </>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
