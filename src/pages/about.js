import * as React from "react";

import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { resources } from "../resources/index";
import FeaturedProjects from "../components/FeaturedProjects";

import { Panel1Wrapper, Panel2Wrapper } from "../components/Style/about";

const AboutPage = () => {
  const aboutData = resources.bannerTexts["about"];

  return (
    <Layout bannerData={aboutData}>
      <Seo title="About page" />

      {/* Experience as Engineer panel */}
      <Panel1Wrapper className="site-section">
        <div className="inner-wrapper standard-padding">
          <h2>Experience as Engineer</h2>
          <p>
          I have started my career as a website project manager at a marketing agency in Perth WA. During the period, I have established basic skills and knowledge of website development especially in WordPress.
          </p>
          <p>
          This initial experience and curiosity lead me to develop a few brochure sites and eventually upskilling and building web apps in GatsbyJS. I have worked for a start-up company that provides tennis enthusiasts an outlet where they can play with locals at a time and place convenient to them. As a junior front-end engineer, I have conceptualised the design and built the front-facing website with GatsbyJS.
          </p>
          <p>
          Currently I am working as a freelance frontend developer mainly building custom WordPress themes. Recent project I worked on is a portfolio website for a photography service. This includes 4 alternative designs for the portfolio category page, which provides the client the flexibility to select a suitable design depending on the portfolio type/category.
          </p>
          <p>
          As a self-taught developer, I am constantly growing my knowledge and skill sets in development. One example is my certificate of completing Android development course at Udacity, which provided me the opportunity to learn Java and have a better understanding of OOP. I have also constantly been on Codewar and solve challenges to maintain and grow my skills in JavaScript, Java and Kotlin.
          </p>
          <p>
            <span id="bold-text">Skills:</span> Java, JavaScript, React.js, GatsbyJS, GraphQL, PHP, CSS, SASS, HTML{" "}
          </p>
        </div>
      </Panel1Wrapper>

      {/* Education & Other Panel */}
      <Panel2Wrapper className="site-section alter-panel">
        <div className="inner-wrapper standard-padding">
          <div className="panel-inner">
            <div className="col col-1">
              <div className="col-inner">
                <h3>Education</h3>
                <ul>
                  <li>
                    Udacity<span>Android Basics Nanodegree by Google</span>2021
                  </li>
                  <li>
                    Edith Cowan University
                    <span>Master of Business Administration</span>2015 - 2017
                  </li>
                  <li>
                    Ryukoku University
                    <span>Bachelor of Arts - English Language and Literature</span>
                    2009 - 2014
                  </li>
                </ul>
              </div>
            </div>
            <div className="col col-2">
              <div className="col-inner">
                <h3>Other</h3>
                <h4>Software / Platform</h4>
                <p>Git, Github, Jira, Netlify, Adobe XD, Figma, Affinity Photo, WordPress, Freshdesk</p>
                <h4>Language</h4>
                <ul>
                  <li>English - Professional working proficiency</li>
                  <li>Japanese - Native proficiency</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Panel2Wrapper>

      {/* Featured projects panel */}
      <FeaturedProjects />
    </Layout>
  );
};

export default AboutPage;
