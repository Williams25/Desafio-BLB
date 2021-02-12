import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Head from 'next/head';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    /* margin-top: 25px; */
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    display: flex;
    flex: 1;
    flex-direction: column;
  }
`;

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="description" content="Esse ecommerce não possui carrinho, não precisa realizar a compra e nem mostrar os detalhes dos produtos. Ele apenas listaos produtos e no modo de edição é possivel adicionar e deletar produtos" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2? family = Lato: wght @ 700 & display = swap" rel="stylesheet" />
        <title>Ecommerce Challenge</title>
        {/* <link rel="shortcut icon" href="https://uploaddeimagens.com.br/images/003/053/050/original/pokebola.png?1611691679" /> */}
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
