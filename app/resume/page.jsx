"use client";
import {
  FaDocker,
  FaReact,
  FaNodeJs,
  FaJava,
  FaGit,


} from 'react-icons/fa'

import { SiCsharp, SiAzuredevops, SiMicrosoftazure, SiNextdotjs } from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";
import { DiDotnet } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { GrServices } from "react-icons/gr";

const about = {
  title: 'About me',
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Kanhaiya Bhayana"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91) 79838-89800"
    },
    {
      fieldName: "Experiance",
      fieldValue: "2 Years"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian"
    },
    {
      fieldName: "Email",
      fieldValue: "ikanhaiyabhayana@outlook.com"
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi"
    },
    
  ]
};

// experience data
const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  items: [
    {
      company: "Incedo Inc.",
      position: "Software Engineer",
      duration: "July 2023 - Present"
    },
    {
      company: "Incedo Inc.",
      position: "Software Engineer",
      duration: "July 2023 - Present"
    },
    {
      company: "Incedo Inc.",
      position: "Software Engineer",
      duration: "July 2023 - Present"
    },
    {
      company: "Incedo Inc.",
      position: "Software Engineer",
      duration: "July 2023 - Present"
    },
    {
      company: "Incedo Inc.",
      position: "Software Engineer",
      duration: "July 2023 - Present"
    },
    {
      company: "Incedo Inc.",
      position: "Software Engineer",
      duration: "July 2023 - Present"
    },
    {
      company: "Incedo Inc.",
      position: "Software Engineer",
      duration: "July 2023 - Present"
    },
    {
      company: "Incedo Inc.",
      position: "Software Engineer",
      duration: "July 2023 - Present"
    },
    {
      company: "Incedo Inc.",
      position: "Software Engineer Trainee",
      duration: "Jan 2023 - June 2023"
    },
    {
      company: "Incedo Inc.",
      position: "Software Engineer",
      duration: "July 2023 - Present"
    },
  ]
};

// education data
const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My education',
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  items: [
    {
      institute: "Thapar University",
      degree: "Bachelors of Engineering in Computer Science",
      duration: "2020 - 2023"
    },
    
  ]
};

// skills data
const skills = {
  title: "My skills",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  slikkList: [
    {
      icon: <SiCsharp />,
      name: "csharp",
    },

    {
      icon: <FaJava />,
      name: "java",
    },
    {
      icon: <DiDotnet />,
      name: "dotnet",
    },
    {
      icon: <GrServices />,
      name: "microservices",
    },
    {
      icon: <FaDocker />,
      name: "docker",
    },
    {
      icon: <BsFiletypeSql />,
      name: "sql server",
    },
    {
      icon: <IoLogoJavascript />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <FaNodeJs />,
      name: "next.js",
    },
    {
      icon: <SiAzuredevops />,
      name: "azuredevops",
    },
    {
      icon: <SiMicrosoftazure />,
      name: "microsoftazure",
    },
    {
      icon: <FaGit />,
      name: "git",
    },
  ]

};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TbTooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <motion.div 
      initial={{opacity: 0}} 
      animate={{
        opacity: 1, 
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }} 
      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
      >
        <div className="container mx-auto">
          <Tabs defaultValue="experience"
            className="flex flex-col xl:flex-row gap-[60px]"
          >
            <TabsList className="flex flex-col lg:w-3/6 w-4/6 max-w-[380] mx-auto xl:mx-0 gap-6">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="about-me">About me</TabsTrigger>
            </TabsList>

            {/* content */}
            <div className='min-h-[70vh] w-full'>
              {/* experience */}
              <TabsContent value="experience" className="w-full">
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{experience.title}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience.description}</p>
                  <ScrollArea className="h-[400px]">
                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                      {experience.items.map((item, index) => {
                        return <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                            <span>{item.duration}</span>
                            <h3>{item.position}</h3>
                            <div>
                              {/* dot */}
                              <span>

                              </span>
                              <p>
                                {item.company}
                              </p>
                            </div>
                          </li>
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
              {/* education */}
              <TabsContent value="education" className="w-full">
                education
              </TabsContent>
              {/* skills */}
              <TabsContent value="skills" className="w-full">
                skills
              </TabsContent>
              {/* about-me */}
              <TabsContent value="about-me" className="w-full">
                about-me
              </TabsContent>
            </div>
          </Tabs>
        </div>
    </motion.div>

  );
}

export default Resume;

