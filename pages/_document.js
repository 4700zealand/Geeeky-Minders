import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
const GMD="Geeky Minders";
  render() {
    return (
      <Html>
        <Head>
          <meta name="GeekyMinders" content="width=device-width,minimum-scale=1, initial-scale=1" />
            <title>{GMD}</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
