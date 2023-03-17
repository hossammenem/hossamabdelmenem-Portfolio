import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="icon"
          href="/LightModeLogo.svg"
          media="(prefers-color-scheme:no-preference)"
        />
        <link
          rel="icon"
          href="/DarkModeLogo.svg"
          media="(prefers-color-scheme:dark)"
        />
        <link
          rel="icon"
          href="/LightModeLogo.svg"
          media="(prefers-color-scheme:light)"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
      </Head>
      <body className="no-scroll">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
