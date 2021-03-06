import React from "react";
import Link from "next/link";
import userData from "@constant/data";

export default function FavoriteProject() {
    return (
        <div className="bg-[#F1F1F1] -mt-40 dark:bg-gray-900">
            <div className="max-w-6xl mx-auto">
                <header className="flex flex-col md:flex-row justify-between items-center pt-40 mx-10 md:my-20 lg:my-0">
                    <h1 className="text-6xl lg:text-9xl max-w-lg font-bold text-gray-500 my-20 md:my-0 md:text-white dark:text-gray-600 text-center">                        
                        Favorite Projects
                    </h1>
                    <Link href="/work">
                        <a className="mb-20 md:mb-0 px-8 py-4 rounded-md bg-white shadow-lg text-xl font-semibold flex flex-row space-x-4 items-center dark:text-gray-700">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-arrow-up-right-square"
                            stroke="4"
                            strokeWidth="4"
                            viewBox="0 0 16 16"
                        >
                            <path
                            fillRule="evenodd"
                            d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
                            />
                        </svg>
                        <p>View all</p>
                        </a>
                    </Link>
                </header>

                {/* Grid Start Here */}
                <div className="grid md:grid-cols-2 gap-8 lg:-mt-8 pb-40">
                    {userData.projects.slice(0,3).map((val, index) => (
                        <ProjectContainer
                            key={index}
                            title={val.title}
                            src={val.imgUrl}
                            href={val.link}
                            alt="test"
                        ></ProjectContainer>
                    ))}
                </div>
            </div>
        </div>
    );
}

const ProjectContainer = ({ title, src, alt, href }) => {
    return (
        <div className="rounded-md card project-card md:w-full ring-2 ring-vis-0 transform hover:scale-105 transition duration-2000 ease-out">
            <div className="relative block h-full p-5 rounded-md ring-vis-0">
                <header className="flex justify-between">
                    <h3 className="font-semibold text-2xl text-gray-800 dark:text-gray-100">
                        {title}
                    </h3>
                </header>
                {/* <p className="text-gray-700 dark:text-gray-300">
                    this is description
                </p> */}
                <div className="w-full shadow-md bg-red-500 mt-5">
                    <div className="relative">
                        <img
                            src={src}
                            alt={alt}
                            className="object-cover h-full w-full shadow-2xl"
                        />
                    </div>
                </div>
                <a 
                    href={href}
                    className="flex flex-row items-center space-x-4 group"
                    target="_blank"
                >
                    <div className="my-4 text-gray-500 dark:text-gray-400">&rarr;</div>
                    <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                        <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                        View More
                    </div>
                </a>
            </div>
        </div>
    );
}