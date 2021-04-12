import React from "react";
import CourseCard from "../components/CourseCard";
import EducationCard from "../components/EducationCard";
import LottieWithBlob from "../components/LottieWithBlob";
import PageHeading from "../components/PageHeading";
import PartitionHeading from "../components/PartitionHeading";
import CourseraLogo from "../images/coursera-logo.svg";
import animationData from "../lotties/study.json";


const Education = () => {
  return (
    <div className="mb-6">
      <PageHeading heading="Education" />
      <LottieWithBlob animationData={animationData} style={{
          transform: "translateX(-50%) translateY(-115%)",
          left: "50%",
        }} />

      <PartitionHeading text="Certifications" />
      <div className="flex flex-row flex-wrap items-center justify-start px-5 md:px-28 py-5">
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
