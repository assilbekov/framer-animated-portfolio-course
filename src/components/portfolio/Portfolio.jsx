import { motion, useScroll, useSpring } from "framer-motion";
import "./portfolio.scss";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate molestiae ea corrupti pariatur ducimus facilis dignissimos officiis veritatis hic dolores, beatae consequuntur reprehenderit tenetur quo eum ab. Ab, repellendus aliquid?"
  },
  {
    id: 2,
    title: "Nextjs Commerce",
    img: "https://images.pexels.com/photos/17554347/pexels-photo-17554347/free-photo-of-taxis-in-front-of-palace-in-istanbul.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate molestiae ea corrupti pariatur ducimus facilis dignissimos officiis veritatis hic dolores, beatae consequuntur reprehenderit tenetur quo eum ab. Ab, repellendus aliquid?"
  },
  {
    id: 3,
    title: "Vanilla JS APP",
    img: "https://media.gettyimages.com/id/1982991174/pt/foto/summer-breeze.jpg?s=1024x1024&w=gi&k=20&c=LwpmjiTYcuSgo4r1jag9cMy_NsonWbI3BckDz-sX_rY=",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate molestiae ea corrupti pariatur ducimus facilis dignissimos officiis veritatis hic dolores, beatae consequuntur reprehenderit tenetur quo eum ab. Ab, repellendus aliquid?"
  },
  {
    id: 4,
    title: "Music app",
    img: "https://images.pexels.com/photos/19845821/pexels-photo-19845821/free-photo-of-sheep-on-a-hillside-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate molestiae ea corrupti pariatur ducimus facilis dignissimos officiis veritatis hic dolores, beatae consequuntur reprehenderit tenetur quo eum ab. Ab, repellendus aliquid?"
  },
]

const Single = ({ item }) => {
  return (
    <section>
      {item.title}
    </section>
  )
}

export const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="portfolio">
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map(item => (
        <Single key={item.id} item={item} />
      ))}
    </div>
  );
}