import React from "react";
import Lottie, { Options } from "react-lottie";

const LottieWrapper = ({ animationData }: { animationData: any }) => {
  const defaultOptions: Options = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid",
    },
  };
  return <Lottie options={defaultOptions} speed={1} />;
};

export default LottieWrapper;
