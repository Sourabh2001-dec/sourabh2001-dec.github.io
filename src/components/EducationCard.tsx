import React from "react";

type EducationCardProps = {
  name: string;
  time: string;
  data: string[];
  tags: string[];
};

const EducationCard = ({ tags, time, data, name }: EducationCardProps) => {
  return (
    <div className="bg-l2 mt-5 md:mt-8 md:mr-2.5 rounded-md w-full md:w-10/12">
      <div className="bg-l3 w-full text-white p-4 text-sm md:text-base flex items-center">
        <div>
          <h1 className="uppercase tracking-wider ">{name}</h1>
          <div className="bg-primary w-14 h-0.5 mt-0.5"></div>
        </div>
      </div>
      <div className="w-full text-white px-4 pb-1 text-sm md:text-base">
        <div className="flex my-4 justify-between items-center">
          <div>
            <h1 className="my-2">{time}</h1>
            {data.map((sentence) => (
              <h1>{sentence}</h1>
            ))}
          </div>
          {tags.map((tag) => (
            <h1 className="px-4 py-3 text-primary bg-l3 uppercase">{tag}</h1>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
