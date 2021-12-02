import Head from "next/head";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>FSC Monitoring</title>
      </Head>
      <Navbar />
      {children}
    </>
  );
};
export default Layout;
