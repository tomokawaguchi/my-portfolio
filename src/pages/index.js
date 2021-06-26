import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { resources } from "../resources/index";
import FeaturedProjects from "../components/FeaturedProjects";

const IndexPage = () => {
  const homeData = resources.bannerTexts["home"];
  return (
    <Layout bannerData={homeData}>
      <Seo title="Home" />

      <FeaturedProjects />
    </Layout>
  );
};

export default IndexPage;
