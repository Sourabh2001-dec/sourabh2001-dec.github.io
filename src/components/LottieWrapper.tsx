import React, { MutableRefObject, useEffect, useRef } from "react";
import Lottie, { Options } from "react-lottie";

const LottieWrapper = ({ animationData }: { animationData: any }) => {
  const LottieRef = useRef() as MutableRefObject<any>;

  const defaultOptions: Options = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid",
    },
  };

  useEffect(() => {
    const lottie = LottieRef.current;
    return () => {
      if (lottie) lottie.destory();
    };
  }, []);

  return <Lottie ref={LottieRef} options={defaultOptions} speed={1} />;
};

export default LottieWrapper;
