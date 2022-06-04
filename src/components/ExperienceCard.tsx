import React from "react";

type ExperienceCardProps = {
    companyLogo: string;
    companyName: string;
    jobTitle: string;
    jobDescription: string;
    jobDuration: string;
    jobDates: { from: string; to: string };
    companyLink: string;
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({
    companyLogo,
    companyName,
    jobTitle,
    jobDescription,
    jobDuration,
    jobDates,
    companyLink,
}) => {
    return (
        <div
            className="bg-l2 flex flex-wrap sm:flex-nowrap rounded-md overflow-hidden text-white my-3 sm:mx-3 w-auto max-w-0.5 shadow-xl"
            data-aos="fade-up"
        >
            <img
                src={companyLogo}
                alt=""
                className="w-1/4 ml-4 mt-4 rounded-md sm:ml-0 sm:mt-0 md:rounded-none md:w-1/4 object-contain"
            />
            <div className="p-4 flex flex-col justify-between w-full lg:w-3/4">
                <div>
                    <div className="flex flex-row justify-between">
                        <h1 className="text-base md:text-md uppercase">
                            {companyName}
                        </h1>
                        <a
                            href={companyLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline text-base md:text-base cursor-pointer"
                        >
                            <span
                                className="iconify"
                                data-icon={"akar-icons:link-out"}
                                data-inline="false"
                            ></span>
                        </a>
                    </div>
                    <h2 className="text-xs md:text-sm text-secondary">
                        {jobTitle}
                    </h2>
                </div>
                <div className="w-full my-3 md:my-0 md:mt-3 flex justify-between">
                    <h2 className="text-xs md:text-sm">
                        {jobDates.from} - {jobDates.to}
                    </h2>
                    <h2 className="text-xs md:text-sm">{jobDuration}</h2>
                    {/* <a
                        href={!!link ? link : "/"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline text-xs md:text-base cursor-pointer"
                    >
                        Verify
                    </a> */}
                </div>
            </div>
        </div>
    );
};

export default ExperienceCard;
