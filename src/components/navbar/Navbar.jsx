import { motion } from "framer-motion"
import "./navbar.scss"

export const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Lama dev
        </motion.span>
        <div className="social">
          <a href="#home"><img src="facebook.png" /></a>
          <a href="#home"><img src="instagram.png" /></a>
          <a href="#home"><img src="youtube.png" /></a>
          <a href="#home"><img src="dribbble.png" /></a>
        </div>
      </div>
    </div>
  )
}