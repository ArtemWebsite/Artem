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
     

       <SEO pageTitle="Artem" />
      <HeaderOne />
      <BannerOne />
      <Features />
      <About />
      <Trustclients />
      <ServicesNew />
      <CtaArea />
      <ChooseUs />

      <WorkArea />
<h1></h1>
      <Map></Map>
      <div
        className="testimonial__one section-padding"
        style={{ backgroundImage: `url(${bgImage.src})` }}
      >
        <Testimonial />
      </div>

      <FooterOne />

      <ScrollToTop />
    </div>
  );
};

export default HomeOne;
