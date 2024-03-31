import { motion } from "framer-motion";
import "./services.scss";

export const Services = () => {
  return (
    <motion.div className="services">
      <motion.div className="textContainer">
        <p>
          I focus on your brand grow <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer">
        <div className="title">
          <img src="/people.webp" alt="people" />
          <h1><b>Unique</b> Ideas</h1>
        </div>
        <div className="title">
          <h1><b>For your</b> Business.</h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer">
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