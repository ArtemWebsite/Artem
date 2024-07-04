"use client";
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import About from "./about";
import Trustclients from "./trustclients";
import Services from "./services";
import CtaArea from "./cta";
import Portfolio from "./portfolio";
import Testimonial from "./testimonial";
import Map from "./map";
import WorkArea from "./work";
import Blog from "./blog";
import FooterOne from "@/components/layout/footers/footer-one";
import BannerOne from "./banner";

import ScrollToTop from "../../common/scroll/scroll-to-top";
import Head from "next/head";
import Features from "./features";
import ChooseUs from "./choose-us";

import bgImage from "../../../../public/assets/img/shape/shape-9.png";
import "./home.css";
import styles from "./UnderConstruction.module.css";
import ServicesNew from "./services-2";
const HomeOne = () => {
  return (
    <div>
      <div className={styles.container}>
        <Head>
          <title>Under Construction</title>
          <meta name="description" content="This page is under construction" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <h1 className={styles.title}>This Page is Under Construction</h1>
          <p className={styles.description}>
            We're working hard to bring you something awesome. Stay tuned!
          </p>
        </main>
      </div>

      {/* <SEO pageTitle="Artem" />
      <HeaderOne />
      <BannerOne />
      <Features />
      <About />
      <Trustclients />
      <ServicesNew />
      <CtaArea />
      <ChooseUs />

      <WorkArea />

      <Map></Map>
      <div
        className="testimonial__one section-padding"
        style={{ backgroundImage: `url(${bgImage.src})` }}
      >
        <Testimonial />
      </div>

      <FooterOne />

      <ScrollToTop /> */}
    </div>
  );
};

export default HomeOne;
