import {Button} from '@/components/ui/button';
import {FiDownload} from 'react-icons/fi';

// components
import Social from '@/components/Social';
import Photo from '@/components/Photo';
import Stats from '@/components/Stats';

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        
        <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className='text-xl'>Software Developer</span>
            <h1 className='h2 mb-6'>
            Hello I'm <br /> <span className='text-accent'>Kn Kanhaiya</span>
            </h1>
            <p className='max-w-[500px] mb-9 text-white/80 text-justify'>I am a Software Developer skilled in C#, JAVA, .NET Core, React, Docker, SQL Server and Azure Cloud, with a focus on Microservices, and Clean Architecture. Currently at Incedo, and I am Azure-certified (AZ-204, AZ-900).
            </p>
            {/* btn and socials */}
            <div className='flex flex-col xl:flex-row items-center gap-8'>
              <Button size="lg" className="border border-white bg-primary rounded-full uppercase flex items-center gap-2 text-white hover:text-primary">
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>

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
    </section>
  );
};

export default Home;