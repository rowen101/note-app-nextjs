import Head from "next/head";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  <>
    <Head>
      <title>FSC Monitoring</title>
    </Head>
    <Navbar />
  </>;
};
export default Layout;
