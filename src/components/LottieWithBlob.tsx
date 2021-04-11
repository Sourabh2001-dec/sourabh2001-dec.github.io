import React from "react";
import Lottie, { Options } from "react-lottie";
import BlobSvg from "../images/blob.svg";

const LottieWithBlob = ({
  animationData,
  style,
}: {
  animationData: any;
  style?: any;
}) => {
  const defaultOptions: Options = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid",
    },
  };
  return (
    <div className="relative mb-7">
      <div className="relative z-2">
        <img
          src={BlobSvg}
          className="w-3/4 md:w-4/12 lg:w-1/5 mx-auto"
          alt=""
        />
      </div>
      <div className="absolute z-4  w-3/4 md:w-4/12 lg:w-1/5" style={style}>
        <Lottie options={defaultOptions} speed={1} />
      </div>
    </div>
  );
};

export default LottieWithBlob;
