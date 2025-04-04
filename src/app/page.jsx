"use client"
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";
const Homepage = () => {
  return(
    <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y: "0%"}} transition={{duration: 1}}>
    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* Image container */}
      <div className="h-1/2 lg:h-full lg:w-1/2 relative">
        <Image src="/hero.png" alt="" fill className="object-contain"/>
      </div>

      {/* Text container */}
      <div className="lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center"> 
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold">Turning Ideas into Reality with Code </h1>
        <p className="md:text-xl">I am specialize in providing custom web and software solutions tailored to your needs. Whether you&apos;re looking for a high-performance web application, an AI-powered platform, or a seamless e-commerce experience, I deliver cutting-edge solutions that drive growth. With expertise in React, Next.js, Firebase, and modern backend technologies, I build scalable, secure, and user-friendly digital products. My goal is to help businesses streamline operations, enhance customer engagement, and stay ahead in the digital era. Let&apos;s bring your vision to life with technology that works for you!</p>
        {/* Buttons */}
        <div className="flex gap-4 w-full">
          <Link href="/Rishabh-resume.pdf" target= "_blank" ><button className="p-4 rounded-md ring-1 ring-black bg-black text-white">My Resume</button></Link>
          <Link href="/contact"><button className="p-4 rounded-md ring-1 ring-black ">Contact Me</button></Link>
        </div>
      </div>
    </div>  

    </motion.div> 
  )
};

export default Homepage;
