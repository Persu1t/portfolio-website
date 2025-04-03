"use client"
import React from 'react'
import { motion } from 'motion/react'
import emailjs from "@emailjs/browser"
const ContactPage = () => {
  const [sucess, setSuccess] = React.useState(false)
  const [error, setError] = React.useState(false)
  const text = "Say Hello"
  const form = React.useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setError(false)
    setSuccess(false)
    emailjs
      .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
      })
      .then(
        () => {
          setSuccess(true)
          form.current.reset()
        },
        (error) => {
          setError(true)
          console.log(error.text);
          form.current.reset()
        },
      );
  };
  return (
    <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y: "0%"}} transition={{duration: 1}}>
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* Text Container */}
        <div className='sm:hidden lg:h-full lg:w-1/2 lg:flex lg:items-center lg:justify-center lg:text-6xl'>
          <div>
            {text.split("").map((letter, index)=>(
              <motion.span key={index} initial={{opacity:1}} animate={{opacity:0}} transition={{duration:3, repeat:Infinity, delay: index * 0.1}}>
                  {letter}
              </motion.span>
            ))}
             😊
          </div>
        </div>
        {/* Form container */}
        <form className='h-full lg:h-full lg:w-1/2 bg-blue-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24' ref={form} onSubmit={sendEmail}>
            <span>Dear Rishabh,</span>
            <textarea rows={6} className='bg-transparent border-b-2 border-b-black outline-none resize-none' name='message'/>
            <span>My email address is:</span>
            <input type='email' className='bg-transparent border-b-2 border-b-black outline-none' name="from_email"/>
            <span>Regards</span>
            <button className='bg-purple-200 rounded font-semibold text-gray-600 p-4'>Send</button>
            {sucess && <span className='text-green-600 font-semibold'>Your message has been sent successfully!</span>}
            {error && <span className='text-red-600 font-semibold'>Something went wrong. Please try again.</span>}
        </form>
      </div>
    </motion.div>
    
  )
}

export default ContactPage