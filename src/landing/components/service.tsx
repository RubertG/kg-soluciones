"use client"

import { motion } from "framer-motion"

interface Props {
  description: string
  image: React.ReactNode
  className?: string
}

export const Service = ({
  description,
  image,
  className
}: Props) => {
  return (
    <motion.div
      className={`bg-bg-card/30 backdrop-blur-[3px] border border-bg-200 rounded-lg p-3.5 text-sm text-text-200 text-center w-[275px] ${className}`}
      initial={{
        translateY: 40,
        opacity: 0
      }}
      whileInView={{
        translateY: 0,
        opacity: 1
      }}
      viewport={{
        once: true,
        margin: "0px 0px -150px 0px"
      }}
      transition={{
        duration: 0.25,
        ease: "easeInOut"
      }}
    >
      <picture
        className="flex h-[80px] items-center justify-center"
      >
        {image}
      </picture>
      <p className="mt-2">
        {description}
      </p>
    </motion.div>
  )
}