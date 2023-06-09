import { React } from "react";
import { useSwiper } from "swiper/react";
import{faAnglesRight, faAnglesLeft} from  "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function SlideNextButton() {
    const swiper = useSwiper();

    return <button className="next_btn" onClick={() => swiper.slideNext()}><FontAwesomeIcon icon={faAnglesRight} /></button>;
}
export function SlidePrevButton() {
    const swiper = useSwiper();

    return <button className="prev_btn" onClick={() => swiper.slidePrev()}><FontAwesomeIcon icon={faAnglesLeft} /></button>;
}
