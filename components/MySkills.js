import React from "react";

const MySkills = () => {
  const skills = [
    "javascript",
    "html",
    "css",
    "react Js",
    "node js and express",
    "git and github",
  ];
  return (
    <div>
      <div className="px-4 flex flex-col items-center">
        <h1 className="text-2xl font-medium ">
          What my programming skills included?
        </h1>
        <p className="italic p-4">
          I devoloped simple intantive and responsive user interface that helps
          users get things done with less efforts and time with those
          technologies
        </p>
      </div>

      <div className="grid grid-cols-2 place-items-center lg:grid-cols-3">
        {skills.map((skill) => (
          <div className="" key={skill}>
            <p className="w-40  text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-sm text-sm px-5 py-4 my-4 text-center me-2 mb-20">
              {skill}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySkills;
