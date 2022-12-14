import { Layout } from "components/Layout";
import { ProfileContext } from "components/LensAuthenticationProvider";
// import { Profile } from "components/Profile";
// import { Tabs } from "components";
import { TagsFilter } from "components/TagsFilter";
import type { NextPage } from "next";
import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import { useAccount } from "wagmi";

const Home: NextPage = () => {
  const { isConnected } = useAccount();
  const profile = useContext(ProfileContext);
  const [hydrationLoading, sethydrationLoading] = useState(true);
  useEffect(() => {
    sethydrationLoading(false);
  }, []);

  if (hydrationLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="bg-white">
      <Head>
        <title>Lenstags</title>
        <meta name="description" content="Generated by Gardeners" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Layout
        title={"Lenstags | Home"}
        pageDescription={"TODO: Descripcion de la pagina"}
      >
        <div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6 ">
          {/* <Profile /> */}
          {/* <Tabs /> */}
          <div className="mb-3">
            <TagsFilter />
          </div>

          <div className="w-full h-auto">{/* <Pagination /> */}</div>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
