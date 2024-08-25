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
  description: "I began my professional journey in 2023 as a Software Engineer trainee at Incedo Inc. Upon successfully completing my internship, I transitioned into the role of a Software Engineer. Currently, I am a Software Engineer at Incedo, with expertise in C#, Java, .NET Core, React, Docker, SQL Server, and Azure Cloud. My focus is on Microservices and Clean Architecture, and I hold Azure certifications (AZ-204, AZ-900).",
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
      fieldName: "Languages",
      fieldValue: "English, Hindi"
    },
    {
      fieldName: "Email",
      fieldValue: "ikanhaiyabhayana@outlook.com"
    },
    
  ]
};

// experience data
const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  description: "",
  items: [
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
  ]
};

// education data
const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My education',
  description: "",
  items: [
    {
      institution: "Online Udemy Course",
      degree: "Docker",
      duration: "2024"
    },
    {
      institution: "Online Udemy Course",
      degree: "Clean Architecture",
      duration: "2024"
    },
    {
      institution: "Microsoft Certification",
      degree: "Azure Developer Associate - AZ204",
      duration: "2023"
    },
    {
      institution: "Online Udemy Course",
      degree: ".NET Core Microservices",
      duration: "2023"
    },
    {
      institution: "Microsoft Certification",
      degree: "Azure Fundamentals - AZ900",
      duration: "2023"
    },
    {
      institution: "Thapar University",
      degree: "Bachelors of Engineering in Computer Science",
      duration: "2020 - 2023"
    },
    
  ]
};

// skills data
const skills = {
  title: "My skills",
  description: "",
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
      name: "node.js",
    },
    {
      icon: <SiAzuredevops />,
      name: "azuredevops",
    },
    {
      icon: <SiMicrosoftazure />,
      name: "azure",
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
import { Tooltip } from '@radix-ui/react-tooltip';

const Resume = () => {
  return (
    <motion.div 
      initial={{opacity: 0}} 
      animate={{
        opacity: 1, 
        transition: { delay: 0.1, duration: 0.1, ease: "easeIn" }
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
                  <p className='text-white/60 mx-auto xl:mx-0'>{experience.description}</p>
                  <ScrollArea className="h-[400px]">
                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                      {experience.items.map((item, index) => {
                        return <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                            <span className='text-accent'>{item.duration}</span>
                            <h3 className='text-l max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                            <div className='flex items-center gap-3'>
                              {/* dot */}
                              <span className='w-[6px] h-[6px] rounded-full bg-white/60'>

                              </span>
                              <p className='text-white/60'>
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
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{education.title}</h3>
                  <p className='text-white/60 mx-auto xl:mx-0'>{education.description}</p>
                  <ScrollArea className="h-[400px]">
                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                      {education.items.map((item, index) => {
                        return <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                            <span className='text-accent'>{item.duration}</span>
                            <h3 className='text-l max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.degree}</h3>
                            <div className='flex items-center gap-3'>
                              {/* dot */}
                              <span className='w-[6px] h-[6px] rounded-full bg-white/60'>

                              </span>
                              <p className='text-white/60'>
                                {item.institution}
                              </p>
                            </div>
                          </li>
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
              {/* skills */}
              <TabsContent value="skills" className="w-full h-full">
                <div className='flex flex-col gap-[30px]'>
                  <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                    <h3 className='text-4xl font-bold'>{skills.title}</h3>
                    <p className=' text-white/60 mx-auto xl:mx-0 text-justify'>{skills.description}</p>
                  </div>
                  <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4'>
                    {skills.slikkList.map((skill, index) => {
                      return <li key={index}>
                        <div className='flex gap-4 h-[70px] bg-[#232329] rounded-xl justify-center items-center group w-full'>
                        <div className="mx-4 flex flex-col items-center gap-2">
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger>
                                <div className='text-xl group-hover:text-accent transition-all duration-300'>{skill.icon}</div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className='capitalize'>{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                          <p className='capitalize text-sm'>{skill.name}</p>
                        </div>
                        </div>
                      </li>;
                    })}
                  </ul>
                </div>
              </TabsContent>
              {/* about-me */}
              <TabsContent value="about-me" className="w-full text-center xl:text-left">
                <div className='flex flex-col gap-[30px]'>
                  <h3 className='text-4xl font-bold'>{about.title}</h3>
                  <p className=' text-white/60 mx-auto xl:mx-0 text-justify'>{about.description}</p>
                  <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 gap-x-8 max-w-[620px] mx-auto xl:m-0'>
                    {about.info.map((item,index) =>{
                      return <li key={index} className='flex items-center justify-center xl:justify-start gap-1'>
                        <span className='text-white/60'>{item.fieldName}:</span>
                        <span className='text-l'>{item.fieldValue}</span>
                      </li>;
                    })}
                  </ul>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
    </motion.div>

  );
}

export default Resume;

