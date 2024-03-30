import { motion } from "framer-motion"
import "./hero.scss"

const textVariants = {
  initial: {
    x: -500,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1
    }
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    }
  }
}

export const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
          <motion.h2 variants={textVariants}>Harvey Asssilbekov</motion.h2>
          <motion.h1 variants={textVariants}>Web developer, Frontend and Backend</motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}>See the latest works</motion.button>
            <motion.button variants={textVariants}>Contact me</motion.button>
          </motion.div>
          <motion.img src="/scroll.png" alt="down arrow" variants={textVariants} animate="scrollButton" />
        </motion.div>
      </div>
      <div className="slidingTextContainer">
        Writer Content Creator Influencer
      </div>
      <div className="imageContainer">
        <img src="/hero.png" alt="hero" />
      </div>
    </div >
  )
}