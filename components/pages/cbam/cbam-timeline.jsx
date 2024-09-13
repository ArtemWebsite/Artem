import React from "react";


import image1 from "../../../public/assets/img/pages/timeline1.png";
import image2 from "../../../public/assets/img/pages/timeline2.png";
import image3 from "../../../public/assets/img/pages/timeline3.png";
import image4 from "../../../public/assets/img/pages/timeline4.png";

const CbamTimeline = () => {
  const timelineData = [
    {
      id: 1,
      text: "Foundation of Mersher GmbH in Düsseldorf",
      imgSrc: image1,
      position: "top",
      year: "1997",
    },
    {
      id: 2,
      text: "Opening of first factory in China producing magnesium & Aluminum raw material",
      imgSrc: image2,
      position: "bottom",
      year: "2001",
    },
    {
      id: 3,
      text: "Opening of second factory in Tianjin for HPDC Al/Mg casting, tooling and machining",
      imgSrc: image3,
      position: "top",
      year: "2003",
    },
    {
      id: 4,
      text: "Opening of third factory in Wuhu for casting of automotive parts and machining",
      imgSrc: image4,
      position: "bottom",
      year: "2005",
    },
  ];

  return (
    <section className="ps-timeline-sec">
      <div className="container">
        <ol className="ps-timeline">
          {timelineData.map((item) => (
            <li key={item.id}>
              <div
                className={
                  item.position === "top"
                    ? "img-handler-top"
                    : "img-handler-bot"
                }
              >
                {item.position === "top" ? "" : item.year}
                <img src={item.imgSrc.src} alt="" />
                {item.position === "top" ? item.year : ""}
              </div>
              <div className={item.position === "top" ? "ps-bot" : "ps-top"}>
                <p>{item.text}</p>
              </div>
              <span
                className={item.position === "top" ? "ps-sp-top" : "ps-sp-bot"}
              >
                {/* {String(item.id).padStart(2, '0')} */}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default CbamTimeline;
