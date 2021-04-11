import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import "./ProjectGrid.css";

let projectImages = require.context("../images/projects", true);

type ProjectType =
  | "WEB"
  | "APP"
  | "NODEJS"
  | "FIREBASE"
  | "REACT"
  | "STRAPI"
  | "ALL";

let projectTypes: ProjectType[] = [
  "ALL",
  "APP",
  "FIREBASE",
  "NODEJS",
  "REACT",
  "STRAPI",
  "WEB",
];

type Project = {
  projectImage: string;
  projectName: string;
  icons: string[];
  projectDescription: string;
  projectLink: string;
  projectType: ProjectType[];
};

const projects: Project[] = [
  {
    projectName: "Covid 19 Awareness",
    projectDescription:
      "It is a covid 19 awareness website which gives information about the virus and its prevention tips. The site also displayed the covid 19 patients statistics using an API.",
    projectImage: projectImages("./covid19web.png").default,
    projectType: ["WEB"],
    icons: [
      `logos:bootstrap`,
      `mdi:jquery`,
      `vscode-icons:file-type-html`,
      `vscode-icons:file-type-css`,
    ],
    projectLink: "https://sourabh2001-dec.github.io/pasc_web_dev/",
  },
  {
    projectName: "InfoGeek",
    projectDescription:
      "It is a blogging platform developed for the use of campus with the features helpful for teachers such as sending mails to a specific class.",
    projectImage: projectImages("./infogeek.png").default,
    projectType: ["WEB"],
    icons: [
      `logos:bootstrap`,
      `mdi:jquery`,
      `vscode-icons:file-type-php3`,
      `cib:mysql`,
    ],
    projectLink: "http://pbl2020pict.000webhostapp.com/",
  },
  {
    projectName: "Pasckathon 20",
    projectDescription:
      "Event website developed for the Packathon hackathon event organized by PASC.",
    projectImage: projectImages("./pasckathon.png").default,
    projectType: ["WEB"],
    icons: [
      `logos:bootstrap`,
      `vscode-icons:file-type-html`,
      `vscode-icons:file-type-css`,
    ],
    projectLink: "",
  },
  {
    projectName: "DriveFlix",
    projectDescription:
      "A movie streaming web app which does not use any paid object storage like AWS or Firebase but instead uses Google drive for video file hosting.",
    projectImage: projectImages("./driveflix.png").default,
    projectType: ["WEB", "REACT", "STRAPI"],
    icons: [
      `vscode-icons:file-type-reactjs`,
      `logos:graphql`,
      `vscode-icons:file-type-html`,
      `vscode-icons:file-type-css`,
      `logos:strapi-icon`,
    ],
    projectLink: "https://driveflix.netlify.app/",
  },
  {
    projectName: "DevChat",
    projectDescription:
      "A Slack Clone made using React and Firebase with features to make channels and real time messaging.",
    projectImage: projectImages("./devchat.png").default,
    projectType: ["WEB", "REACT", "FIREBASE"],
    icons: [
      `vscode-icons:file-type-reactjs`,
      `logos:redux`,
      `logos:semantic-ui`,
      `vscode-icons:file-type-firebase`,
    ],
    projectLink: "https://unruffled-clarke-27d41f.netlify.app/",
  },
  {
    projectName: "Weather App",
    projectDescription:
      "A simple weather app which uses api to fetch and display the weather of the entered location projectName.",
    projectType: ["NODEJS", "WEB"],
    projectImage: projectImages("./weather_app.png").default,
    icons: [`vscode-icons:file-type-node`, `mdi:api`],
    projectLink: "http://climateron.herokuapp.com/",
  },
  {
    projectName: "Istriwala App",
    projectDescription:
      "This is mobile application made for laundry owners. The app features basic necessities like creating an order, filtering the orders over a range of days and many more.",
    projectType: ["APP"],
    projectImage: projectImages("./istriwala.png").default,
    icons: [`vscode-icons:file-type-reactjs`,`vscode-icons:file-type-firebase`,`logos:redux`,`vscode-icons:file-type-expo`],
    projectLink: "https://expo.io/@istriwala/projects/Istriwala",
  },
];

const ProjectGrid = () => {
  const [type, setType] = useState<ProjectType>("ALL");

  return (
    <div>
      <div className="mx-7 md:mx-20 flex flex-wrap justify-center items-center space-y-2 sm:space-y-0 my-5">
        <div className="flex flex-wrap">
          {projectTypes.map((project, _) => (
            <button
              key={_.toString()}
              className={`magnifyBtn mr-1 sm:mr-2 mb-1 ${
                type === project ? "bg-primary text-l1" : "bg-l2 text-secondary"
              } px-3 py-2 text-sm uppercase`}
              onClick={() => setType(project)}
            >
              {project}
            </button>
          ))}
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-7 mx-7 mt-10 md:mx-20 lg:mx-32 text-secondary">
        {projects.map((project, _) =>
          project.projectType.includes(type) || type === "ALL" ? (
            <ProjectCard
              key={_.toString()}
              projectDescription={project.projectDescription}
              projectImage={project.projectImage}
              projectLink={project.projectLink}
              projectName={project.projectName}
              icons={project.icons}
              data-aos="fade-right"
            />
          ) : null
        )}
      </div>
    </div>
  );
};
export default ProjectGrid;
