import Link from "next/link";
import { useState } from "react";

const Technology = () => {
  return (
    <>
      <div className="about__one section-padding pt-0">
        <div className="container">
          <div className="row justify-content-space-around">
		  <div className="col-xl-12">
              <div className="mb-5">
                <h2 className="mb-5">
                Technology | Hardware
                </h2>
                <p>
                ARTEM software platform in combination with developed CEMS module improves accuracy in assessing industrial emission data and is therefore saving additional carbon tax.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 rounded mb-3 bg-light-green-artm mb-3">
			<div className="col-xl-12 p-4">
			 <i className="flaticon-deal"></i>
			  <h6>Estimation of emissions</h6>
			  <p>Multiply activity data (e.g., fuel, Electricity) by appropriate emission factor using default value based on worst assumption.</p>
			  </div>
            </div>
            <div className="col-lg-6 col-md-6 rounded mb-3 bg-light-blue-artm mb-3">
			<div className="col-xl-12 p-4">
			<i className="flaticon-deal"></i>
			  <h6>Direct measurement of emissions</h6>
			  <p>Monitor GHG concentration and flow rate by filters and or sensors resulting in precise measurements based on actual emissions.</p>
			  </div>
            </div>
			
			 <div className="col-lg-6 col-md-6 rounded mb-3 bg-light-green-artm">
			 <div className="col-xl-12 p-4">
			<ul>
			<li>Micro-flow NDIR technology to measure SO2, NO, Co, CO2 and o2 simultaneously.</li>
			<li>Large and easy to replace filtering area for sampling gas probes</li>
			<li>Built-in PLC control system including adjustable data output and defect diagnosis</li>
			<li>Direct data connection to ARTEM for storage, analysis and presentation</li>
			</ul>
			</div>
            </div>
            <div className="col-lg-6 col-md-6 rounded mb-3 bg-light-blue-artm">
			<div className="col-xl-12 p-4">
			<ul>
			<li>Multiple Sensors per measuring point - one sensor bench measuring one gas.</li>
			<li>Automatic temperature compensation with built-in moisture adjustment device.</li>
			<li>High stability and low maintenance.</li>
			</ul>
			</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Technology;
