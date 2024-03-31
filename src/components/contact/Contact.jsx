import { motion } from "framer-motion"
import "./contact.scss"

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    }
  }
}

export const Contact = () => {
  return (
    <motion.div className="contact" variants={variants} initial="initial" whileInView="animate">
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let's work together</motion.h1>
        <motion.div variants={variants} className="item">
          <h2>Mail</h2>
          <span>hello@react.dev</span>
        </motion.div>
        <motion.div variants={variants} className="item">
          <h2>Address</h2>
          <span>Hello street New york</span>
        </motion.div>
        <motion.div variants={variants} className="item">
          <h2>Phone</h2>
          <span>+995 596 123 123</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <form>
          <input type="text" required placeholder="Your name" />
          <input type="email" required placeholder="Your email" />
          <textarea placeholder="Your message" rows={10} />
          <button>Send</button>
        </form>
      </div>
    </motion.div>
  )
}