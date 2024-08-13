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
          <Tabs defaultValue="experience">
            <TabsList>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="about-me">About me</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
    </motion.div>

  );
}

export default Resume;

