import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          
          {/* Link para o Google Material Symbols */}
          <link 
            rel="stylesheet" 
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined&display=swap" 
          />

          {/* Pré-conectar para melhorar a performance */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

          {/* Script do Google Analytics */}
          <script 
            async 
            src="https://www.googletagmanager.com/gtag/js?id=G-1Q2WVZEC8B" 
          />
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-1Q2WVZEC8B');
            `}
          </script>
        </Head>
        <body style={{background:"#17171A"}}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
