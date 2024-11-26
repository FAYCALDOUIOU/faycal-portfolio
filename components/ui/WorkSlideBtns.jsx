"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
export const WorkSlideBtns = ({containerStyels, bntStyels, iconsStyles}) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyels}>
      <button className={bntStyels} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={iconsStyles} />
      </button>
      <button className={bntStyels} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold className={iconsStyles} />
      </button>
    </div>
  );
};
