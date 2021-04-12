import React from "react";

const Footer = () => {
  return (
    <footer className="bg-l2 text-secondary w-full flex justify-center items-center py-3 text-base">
      <p>
        Made With{" "}
        <span
          className="iconify animate-ping text-base text-primary-700 inline mx-1"
          data-icon="ant-design:heart-filled"
          data-inline="false"
        ></span>{" "}
        By Sourabh. Copyright &copy; {new Date().getFullYear()}{" "}
      </p>
    </footer>
  );
};

export default Footer;
