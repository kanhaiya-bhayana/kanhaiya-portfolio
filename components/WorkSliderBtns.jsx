"use client";

import { useSwiper } from "swiper/react";
import { IoChevronForwardCircleOutline } from "react-icons/io5";
import { IoArrowBackCircleOutline } from "react-icons/io5";

const WorkSliderBtns = () => {
    const swiper = useSwiper();
    console.log("Swiper: ", swiper);
    
  return (
    <div className="flex flex-row gap-4 text-4xl">
        <button><IoArrowBackCircleOutline className="hover:text-accent" onClick={() => swiper.slidePrev()} /></button>
        <button><IoChevronForwardCircleOutline className="hover:text-accent" onClick={() => swiper.slideNext()} /></button>
    </div>
  )
}

export default WorkSliderBtns