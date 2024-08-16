"use client";

import React, {useState} from 'react';

import {Swiper, SwiperSlide} from 'swiper/react';
// import 'swiper/swiper.scss';


import { FaGithub } from 'react-icons/fa';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from 'next/link';
import Image from 'next/image';
import WorkSliderBtns from '@/components/WorkSliderBtns';
import Test from '@/components/Test';

const projects = [
  {
    num: "01",
    category: "frontend",
    titile: "project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    stack: [{name: "Html 5"}, {name: "C#"}, {name: "Asp.Net Core"}, {name: "SQL Server"}],
    image: "1",
    github: "https://github.com/kanhaiya-bhayana",
  },
  {
    num: "02",
    category: "backend",
    titile: "project 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    stack: [{name: "Html 5"}, {name: "C#"}, {name: "Asp.Net Core"}, {name: "SQL Server"}],
    image: "2",
    github: "https://github.com/kanhaiya-bhayana",
  },
  {
    num: "03",
    category: "fullstack",
    titile: "project 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    stack: [{name: "Html 5"}, {name: "C#"}, {name: "Asp.Net Core"}, {name: "SQL Server"}],
    image: "3",
    github: "https://github.com/kanhaiya-bhayana",
  },
]



const Work = () => {
  const[project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    console.log("Curr: " , currentIndex);
    
    // update project state based on current slide
    setProject(projects[currentIndex]);
  
  }

  return (
    <div className="min-h-[80vh] flex flex-col justity-center py-12 px-0">
      <div className="container mx-auto">
      <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
        <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
          <div className='flex flex-col gap-[20px] h-[50%]'>
            {/* outline num */}
            <div className='text-4xl leading-none'>
              {project.num}
            </div>
            {/* project category */}
            <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>{project.category} project</h2>
            {/* project description */}
            <p className='text-white/60'>{project.description}</p>
            {/* stack */}
            <ul className='flex gap-4'>
              {[project.stack.map((item, index) => {
                return <li key={index} className='text-l text-accent'>{item.name}{index != project.stack.length -1 && ","}</li>
              })]}
            </ul>
            {/* border */}
            <div className='border border-white/20'></div>
              {/* buttons */}
              <div>
                <Link href={project.github}>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className='w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group'>
                        <FaGithub className='text-white text-3xl' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            
          </div>
        </div>
        <div className='w-full xl:w-[50%]'>
          
          <Swiper 
            slidesPerView={1}
            onSlideChange={handleSlideChange}
          >
            {projects.map((proj,index) => {
              return <SwiperSlide key={index}>pro</SwiperSlide>;
            })}
            
          </Swiper>
          {/* <Test /> */}
          <WorkSliderBtns />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Work