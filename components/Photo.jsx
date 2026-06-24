"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const Photo = () => {
    return (
        <div className="relative flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 2, duration: 0.4, ease: 'easeIn' }
                }}
                // default size for mobile, larger for laptop/PC
                className="
                    relative 
                    w-[300px] h-[300px] 
                    md:w-[380px] md:h-[380px] 
                    lg:w-[450px] lg:h-[450px] 
                    xl:w-[520px] xl:h-[520px]
                "
            >
                {/* circle */}
                {/* <motion.svg
                    className="absolute top-0 left-0 w-full h-full"
                    fill="transparent"
                    viewBox="0 0 506 506"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.circle
                        cx="253"
                        cy="253"
                        r="250"
                        stroke="#00ff99"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ strokeDasharray: ["24 10 0 0"] }}
                        animate={{
                            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                            rotate: [120, 360]
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    />
                </motion.svg> */}

                {/* image */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 2.4, duration: 0.4, ease: 'easeInOut' }
                    }}
                    className="w-full h-full mix-blend-lighten relative"
                >
                    <Image
                        src="/assets/75826879.jpeg"
                        priority
                        quality={100}
                        fill
                        alt=''
                        className='object-contain'
                    />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Photo;
