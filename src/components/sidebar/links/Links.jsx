import { motion } from "framer-motion";
import "./links.scss";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1
    }
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
}

export const Links = () => {
  const items = [
    "Homepage",
    "Services",
    "Portfolio",
    "Contact",
    "About",
  ]

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item, index) => (
        <a href={`#${item}`} key={index}>{item}</a>
      ))}
    </motion.div>
  )
}