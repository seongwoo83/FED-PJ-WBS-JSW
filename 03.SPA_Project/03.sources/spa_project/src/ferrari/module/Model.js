import React from "react";
import $ from "jquery";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import { SlideNextButton, SlidePrevButton } from "./Swiperbutton";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../css/model.css";
import mdata from "../data/mdata";

function Model() {
    return (
        <div className="swiper_wrap">
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={10}
                slidesPerView={1.2}
                loop={true}
                speed={500}
                allowTouchMove={false}
                autoplay={{
                    delay:2000
                }}
                onSwiper={() =>
                    $(".swiper-slide-active")
                        .find(".tit_wrap")
                        .css({
                            opacity: 1,
                        })
                        .parents(".swiper-slide-active")
                        .css({
                            zIndex: 3,
                        })
                        .find(".cover")
                        .css({
                            backgroundColor: "transparent",
                        })
                        .parent()
                        .next()
                        .css({
                            zIndex: 2,
                        })
                        .find(".cover")
                        .css({
                            backgroundColor: "rgba(0,0,0,0.2)",
                        })
                        .parent()
                        .next()
                        .find(".cover")
                        .css({
                            backgroundColor: "rgba(0,0,0,0.5)",
                        })
                        .parent()
                        .css({
                            zIndex: 1,
                        })
                }
                onSlideChangeTransitionStart={() =>
                    $(".swiper-slide-active")
                        .find(".tit_wrap")
                        .animate({
                            opacity: 1,
                        })
                        .parent()
                        .prev()
                        .find(".cover")
                        .css({
                            backgroundColor: "rgba(0,0,0,0.8)",
                        })
                        .parent()
                        .css({
                            zIndex: 0,
                            backgroundColor: "transparent",
                        }).delay(200)
                        .next()
                        .css({
                            zIndex: 3,
                            backgroundColor: "#fff",
                        })
                        .find(".cover")
                        .css({
                            backgroundColor: "transparent",
                        })
                        .parent()
                        .next()
                        .css({
                            zIndex: 2,
                        })
                        .find(".cover")
                        .css({
                            backgroundColor: "rgba(0,0,0,0.2)",
                        })
                        .parent()
                        .css({
                            zIndex: 1,
                        })
                        .find(".cover")
                        .css({
                            backgroundColor: "rgba(0,0,0,0.5)",
                        })
                        .parents(".swiper-slide-active")
                        .siblings(".swiper-slide")
                        .find(".tit_wrap")
                        .animate({
                            opacity: 0,
                        })
                }
                breakpoints={{
                    700: {
                        slidesPerView: 2,
                        spaceBetween: -40,
                    },
                    1200: {
                        slidesPerView: 2,
                        spaceBetween: -350,
                    },
                }}
            >
                {mdata.map((v, i) => {
                    return (
                        <SwiperSlide key={i}>
                            <div className="cover"></div>
                            <div className="img_wrap">
                                <img src={v.src} alt="차" />
                            </div>
                            <div className="tit_wrap">
                                <span className="tit">{v.name.toUpperCase()}</span>
                            </div>
                        </SwiperSlide>
                    );
                })}
                <div className="btn_wrap">
                    <SlidePrevButton />
                    <SlideNextButton />
                </div>
            </Swiper>
        </div>
    );
}

export default Model;
