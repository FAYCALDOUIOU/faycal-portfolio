"use client";

import { icons } from "lucide-react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// about data
const about = {
  title: "About me",
  desription:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint numquam .",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Faycal Douiou",
    },
    {
      fieldName: "Phone",
      fieldValue: "+212 (0) 6 29 88 30 97",
    },
    {
      fieldName: "Expriance",
      fieldValue: "+ 5 Years",
    },
    {
      fieldName: "Email",
      fieldValue: "Faycal.Douiou1999@gmail.com",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Moroccan",
    },
    {
      fieldName: "Languages",
      fieldValue: "Arabe, English, French",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
 
  ],
};

// experiences
const experience = {
  icon: "",
  title: "My exprience",
  desription:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint numquam .",
  items: [
    {
      company: "LOGISTIQA",
      position: "Web Designer & Graphic Designer",
      dureation: "Jan 2024 - March 2024",
    },
    {
      company: "DIGITAL CLICK S.A.R.L",
      position: "Front-End Devloper Intern",
      dureation: "Nov 2022 - Aug2023",
    },
    {
      company: "DIGITAL CLICK S.A.R.L",
      position: "Front-End devloper Intern",
      dureation: "March 2022 - Aug2022",
    },
    {
      company: "Souss Impression Edition",
      position: "Designer Intern",
      dureation: "Sep 2020 - Nov 2020",
    },
  ],
};

// education
const education = {
  icon: "",
  title: "My education",
  desription:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint numquam .",
  items: [
    {
      Institution: "EFET(French Technical Education Schools)",
      degree: "Specialized Technician Diploma in IT.",
      dureation: "2021 - 2023",
    },
    {
      Institution: "Omeyyades High School.",
      degree: "High School Diploma in Arts and Humanities.",
      dureation: "2019 - 2020",
    },
    {
      Institution: "ACADYMIA CONSULTING.",
      degree: "Web Design Training Certificate",
      dureation: "June 2019 - Aug 2019",
    },
  ],
};

//skills

const skills = {
  title: "My skills",
  desription:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint numquam .",
  skillsList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "node.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
const Resume = () => {
  return (
    <motion.div
      initial={{ opacit: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            {/* experiences */}
            <TabsContent value="experience" className="w-full ">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.desription}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.dureation}</span>
                          <h3 className="text-xl max-w-[260px] max-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full  ">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.desription}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.dureation}</span>
                          <h3 className="text-xl max-w-[260px] max-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.Institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.desription}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillsList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
                <div className="flex flex-col gap-[30px]">
                  <h3 className="text-4xl font-bold ">{about.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.desription}</p>
                  <ul  className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                    {about.info.map((item, index)=>{
                      return <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    })}
                  </ul>
                </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
