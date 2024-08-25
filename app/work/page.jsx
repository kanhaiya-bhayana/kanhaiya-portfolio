"use client";

import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper.scss';


import { FaGithub } from 'react-icons/fa';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from '@/components/ui/scroll-area';

import Link from 'next/link';
import Image from 'next/image';
import WorkSliderBtns from '@/components/WorkSliderBtns';
import Test from '@/components/Test';

const projects = [
  {
    num: "01",
    category: "backend",
    titile: "Clean Architecture",
    description: ["Successfully completed a Clean Architecture solution, incorporating CQRS and the MediatR design pattern. This journey was challenging, given my initial unfamiliarity with these concepts, but it has been incredibly rewarding.","I applied Clean Architecture principles to the Accounts Solution. For those looking for a straightforward yet comprehensive implementation of Clean Architecture alongside CQRS and MediatR, this project serves as a solid reference.", "To enhance the scalability and maintainability of the solution, I also implemented Docker containerization. This ensures a consistent and reliable deployment process across different environments.",],
    stack: [{ name: "Clean Architecture" }, { name: "CQRS & MediatR" }, { name: "Azure" }, { name: "Docker" }],
    image: "1",
    github: "https://github.com/kanhaiya-dev/Clean.Architecture",
  },
  {
    num: "02",
    category: "fullstack",
    titile: "FMS",
    description: ["Spearheading the development of a sophisticated File Management System (FMS) project aimed at revolutionizing file organization and accessibility.", " Developingthe system with a focus on user-centric design, employing intuitive file storage, dynamic folder organization, seamless file modification, and rapid file retrieval functionalities.", "Utilizing cutting-edge technologies including React for the frontend, .NET Core for the backend, and leveraging Web APIs to facilitate seamless communication between components."],
    stack: [{ name: "React" }, { name: "C#" }, { name: "Asp.Net Core" }, { name: "SQL Server" }, { name: "Azure Cloud" }],
    image: "1",
    github: "https://github.com/kanhaiya-bhayana-inc/IncedoFMS-back-end",
  },
  {
    num: "03",
    category: "fullstack",
    titile: "E-Commerce WebApp - MVC",
    description: [" Developed an ecommerce WebApplication in .NET Core MVC, using Microservices, Stripe, Azure Queues & Topics, and Ocelot.", "Includes the Functionalities of Sign-up, Sign-in using JWT Authentication and the features are managing the orders and inventory.", "Integrated a Stripe Payment Gateway and an API gateway for the backend microservice using Ocelot.", "Integrated a Service Bus from Azure to read messages from the Queue and send an email to the customers."],
    stack: [{ name: "Azure" }, { name: "C#" }, { name: "Asp.Net Core" }, { name: "SQL Server" }],
    image: "2",
    github: "https://github.com/kanhaiya-bhayana/dotnet-microservices",
  },
  {
    num: "04",
    category: "fullstack",
    titile: "Asset Advisor Portfolio",
    description: ["DevelopedanAdvisor Dashboard to help clients achieve their financial goals and objectives. It is a web application and includes the features of clients and investment management operations.", "Ledthebackenddevelopment of the project during the internship time period.", "Implementedthe Clean Architecture (3 layered) and the Repository Pattern.", ],
    stack: [{ name: "React" }, { name: "C#" }, { name: "Asp.Net Core" }, { name: "Azure" }],
    image: "3",
    github: "https://github.com/kanhaiya-bhayana-inc/asset-advisors-ui",
  },
]



const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    console.log("Curr: ", currentIndex);

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
              {/* project title */}
              <h3 className='text-white/60 text-2xl'>{project.titile}</h3>
              {/* stack */}
              <ul className='flex gap-4'>
                {[project.stack.map((item, index) => {
                  return <li key={index} className='text-l text-accent'>{item.name}{index != project.stack.length - 1 && ","}</li>
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
              {projects.map((proj, index) => {
                return <SwiperSlide key={index} className='w-full'>
                  <div className='h-[460px] rounded-xl relative group flex justify-center items-center'>
                    {/* overlay */}
                    {/* <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div> */}

                    {/* content */}
                    <ScrollArea className="h-[400px]">
                      <ul className=' flex flex-col gap-3 ml-8 mr-8 text-justify list-disc'>
                        {[project.description.map((item,index) => {
                          return <li className='text-white/60' key={index}>{item}</li>
                        })]}
                        {/* <li className='text-white/60'>Spearheading the development of a sophisticated File Management System (FMS) project aimed at revolutionizing file organization
                        and accessibility.</li>
                        <li className='gap- text-white/60'>Developingthe system with a focus on user-centric design, employing intuitive file storage, dynamic folder organization, seamless file
                        modification, and rapid file retrieval functionalities.</li>
                        <li className='gap- text-white/60'>Utilizing cutting-edge technologies including React for the frontend, .NET Core for the backend, and leveraging Web APIs to facilitate
                        seamless communication between components.</li>
                        <li className='gap- text-white/60'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, doloremque cumque? Qui, et voluptates! Atque eum aliquam a iure laudantium at vitae ullam ipsa commodi ipsum. Itaque, consequatur nobis. Nisi.]</li> */}
                      </ul>
                    </ScrollArea>
                  </div>
                </SwiperSlide>;
              })}
              {/* <Test /> */}
              {/* Slider buttons */}
              <WorkSliderBtns />
            </Swiper>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Work