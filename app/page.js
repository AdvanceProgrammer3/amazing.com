import AboutMe from "@/components/AboutMe";
import AboutWebsite from "@/components/AboutWebsite";
import Footer from "@/components/Footer";
import MySkills from "@/components/MySkills";
import WorkExperience from "@/components/WorkExperience";
import { ModeToggle } from "@/components/darkModeTogglet";

import React from "react";

const HomePage = () => {
  return (
    <div>
      <AboutWebsite />
      <WorkExperience />
      <h1 className="text-center py-10 text-blue-400 font-bold text-sm lg:text-start lg:pl-40">
        Who I am
      </h1>
      <AboutMe />
      <h1 className="text-center py-10 text-blue-400 font-bold text-sm lg:text-start lg:pl-40">
        My Skills
      </h1>
      <MySkills />
      <Footer />
    </div>
  );
};

export default HomePage;
