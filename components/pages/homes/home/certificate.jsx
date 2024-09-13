import Link from "next/link";
import { useState } from "react";
import img1 from "../../../../public/assets/img/cbam/home-img.jpg";
import img2 from "../../../../public/assets/img/cbam/certi.png";
const Certificate = () => {
  return (
    <>
      <div className="certificate section-padding pt-0">
        <div className="container">
          <div className="row al-center">
            <div className="col-xl-8 col-lg-5 lg-mb-25">
            <img src={img1.src} alt="img-with-text" />
            </div>
            <div className="col-xl-4 col-lg-7">
			<img src={img2.src} alt="img-with-text" />
            </div>
          </div>
        </div>
      </div>
	  
    </>
  );
};

export default Certificate;
