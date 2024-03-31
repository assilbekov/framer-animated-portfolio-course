import { motion, useScroll, useTransform } from "framer-motion";
import "./parallax.scss";
import { useRef } from "react";

export const Parallax = ({ type }) => {
  const rootRef = useRef();
  const { scrollYProgress } = useScroll({
    target: rootRef,
    offset: ["start start", "end start"]
  });
  const yText = useTransform(
    scrollYProgress, [0, 1], ["0%", "100%"]
  )
  const yBg = useTransform(
    scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      ref={rootRef}
      className="parallax"
      style={{
        background: type === "services" ?
          "linear-gradient(180deg, #111132, #0c0c1d)" :
          "linear-gradient(180deg, #111132, #505064)"
      }}
    >
      <h1 style={{ y: yText }}>{type === "services" ? "What we do?" : "What we did?"}</h1>
      <motion.div className="mountains"></motion.div>
      <motion.div style={{ y: yBg }} className="planets"></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  )
}