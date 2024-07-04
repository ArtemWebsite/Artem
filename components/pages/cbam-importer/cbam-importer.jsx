import React from "react";
import Link from "next/link";

import serviceBg from "../../../public/assets/img/shape/shape-9.png";
import shape from "../../../public/assets/img/shape/shape-5.png";
import img1 from "../../../public/assets/img/cbam-importer/text-with-image.png";
import functionalitiesData from "@/components/data/functionalities-data";
import cbamBg from "../../../public/assets/img/shape/shape-15.png";
import cbamMainBg from "../../../public/assets/img/shape/shape-4.png";
import cbamMainBgnew from "../../../public/assets/img/shape/shape-1.png";
import Checklist from "./checklist";

const CbamImporterMain = () => {
  return (
    <div className="cbam-importer-main">
      <div
        className="cbam_img_with_text pt-100 pb-80"
        style={{ backgroundImage: `url(${cbamBg.src})` }}
      >
        <div className="container">
          <div className="row al-center">
            <div className="col-lg-10 mb-80 ">
              <div className="cbam_img_with_text-left">
                <div className="cbam_img_with_text-left-title">
                  <h2 className="mb-5">
                    <span className="logo-color">Pioneer</span> cross-border
                    CBAM Compliance for the IMPORTER
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-5 ">
                <div
                  className="cbam_img_with_text-right t-right dark_image position-absolute"
                  style={{ bottom: "-150px" }}
                >
                  <img src={img1.src} alt="img-with-text" />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="t-left mt-100">
                  <p class="display-6">COMPLY WITH CBAM OBLIGATION</p>
                  <p className="text-dark">AND</p>
                  <p class="display-6">OPTIMIZE THE CBAM PRICE YOU PAY!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cbam_banner_area pt-60 pb-120">
        <div className="container  bg-white rounded">
          <div className="row al-center">
            <div className="col-lg-5">
              <div className="cbam__banner_text"></div>
            </div>
            <div className="col-lg-7 p-0">
              <div className="cbam__banner_text">
                <h3>
                  How can the IMPORTER easily collect accurate emission data
                  from its suppliers and sub-suppliers?
                </h3>
                <a className="mt-5 btn-one" href="/">
                  REQUEST DEMO
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="cbam_three_tab section-padding"
        style={{ backgroundImage: `url(${cbamMainBgnew.src})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 rounded">
              <div className="col-xl-12 bg-light p-4 rounded-5 border border-2  border-dark">
                <div className="cbam__banner_text">
                  <h5 className="text-center">
                    Easy access to data collected along the supply chain
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 rounded">
              <div className="col-xl-12 bg-light p-4 rounded-5 border border-2  border-dark">
                <div className="cbam__banner_text">
                  <h5 className="text-center">
                    Verifiable on all levels of the supply chain
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 rounded">
              <div className="col-xl-12 bg-light p-4 rounded-5 border border-2  border-dark">
                <div className="cbam__banner_text">
                  <h5 className="text-center">
                    Traceability from Top to Bottom
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="cbam_service service__one section-padding"
        style={{
          backgroundImage: `url(${serviceBg.src})`,
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row mb-35">
            <div className="col-xl-12">
              <div className="service__one-title t-center">
                <span className="subtitle-one">&nbsp;</span>
                <h2 className="pb-5">Key Functionalities</h2>
                <p class="display-6">
                  ARTEM provides a clear and easy system to the CBAM Importer to
                  manage the CBAM Data collection along the whole supply chain.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {functionalitiesData?.slice(0, 6)?.map((data, id) => (
              <div className="col-lg-4 col-md-6" key={id}>
                <div
                  className="service__one-item rounded-5"
                  style={{ backgroundImage: `url(${shape.src})` }}
                >
                  <div className="service-cols service__one-item-content">
                    <h5>{data.id}</h5>
                    <h6>{data.title}</h6>
                    <Link href={data.link} className="mt-3 btn-one text-white">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Checklist />
      <div
        className="cbam_advantage-sec section-padding "
        style={{ backgroundImage: `url(${cbamMainBg.src})` }}
      >
        <div className="custom__container container ">
          <div className="row align-items-end">
            <div className="col-12 col-md-4 mb-3 sieze-line">
              <div>
                <h2>
                  <span className="text-white">SEIZE</span> THE ADVANTAGE
                </h2>
              </div>
            </div>
            <div className="col-12 col-md-8 mb-3 licences">
              <div className="p-0">
                <h3 className="text-dark mb-2">Licenses</h3>
                <p className="custom-font-lead text-white p-0 m-0">
                  Acess ARTEM today and gain CBAM clients worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CbamImporterMain;
