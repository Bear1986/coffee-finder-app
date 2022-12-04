import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <link rel="shortcut icon" href="/static/favicon.ico" />
      <link
        rel="preload"
        href="/public/static/fonts/GloriaHallelujah-Regular.ttf"
        as="font"
        crossOrigin="anonymous"
      ></link>
      <link
        rel="preload"
        href="/public/static/fonts/CourierPrime-Regular.ttf"
        as="font"
        crossOrigin="anonymous"
      ></link>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
