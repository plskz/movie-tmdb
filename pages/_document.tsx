import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body className='font-raleway'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
