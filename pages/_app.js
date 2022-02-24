import Head from 'next/head'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  
  html {
      font-size: 62.5%;
      scroll-behavior: smooth;
      overflow-x: hidden;
  }
  
  body {
      font-size: 1.6rem;
      height:100vh;
      min-height:100vh;
      font-family: 'Noto Sans KR', 'sans-serif';
      user-select: none;
      -webkit-user-select: none; 
      -moz-user-select: none;   
      -ms-user-select: none;     
      -o-user-select: none;
  }

  a {
      text-decoration: none;
      color:black;
  }

  ul {
      list-style-type: none;
  }

  img{
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  button{
    border:none;
    cursor:pointer;
    
    &:focus{
      outline:none;
    }
  }

  input {
    outline:none;
    padding: 0 1.5rem;

    &:focus::placeholder{
      color:transparent;
    }
  }
`

const theme = {
  colors: {
    primary: '#6d7b58',
    secondary: '#b35256',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>더블엔씨 8조 기업과제</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
