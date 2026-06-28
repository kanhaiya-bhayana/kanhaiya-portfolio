import {Button} from '@/components/ui/button';
import {FiDownload} from 'react-icons/fi';

// components
import Social from '@/components/Social';
import Photo from '@/components/Photo';
import Stats from '@/components/Stats';
import Link from 'next/link';
import Timeline from '@/components/Timeline';
import SectionHeading from '@/components/SectionHeading';
import ScrollToTop from '@/components/ScrollToTop';

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        
        <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className='text-xl'>Software Engineer</span>
            <h1 className='h2 mb-6'>
            Hola I'm <br /> <span className='text-accent'>Kanhaiya Bhayana</span>
            </h1>
            <p className='max-w-[500px] mb-9 text-white/80 text-justify'>Software Engineer with 4 years of experience designing scalable backend systems and AI-powered applications. I enjoy building production-ready software that solves real engineering problems-from financial platforms and distributed microservices to intelligent automation tools. Passionate about clean architecture, system performance, cloud technologies, and creating developer experiences that make teams faster and software more reliable. I believe in continuously learning, experimenting with emerging technologies, and building projects that create real-world impact beyond the workplace.
            </p>
            {/* btn and socials */}
            <div className='flex flex-col xl:flex-row items-center gap-8'>
              <Link href="https://drive.google.com/file/d/1RC-DNVl-dbxbtqI6dAOjGtLV0J4bgWuh/view?usp=sharing" target='_blank'>
              <Button size="lg" className="border border-white bg-primary rounded-full uppercase flex items-center gap-2 text-white hover:text-primary">
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              </Link>

              <div className='mb-8 xl:mb-0'>
                <Social containerStyles="flex gap-6" iconStyles=" text-white hover:text-primary hover:bg-accent w-9 h-9 border border-white rounded-full flex justify-center items-center" />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className='order-1 xl:order-none mb-8 xl:mb-0'>
            <Photo />
          </div>
        </div>
        
      </div>
      <Stats />

      <SectionHeading>My Developer Journey</SectionHeading>

      <Timeline />

      <ScrollToTop />
    </section>

  );
};

export default Home;
