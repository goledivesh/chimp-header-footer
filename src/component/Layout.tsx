import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

interface ILayout {
  children?: any;
  title?: string;
  desc?: string;
  hasClass?: any;
  path?: any;
  image?: any;
  preview?: any;
}

const Layout = ({ children }: ILayout) => {
  <Head>
    <title>Create Next App</title>
    <meta name="description" content="Generated by create next app" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
  return (
    <div>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
