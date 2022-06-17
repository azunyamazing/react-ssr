import Document, { Html, Head, Main, NextScript } from 'next/document'

const script = `<script async >console.log('111')</script>`

class MyDocument extends Document {

  render() {

    // const { initData } = this.props.__NEXT_DATA__.props.pageProps;

    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>

        {/* for your own scripts tags */}
        <html dangerouslySetInnerHTML={{__html: script}}/>
      </Html>
    )
  }
}

export default MyDocument