import React from "react";
import PageHeading from "../components/PageHeading";
import PartitionHeading from "../components/PartitionHeading";
import SkillCard from "../components/SkillCard";
import appAnimation from "../lotties/APP-development.json";
import backendAnimation from "../lotties/backend.json";
import frontendAnimation from "../lotties/frontend-design.json";
import programmingAnimation from "../lotties/programming.json";
const About = () => {
  return (
    <div>
      <PageHeading heading={"What I Do"} />
      <PartitionHeading text={"web development"} />
      <div className="px-5 md:px-36">
        <SkillCard
          points={[
            "I create web apps and static sites using cutting edge web technologies like React, HTML5 and CSS3.",
            "I follow best web design practices while developing the website and take care of its responsiveness on different platforms and its efficiency.",
          ]}
          icons={[
            "vscode-icons:file-type-html",
            "vscode-icons:file-type-css",
            "vscode-icons:file-type-js-official",
            "logos:react",
            "logos:redux",
            "vscode-icons:file-type-typescript-official",
            "logos:ant-design",
            "cib:material-design",
            "logos:sass",
          ]}
          heading="Frontend Development"
          animationData={frontendAnimation}
        />
        <SkillCard
          points={[
            "I am well versed in creating Node js REST APIS using Express JS framework.",
            "I can containerize web applications using docker and build images.",
          ]}
          icons={[
            "vscode-icons:file-type-node",
            "simple-icons:express",
            "vscode-icons:file-type-mongo",
            "logos:postgresql",
            "logos:firebase",
            "logos:strapi-icon",
            "logos:docker-icon",
          ]}
          heading="Backend Development"
          animationData={backendAnimation}
          reverse={true}
        />
      </div>
      <PartitionHeading text={"app development"} />
      <div className="px-5 md:px-36">
        <SkillCard
          points={[
            "I can create fast and light weight cross platform apps using react-native and flutter.",
            "I can create apps with beautifual ui designs with features such as dark mode, material designs and so on.",
          ]}
          icons={["vscode-icons:file-type-expo", "logos:flutter"]}
          heading="Hybrid mobile app Development"
          animationData={appAnimation}
          animationClasses={"w-3/4 md:w-3/4  lg:w-1/2"}
        />
      </div>
      <PartitionHeading text={"Programming"} />
      <div className="px-5 md:px-36">
        <SkillCard
          points={[
            "I am good at solving coding problems using C++ and python.",
            "I always try to follow the OOPs concepts and use efficient data structures and algorithms.",
          ]}
          icons={["vscode-icons:file-type-cpp3", "logos:python"]}
          heading="Programming Languages"
          animationData={programmingAnimation}
          reverse={true}
        />
      </div>
    </div>
  );
};

export default About;
