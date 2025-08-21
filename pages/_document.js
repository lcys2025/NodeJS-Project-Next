import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
  {/* Move global stylesheets here as per Next.js best practices */}
  <link rel="stylesheet" href="/index/style.css" />
  <link rel="stylesheet" href="/stylesheets/style.css" />
  <link rel="stylesheet" href="/dashboard/dashboard.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
