import "./app.scss"
import { Hero } from "./components/hero/Hero"
import { Navbar } from "./components/navbar/Navbar"
import { Parallax } from "./components/parallax/Parallax"
import { Services } from "./components/services/Services"

function App() {

  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type='services' />
      </section>
      <section id="Portfolio"><Services /></section>
      <section id="About">
        <Parallax type="portfolio" />
      </section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id="Contact">Contact</section>
    </div>
  )
}

export default App
