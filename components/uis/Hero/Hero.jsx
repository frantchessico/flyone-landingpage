"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import NavLink from "../NavLink"
import HeroImg from "@/public/images/1.svg"
import UrlShortener from "./url-shortener"

function ElegantShape({ className, delay = 0, width = 400, height = 100, rotate = 0, gradient = "from-white/[0.08]" }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={`absolute ${className}`}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
          x: [0, 10, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={`absolute inset-0 rounded-full bg-gradient-to-r to-transparent ${gradient} backdrop-blur-[2px] border-2 border-white/[0.15] shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] after:absolute after:inset-0 after:rounded-full after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]`}
        />
      </motion.div>
    </motion.div>
  )
}

const Hero = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  }

  if (!mounted) return null

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-indigo-500/[0.15]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />
        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-rose-500/[0.15]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />
        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-violet-500/[0.15]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />
        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-amber-500/[0.15]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />
        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-cyan-500/[0.15]"
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 py-28">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-12"
          >
            <Image src="https://res.cloudinary.com/dwsk5thfo/image/upload/v1738435901/bvul9lr6kfqkadjofsxi.svg" alt="Flyone" width={20} height={20} />
            <span className="text-sm text-white/60 tracking-wide">Flyone</span>
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-6xl font-extrabold mb-6 md:mb-8 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80"
            style={{
                backgroundImage:
                    "linear-gradient(179.1deg, #FFFFFF 0.77%, rgba(255, 255, 255, 0) 182.09%)",
            }}
          >
            Superpoderes para o seu marketing com links inteligentes e personalizados
          </motion.h1>


          <motion.p
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto"
          >
           O Flyone oferece gestão inteligente de links, análises poderosas e rastreamento fácil para impulsionar seus resultados de marketing.
          </motion.p>

          <motion.div custom={3} variants={fadeUpVariants} initial="hidden" animate="visible">
            <NavLink
              href="/#pricing"
              className="inline-flex items-center px-6 py-3 text-white rounded-full font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{
                backgroundColor: "#57d468",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#45b857")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#57d468")}
              onMouseDown={(e) => (e.target.style.backgroundColor = "#3e9f4d")}
              onMouseUp={(e) => (e.target.style.backgroundColor = "#57d468")}
            >
             Comece agora
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 ml-2">
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg>
            </NavLink>
          </motion.div>
        </div>

        <motion.div custom={4} variants={fadeUpVariants} initial="hidden" animate="visible">
          <UrlShortener />
        </motion.div>

        <motion.div
          custom={5}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="mt-16 sm:mt-28 max-w-3xl mx-auto"
        >
          <Image src={HeroImg || "/placeholder.svg"} className="shadow-lg rounded-2xl" alt="Flyone" />
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </section>
  )
}

export default Hero





