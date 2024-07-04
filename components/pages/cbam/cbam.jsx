import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./cbam.css";
import cbamImage from "../../../public/assets/img/cbam/What-is-CBAM.png";
import cbamImage2 from "../../../public/assets/img/cbam/CBAM-2.png";
import shipImage from "../../../public/assets/img/cbam/data.jpg";
import cbamaim from "../../../public/assets/img/cbam/CBAM-aim.png";

import TestimonialMain from "../testimonial/testimonial";

const CBAM = () => {
  return (
    <div className="main-container container">
      <div className="pt-100  container top-container">
        <section className="why-cbam row container-fluid p-0 m-0">
          <div className="row mx-auto">
            <div className="col-md-12">
              <h1 className="display-4 pb-50">What is CBAM?</h1>
              <p className="lead">Carbon Border Adjustment Mechanism</p>
              <p>Effective since October 2023</p>
              <p>Transitional Period: 2023-2025</p>
            </div>
          </div>
          <div className="row align-items-center justify-content-between mx-auto p-0">
            <div className="col-md-5 mx-auto">
              <Link href="https://www.eucommission-url.com" legacyBehavior>
                <a className="btn btn-one btn-dark">
                  Go to EU Commission CBAM Landing Page
                </a>
              </Link>
            </div>
            <div className="col-md-7 container-fluid p-0">
              <Image
                src={cbamImage}
                alt="CBAM Image"
                className="img-fluid w-100"
              />
            </div>
          </div>
        </section>
      </div>

      <section className="climate-changes  bg-dark text-white container p-0">
        <div className="row align-items-center conatiner outerwrapper w-100 p-0 m-0">
          <div className="col-md-8 pt-100 pb-100 ">
            <div className="p-4 mx-auto">
              <h3 className="pb-4 text-white">
                Climate change is a global problem that needs global solutions.
              </h3>
              <h3 className="pb-4 text-white">
                CBAM is the EU’s answer to the problem of “carbon leakage”.
              </h3>
              <p className="mt-4">
                “Carbon leakage” occurs when companies based in the EU move
                carbon-intensive production abroad to countries with less strict
                climate actions, or when EU products get replaced by more
                carbon-intensive imports.
              </p>
            </div>
          </div>
          <div className="col-md-4 container-fluid p-0">
            <Image
              src={cbamImage2}
              alt="CBAM Image 2"
              className="img-fluid w-100"
            />
          </div>
        </div>
      </section>

      <section className="cbam-legal section-padding bg-body-secondary">
        <div className="row mb-70">
          <div className="col-xl-12">
            <div className="work__process-title t-center pb-30">
              <h2>CBAM-legal complications and impact</h2>
            </div>
            <div className="choose__us-area-list-work jc-center">
              <div className="choose__us-area-list-item">
                <i className="flaticon-deal"></i>
                <div className="choose__us-area-list-item-bottom">
                  <h6>CBAM Obligations</h6>
                  <div>
                    <div className="lineItem">
                      <span className="header">
                        Quarterly Emission Reporting
                      </span>
                    </div>

                    <div className="lineItem">
                      <span className="header">
                        Purchase of CBAM certificates (carbon tax)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="choose__us-area-list-item">
                <i className="flaticon-talk"></i>
                <div className="choose__us-area-list-item-bottom">
                  <h6>Scope of applications</h6>
                  <div>
                    <div className="lineItem">
                      <span className="header">Aluminum</span>
                    </div>

                    <div className="lineItem">
                      <span className="header">Electricity</span>
                    </div>

                    <div className="lineItem">
                      <span className="header">Cement</span>
                    </div>
                    <div className="lineItem">
                      <span className="header">Iron & Steel</span>
                    </div>
                    <div className="lineItem">
                      <span className="header">Hydrogen</span>
                    </div>
                    <div className="lineItem">
                      <span className="header">Fertilizer</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="choose__us-area-list-item">
                <i className="flaticon-global-shipping"></i>
                <div className="choose__us-area-list-item-bottom">
                  <h6>CBAM Impact</h6>
                  <div>
                    <div className="lineItem">
                      <span className="header">Increase of costs</span>
                      <p className="textdata">
                        Increase of Cost of Imported goods{" "}
                      </p>
                      <p className="textdata">Increase of Cost of Compliance</p>
                      <p className="textdata">Increase of Cost of Offshoring</p>
                    </div>
                    <div className="lineItem">
                      <span className="header">Increase of Capex</span>
                    </div>
                    <div className="lineItem">
                      <span className="header">
                        Increase of Cost of Technology
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="section-padding">
          <div className="container">
            <div className="row al-center p-3 bg-white rounded mb-3">
              <div className="col-xl-12">
                <div className="cbam__banner_text">
                  <h3 className="text-center">
                    CBAM-legal complications and impact
                  </h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <h5 className="pb-4 ">CBAM Obligations</h5>
                <ul className="list-group">
                  <li className="list-group-item">
                    Quarterly Emission Reporting
                  </li>
                  <li className="list-group-item">
                    Purchase of CBAM certificates (carbon tax)
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <h5 className="pb-4 ">Scope of applications</h5>
                <ul className="list-group">
                  <li className="list-group-item">Aluminum</li>
                  <li className="list-group-item">Electricity</li>
                  <li className="list-group-item">Cement</li>
                  <li className="list-group-item">Iron & Steel</li>
                  <li className="list-group-item">Hydrogen</li>
                  <li className="list-group-item">Fertilizer</li>
                </ul>
              </div>
              <div className="col-md-4">
                <h5 className="pb-4 ">CBAM Impact</h5>
                <ul className="list-group">
                  <li className="list-group-item">Increase of costs</li>

                  <li className="list-group-item">
                    Increase of Cost of Imported goods
                  </li>
                  <li className="list-group-item">
                    Increase of Cost of Compliance
                  </li>
                  <li className="list-group-item">
                    Increase of Cost of Offshoring
                  </li>

                  <li className="list-group-item">Increase of Capex</li>
                  <li className="list-group-item">
                    Increase of Cost of Technology
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div> */}
      </section>

      <section
        className="testimonials section-padding"
        style={{ backgroundColor: " #8fd3c0" }}
      >
        <div className="container">
          <div className="row">
            <div className="row al-center p-3  rounded mb-3">
              <div className="col-xl-8">
                <div className="cbam__banner_text">
                  <h2 className="text-left text-light">
                    How much goods are affected by{" "}
                    <span className="text-dark">CBAM</span>?
                  </h2>
                </div>
              </div>
            </div>
            <div className="row al-center p-3  justify-content-end rounded mb-3">
              <div className="col-xl-8">
                <div className="cbam__banner_text">
                  <p className="display-6 text-left text-light">
                    “US$ 45 billion of CBAM-covered goods were exported to
                    Europe from Asia-Pacific in 2022, representing 4 percent of
                    total exports from the region”
                  </p>
                  <p
                    className="text-dark text float-right justify-content-end "
                    style={{ textAlign: "right" }}
                  >
                    <span className="text-dark text-right">
                      - Goldman Sachs
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="cbam-exported section-padding"
        style={{ backgroundColor: "#3fa198" }}
      >
        <div className="cbam-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-lg-12">
                <h2 className="text-white">
                  {" "}
                  <span className="text-dark">CBAM</span> Good Exported to EU?
                </h2>
              </div>
            </div>
            <div className="row mt-4 align-items-center ">
              <div className="row col-lg-6">
                <div className="emptytext">&nbsp;</div>
                <div className="row col-lg-6 col-sm-offset-4 overlay-text overlay-data-overImage">
                  <div className="col-4">
                    <div
                      className="card text-center"
                      style={{ backgroundColor: "#f5a623" }}
                    >
                      <h3 className="text-dark">CHINA</h3>
                      <p className="text-dark">US$ 25,000,000,000</p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div
                      className="card text-center"
                      style={{ backgroundColor: "#004080" }}
                    >
                      <h3 className="text-white">INDIA</h3>
                      <p className="text-white">US$ 8,700,000,000</p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div
                      className="card text-center"
                      style={{ backgroundColor: "#ffffff" }}
                    >
                      <h3 className="text-dark">USA</h3>
                      <p className="text-dark">US$ 4,000,000,000</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-75 col-lg-6">
                <Image src={shipImage} alt="Ship Image" layout="responsive" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding artem-necessary artem-section ">
        <div className="p-5">
          <div className="container">
            <h2 className="text-white pb-5">
              Why is ARTEM necessary for everyone affected by{" "}
              <span className="text-dark">CBAM</span>?
            </h2>
            <p className="artem-description pb-3">
              Starting from October 2024, the importers must submit their CBAM
              reports at the customs for each import based on{" "}
              <Link href="https://example.com" legacyBehavior>
                <a>primary data</a>
              </Link>{" "}
              from the installation. Starting from May 2027, wrong reporting
              will lead to monetary sanction ranging from{" "}
              <Link href="https://example.com" legacyBehavior>
                <a>EUR 10-EUR 50</a>
              </Link>{" "}
              per ton of unreported emission.
            </p>
            <div className="artem-perspective">
              <p>
                <em>To put it into perspective:</em>
              </p>
              <p>
                For 1 ton of Unwrought Aluminium, a installation emits 4,06
                t/Co2. A primary smelter produces 500.000 to 1 Million Tons Al
                per year.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding cbam-aim">
        <div className="container ">
          <Image
            src={cbamaim}
            alt="CBAM Aim"
            layout="responsive"
            className=" border border-dark"
          />
        </div>
      </section>
    </div>
  );
};

export default CBAM;
