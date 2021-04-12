import React from "react";
import LottieWithBlob from "../components/LottieWithBlob";
import PageHeading from "../components/PageHeading";
import animationData from "../lotties/contact.json";

const contactData = [
  {
    icon: "akar-icons:instagram-fill",
    link: "https://www.instagram.com/sourabh_7028/",
  },
  {
    icon: "cib:gmail",
    link: "mailto:sksourabhkumbhar123@gmail.com",
  },
  {
    icon: "bx:bxl-linkedin",
    link: "https://www.linkedin.com/in/sourabh-kumbhar-aa84031a3",
  },
  {
    icon: "akar-icons:github-fill",
    link: "https://github.com/Sourabh2001-dec",
  },
];

const Contact = () => {
  return (
    <div>
      <PageHeading heading="Contact" />
      <LottieWithBlob
        animationData={animationData}
        style={{
          transform: "translateX(-50%) translateY(-100%)",
          left: "50%",
        }}
      />
      <div className="flex justify-center">
        <div className="w-auto mx-4 p-4 bg-l2 text-secondary">
          <p>
            Feel free to email or DM me. I can help you with web development and
            cross platform mobile app development.
          </p>
        </div>
      </div>
      <div className="w-auto flex flex-wrap justify-center text-primary mt-5">
        {contactData.map((contact,_) => (
          <a
          key={_.toString()}
            href={contact.link}
            className="border-2 border-l2 hover:border-primary-900 text-2xl mx-2.5 bg-l2 rounded-full p-4"
          >
            <span
              className="iconify"
              data-icon={contact.icon}
              data-inline="false"
            ></span>
          </a>
        ))}
      </div>
      <div className="w-auto flex justify-center mt-5 p-3">
        <span
          className="iconify text-primary text-xl mr-3"
          data-icon="mdi:google-maps"
          data-inline="false"
        ></span>
        <p className="text-secondary">
            Morewasti, Chikhali, Pune
        </p>
      </div>
    </div>
  );
};

export default Contact;
