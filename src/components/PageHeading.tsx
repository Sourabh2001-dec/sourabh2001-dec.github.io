import React from "react";

type PageHeadingProps = {
  heading: string;
};

const PageHeading = ({ heading }: PageHeadingProps) => {
  return (
    <div>
      <div className="bg-l2 text-lg  md:text-xl  lg:text-2xl md:w-1/4 text-white inline-block my-5 text-center px-9 py-4 rounded-tr-full rounded-br-full">
        {heading}
      </div>
    </div>
  );
};

export default PageHeading;
