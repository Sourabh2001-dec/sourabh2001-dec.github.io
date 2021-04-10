import React from "react";
import Lottie from "react-lottie";
import EducationCard from "../components/EducationCard";
import PageHeading from "../components/PageHeading";
import PartitionHeading from "../components/PartitionHeading";
import BlobSvg from "../images/blob.svg";
import animationData from "../lotties/study.json";

const LottieWithBlob = ({ animationData }: { animationData: any }) => {
  const defaultOptions = {
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
      <div
        className="absolute z-4  w-3/4 md:w-4/12 lg:w-1/5"
        style={{
          transform: "translateX(-50%) translateY(-115%)",
          left: "50%",
        }}
      >
        <Lottie options={defaultOptions} />
      </div>
    </div>
  );
};

const Education = () => {
  return (
    <div>
      <PageHeading heading="Education" />
      <LottieWithBlob animationData={animationData} />
      <PartitionHeading text="Certifications" />

      <div className="flex flex-col items-center justify-center px-5 md:px-0">
        <EducationCard
          name="pune institute of computer technology"
          time={"2019 - present"}
          tags={["BE - Comp. Eng."]}
          data={["CGPA: 9.67"]}
        />
        <EducationCard
          name="kamalnayan bajaj higher secondary school, chinchwad"
          time={"2017 - 2019"}
          tags={["HSC"]}
          data={["Percentage: 86%", "CET: 99.47 percentile"]}
        />
        <EducationCard
          name="amrita vidyalayam, nigdi, pune"
          time={"2016 - 2017"}
          tags={["ssc"]}
          data={["Percentage: 94.8%"]}
        />
      </div>
    </div>
  );
};

export default Education;
