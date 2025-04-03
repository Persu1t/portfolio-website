"use client";
import React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "React Commerce",
    desc: "A minimal e-commerce website to show the power of ReactJS, Firebase and reduxtoolkit.",
    img: "/react-commerce.png",
    link: "https://dontatmeshop.netlify.app/",
    code: "https://github.com/Persu1t/emart"
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Next.js Real estate app",
    desc: "A real estate website to show the power of Next.js, Firebase and Shadcn UI.",
    img: "/nextjs-project.png",
    link: "https://firebase-next.vercel.app/",
    code: "https://github.com/Persu1t/firebase-next"
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Cookpad",
    desc: 'The "Cookpad" is a web application that allows users to explore and discover a wide variety of food recipes.',
    img: "/meals-app.png",
    link: "https://lama.dev",
    code: "https://github.com/Persu1t/Meal-App"
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Habit-tracker App",
    desc: "This app helps you to build a new habait. You can create your new habait, delete and update your habit status for next seven days. ",
    img: "/habit-tracker.png",
    link: "https://lighthearted-twilight-1dc2f2.netlify.app",
    code: "https://github.com/Persu1t/habittracker"
  },
];

const Portfolio = () => {
  const ref = React.useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl">
          My Work
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{x}} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300"/>
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white lg:p-6">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl lg:mt-4">{item.title}</h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px]">{item.desc}</p>
                  <div className="flex justify-between items-center">

                  <Link href={item.code} className="flex justify-end">
                    <button className="mb-4 p-2 text-md md:text-md bg-white text-gray-200 font-semibold rounded-md">See Code</button>
                  </Link>
                  
                  <Link href={item.link} className="flex justify-end">
                    <button className="mb-4 p-2 text-md md:text-md bg-white text-gray-200 font-semibold rounded-md">See Demo</button>
                  </Link>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
            <h1>Do you have project?</h1>
            <div className="relative">
            <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer
              </textPath>
            </text>
          </motion.svg>
          <Link href={"/contact"} className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex justify-center items-center">Hire Me</Link>
            </div>
          </div>
    </motion.div>
  );
};

export default Portfolio;
