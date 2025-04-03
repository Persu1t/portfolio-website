"use client";
import Brain from "../../components/brain";
import { motion, useInView, useScroll } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-x-hidden overflow-y:auto lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY IMAGE */}
            <Image
              src="/Whatsapp-image.jpg"
              alt=""
              width={112}
              height={112}
              className="w-28 h-28 rounded-full object-cover"
            />
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
            Detail-oriented and motivated BCA graduate with a strong foundation in computer applications, web development, and software engineering. Proficient in coding, database management, and integrating payment solutions like Razorpay. Experienced in building and maintaining e-commerce platforms and leveraging modern technologies such as React for dynamic web development. Equipped with a problem-solving mindset and a passion for learning, seeking to contribute technical expertise and creativity to drive innovation in a collaborative team environment.
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
             When you right &quot;Hello World!&quot; in your favourite programming language you become programmer that day 😂😂
            </span>
            {/* BIOGRAPHY SIGN SVG*/}
            <div className="self-end">
            <svg width="284" height="74" viewBox="0 0 284 74" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.2219 26.1225C18.349 25.8342 18.4673 25.5579 18.5772 25.294M18.5772 25.294C20.6922 20.2148 19.6699 19.7527 16.9888 27.8357C16.9221 28.0368 16.8553 28.2378 16.7884 28.4388M18.5772 25.294C17.9664 26.3267 17.3718 27.3726 16.7884 28.4388M18.5772 25.294C21.3547 20.5981 24.4683 16.1744 28.3952 11.3462C31.3496 7.71377 38.7636 -1.47304 39.8457 3.03717C40.8491 7.21886 32.5086 23.9148 32.3148 24.3237C28.1317 33.1519 24.5907 39.6755 19.5628 47.7647M16.7884 28.4388C13.1637 39.3315 9.2607 50.1257 5.53828 60.9861C4.38872 64.34 1.87354 74.6117 2.23526 71.094C3.36129 60.1428 7.43484 48.2256 11.9241 38.2862C13.5335 34.723 15.115 31.4972 16.7884 28.4388ZM19.5628 47.7647C19.5123 47.8459 19.4617 47.9271 19.411 48.0086C16.7866 52.2222 12.8018 56.4502 17.2971 50.6212C17.7594 50.0218 18.5572 48.9655 19.5628 47.7647ZM19.5628 47.7647C22.7029 44.0149 27.869 38.8557 31.1698 41.7983C33.8123 44.154 33.7039 49.4077 34.4288 52.5057C35.4884 57.0344 36.8683 62.6114 39.9779 66.297C49.0641 77.0665 63.2107 56.9131 66.8425 50.3643C67.1502 49.8095 67.4589 49.2323 67.7562 48.6377M67.7562 48.6377C69.2601 45.6289 70.4692 42.1713 69.7492 38.8858C69.5411 37.9363 68.4206 40.488 68.3399 41.4556C68.2038 43.0875 67.9011 45.7218 67.7562 48.6377ZM67.7562 48.6377C67.4408 54.982 67.8722 62.6589 72.3916 64.2412C83.9949 68.3035 96.448 45.2645 100.621 38.2862C101.347 37.0726 102.871 34.7515 103.997 32.9308M103.997 32.9308C105.176 31.0234 105.919 29.6652 104.849 30.7053C104.396 31.146 104.137 31.9669 103.997 32.9308ZM103.997 32.9308C103.687 35.0496 103.948 37.8594 103.969 38.843C104.093 44.8807 105.038 50.7805 106.171 56.7031C106.416 57.9868 106.804 59.4447 107.071 60.9302M107.071 60.9302C107.433 62.9475 107.573 65.0157 106.831 66.7681C105.886 69.0014 100.07 70.2387 102.075 67.4962C103.703 65.2693 105.377 63.0885 107.071 60.9302ZM107.071 60.9302C114.596 51.3433 122.514 42.2013 128.499 31.4334L128.659 31.145C130.005 28.7256 131.426 26.1699 132.568 23.5439M132.568 23.5439C133.241 21.9963 133.817 20.4243 134.224 18.8414C134.662 17.1404 133.329 21.0223 132.568 23.5439ZM132.568 23.5439C132.416 24.048 132.286 24.4977 132.198 24.8376C130.173 32.6717 128.364 40.596 127.002 48.5654C126.151 53.5441 122.634 65.1472 125.769 70.066C127.801 73.2562 145.262 50.7057 146.952 48.7795C154.025 40.7187 152.89 49.742 159.636 53.4908C163.094 55.4128 167.594 54.4955 171.621 52.2098M171.621 52.2098C176.363 49.5187 180.45 44.9307 181.413 40.8464M171.621 52.2098C171.418 52.0336 171.225 51.833 171.042 51.6063C167.333 47.0047 171.697 29.5191 179.057 34.4315C180.663 35.5032 181.45 36.9244 181.6 38.5174M171.621 52.2098C174.529 54.7355 179.38 52.2387 182.364 49.3091M181.413 40.8464C181.602 40.0446 181.671 39.2622 181.6 38.5174M181.413 40.8464C181.443 40.059 181.505 39.2789 181.6 38.5174M181.413 40.8464C181.302 43.7594 181.63 46.7724 182.364 49.3091M181.6 38.5174C181.896 36.1458 182.51 33.9554 183.461 32.29C184.555 30.3764 185.916 33.4577 186.104 34.1745C187.106 37.9862 186.217 42.6014 184.695 46.1669C184.285 47.125 183.448 48.2456 182.364 49.3091M182.364 49.3091C182.742 50.612 183.226 51.7892 183.814 52.7627C191.141 64.9072 205.785 49 210.414 42.7405C210.821 42.19 211.237 41.6161 211.658 41.0211M211.658 41.0211C218.357 31.5535 226.323 16.7437 220.235 5.69262C214.105 -5.43552 210.246 19.3972 210.194 22.3535C210.147 25.0276 209.768 34.5918 211.658 41.0211ZM211.658 41.0211C212.88 45.1761 215.05 48.0218 218.87 46.8522C226.687 44.459 227.669 36.1531 232.611 31.3478C233.994 30.0021 233.482 35.8077 235.341 36.4017C244.912 39.4599 246.618 24.184 252.693 21.9252C253.7 21.5506 254.224 28.1328 254.278 28.521C254.827 32.4352 256.324 36.4585 259.387 39.2285C263.281 42.7493 268.628 41.7867 272.863 39.3998C278.772 36.0698 279.478 32.1881 282.2 26.8934M71 24.4C69.992 24.526 70.4218 24.9109 69.4 24.4" stroke="black" strokeWidth="3" strokeLinecap="round"/>
</svg>

            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                TypeScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Node.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Redux
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Framer Motion
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Webpack
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Vite
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Firebase
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Git
              </div>

            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Freelancer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                   Developing freelance projects, focusing on React and Next.js.
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                  Present
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    React Teacher Assistant
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I spearheaded React-based application development,
                   for student. Took more than 450+ doubts
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    July-2024 - Oct-2024{" "}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Coding Ninjas
                  </div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Freelancer{" "}
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                  I spearheaded React-based application development,
                  for student. Took more than 1000+ doubts. Assesed more than 130+ projects.
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    July-2023 - November-2023{" "}
                  </div>

                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Coding Ninjas
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
