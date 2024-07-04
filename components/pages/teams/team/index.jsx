"use client";
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "../../common/breadcrumb";
import TeamMain from "./team";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import SwitchTab from "../../common/dark-light";
import TeamTwo from "./team-2";

const TeamPage = () => {
  return (
    <>
      <SEO pageTitle="Our Team" />

      <HeaderOne />

      <TeamTwo />
      <FooterOne />
      <ScrollToTop />
    </>
  );
};

export default TeamPage;
