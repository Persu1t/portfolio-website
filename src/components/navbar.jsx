"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react"
import NavLink from "./navLink";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const topVarients = {
    closed: {
      rotate:0
    },
    opened:{
      rotate:45,
      backgroundColor: "rgb(255, 255, 255)"
    }
  }

  const centerVariants = {
    closed: {
      opacity: 1
    },
    opened:{
      opacity: 0
    }
  }

  const lowerVariant = {
    closed: {
      rotate:0
    },
    opened:{
      rotate:-45,
      backgroundColor: "rgb(255, 255, 255)"
    }
  }

  const listVariants ={
    closed:{
      x: "100vw"
    },
    opened:{
      x:0,
      transition:{
        when: "beforeChildren",
        staggerChildren:0.2,
      }
    }
  }
  
  const listItemVariants = {
    closed:{
      x: -10,
      opacity: 0
    },
    opened: {
      x: 0,
      opacity: 1
    }
  }
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* Links */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link, index)=>(
          <NavLink link={link} key={index}/>
        ))}
      </div>
      {/* LOGO */}
      <div className="md:hidden lg:flex w-1/3 justify-center">
        <Link href={"/"} className="text-sm bg-black rounded-md p-1 font-bold">
          <span className="text-white mr-1">RS</span>
          <span className="w-12 h-8 rounded bg-white text-black p-0.5">
            .dev
          </span>
        </Link>
      </div>
        {/* Social */}
      <div className="flex md:flex gap-4 justify-end w-1/3">
        <Link href={"https://github.com/Persu1t"}><Image src="/github.png" alt="" width={24} height={24}/></Link>
        <Link href={"https://www.instagram.com/shukla_rishabh_/"}><Image src="/instagram.png" alt="" width={24} height={24}/></Link>
        <Link href={"https://www.linkedin.com/in/rishabh-shukla-709127357/"}><Image src="/linkedin.png" alt="" width={24} height={24}/></Link>
      </div>

      {/* Responsive menu button */}
      <div className="md:hidden">
        <button className="w-10 h-[22px] flex flex-col justify-between z-50 relative" onClick={() => setIsOpen(!isOpen)}>
          <motion.div variants={topVarients} animate={isOpen ? "opened" : "closed"} className="w-[24px] h-1 bg-black rounded origin-left"></motion.div>
          <motion.div variants={centerVariants} animate={isOpen ? "opened" : "closed"} className="w-[24px] h-1 bg-black rounded"></motion.div>
          <motion.div variants = {lowerVariant} animate={isOpen ? "opened" : "closed"} className="w-[24px] h-1 bg-black rounded origin-left"></motion.div>
        </button>
        {/* Menue list */}
        {isOpen && (
          <motion.div variants={listVariants} initial="closed" animate="opened" className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40">
            {links.map((link, index) => (
              <motion.div variants={listItemVariants} key={index}>
                  <Link href={link.url} >
                {link.title}
              </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
