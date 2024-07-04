import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation } from "swiper/modules";

import bannerBg from "../../../../public/assets/img/shape/shape-3.png";
import Link from "next/link";
import styles from "./styles/BannerOne.module.css";

const slideControl = {
  loop: true,
  slidesPerView: 1,
  effect: "fade",
  autoplay: {
    delay: 5500,
    reverseDirection: false,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".banner_next",
    prevEl: ".banner_prev",
  },
};

const BannerOne = () => {
  return (
    <>
      <div className={styles.banner__one}>
        <Swiper modules={[EffectFade, Autoplay, Navigation]} {...slideControl}>
          <SwiperSlide>
            <div className={styles.banner__one_image}>
              <video autoPlay loop muted playsInline className={styles.video}>
                <source src="/assets/video/green.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <img
                className={styles.banner__one_shape}
                src={bannerBg.src}
                alt="banner-shape"
              />
              <div className="container">
                <div className="row">
                  <div className="col-xl-12 pt-120 text-center">
                    <div className={styles.banner__one_content}>
                      <h2 className="text-light pb-30">
                        Application for the <br /> Reduction and Tracing of{" "}
                        <br /> Carbon Emission in Manufacturing
                      </h2>
                      <p>
                        Achieving Net Zero in places where it seems impossible
                      </p>
                      <div className={styles.banner__one_content_button}>
                        <Link className="btn-one" href="/about-us">
                          Schedule a Call
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default BannerOne;
