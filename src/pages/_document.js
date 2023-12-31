// ** React Import
import React from 'react';

// ** Next Import
import Document, { Html, Head, Main, NextScript } from 'next/document';

// ** Emotion Imports
import createEmotionServer from '@emotion/server/create-instance';

// ** Utils Imports
import { createEmotionCache } from 'src/@core/utils/create-emotion-cache';

const CustomDocument = ({ ids, css }) => {
  return (
    <Html lang='en'>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossOrigin="anonymous" />

        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap'
        />
        <link rel='apple-touch-icon' sizes='180x180' href='/images/apple-touch-icon.png' />
        <link rel='shortcut icon' href='/images/favicon.png' />
        {/* Styles from Emotion */}
        {ids && css && (
          <style
            data-emotion={`${ids.join(' ')} ${css}`}
            dangerouslySetInnerHTML={{ __html: css }}
          />
        )}
      </Head>
      <body>
        <Main />
        <NextScript />
        
        {/* <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js"></script> */}
      </body>
    </Html>
  );
};

export default CustomDocument;

// getServerSideProps to fetch data and pass as props to CustomDocument
export async function getServerSideProps(ctx) {
  const originalRenderPage = ctx.renderPage;
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => <App {...props} emotionCache={cache} />,
    });

  const initialProps = await Document.getInitialProps(ctx);

  const emotionStyles = extractCriticalToChunks(initialProps.html);

  return {
    ...initialProps,
    ids: emotionStyles?.ids || [],
    css: emotionStyles?.css || '',
  };
}
