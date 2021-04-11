import React from "react";
import Lottie, { Options } from "react-lottie";
import CourseCard from "../components/CourseCard";
import EducationCard from "../components/EducationCard";
import PageHeading from "../components/PageHeading";
import PartitionHeading from "../components/PartitionHeading";
import BlobSvg from "../images/blob.svg";
import CourseraLogo from "../images/coursera-logo.svg";
import animationData from "../lotties/study.json";

const LottieWithBlob = ({ animationData }: { animationData: any }) => {
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
      <div
        className="absolute z-4  w-3/4 md:w-4/12 lg:w-1/5"
        style={{
          transform: "translateX(-50%) translateY(-115%)",
          left: "50%",
        }}
      >
        <Lottie options={defaultOptions} speed={1} />
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
      <div className="flex flex-row flex-wrap items-center justify-center px-5 md:px-28 py-5">
        <CourseCard
          providerImage={CourseraLogo}
          provider={"The Hong Kong University of Science and Technology"}
          courseName={"Full-Stack Web Development with React"}
          link={"https://coursera.org/share/ac0024ae4ba3d0d27b9c3e62e4c75ed3"}
          duration={"2020"}
        />
      </div>

      <PartitionHeading text="Qualification" />

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
