import React from "react";
import Lottie, { Options } from "react-lottie";

const LottieWrapper = ({
  animationData,
  speed = 1,
}: {
  animationData: any;
  speed?: number;
}) => {
  const defaultOptions: Options = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid",
    },
  };

  return <Lottie options={defaultOptions} speed={speed} />;
};

export default LottieWrapper;
