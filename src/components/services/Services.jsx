import { motion, useInView } from "framer-motion";
import "./services.scss";
import { useRef } from "react";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    }
  }
}

export const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div ref={ref} className="services" variants={variants} initial="initial" animate={isInView && "animate"}>
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on your brand grow <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div variants={variants} className="titleContainer">
        <div className="title">
          <img src="/people.webp" alt="people" />
          <h1><b>Unique</b> Ideas</h1>
        </div>
        <div className="title">
          <h1><b>For your</b> Business.</h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id dolore commodi soluta omnis quibusdam eaque, aut ducimus illum exercitationem eveniet harum magni animi, perferendis numquam, maiores labore? Odio, ex neque.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id dolore commodi soluta omnis quibusdam eaque, aut ducimus illum exercitationem eveniet harum magni animi, perferendis numquam, maiores labore? Odio, ex neque.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id dolore commodi soluta omnis quibusdam eaque, aut ducimus illum exercitationem eveniet harum magni animi, perferendis numquam, maiores labore? Odio, ex neque.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id dolore commodi soluta omnis quibusdam eaque, aut ducimus illum exercitationem eveniet harum magni animi, perferendis numquam, maiores labore? Odio, ex neque.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}