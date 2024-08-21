"use client";

import { useSwiper } from "swiper/react";

import { PiCaretLeftBold, PiCaretRightBold} from 'react-icons/pi'

const WorkSliderBtns = () => {
    const swiper = useSwiper();
    console.log("Swiper: ", swiper);
    
  return (
    <div className="flex gap-2 text-xl absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none">
        <button><PiCaretLeftBold className="hover:text-accent" onClick={() => swiper.slidePrev()} /></button>
        <button><PiCaretRightBold className="hover:text-accent" onClick={() => swiper.slideNext()} /></button>
    </div>
  )
}

export default WorkSliderBtns