import "./hero.scss"

export const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">

        <div className="textContainer">
          <h2>Harvey Asssilbekov</h2>
          <h1>Web developer, Frontend and Backend</h1>
          <div className="buttons">
            <button>See the latest works</button>
            <button>Contact me</button>
          </div>
          <img src="/scroll.png" alt="down arrow" />
        </div>
      </div>
      <div className="slidingTextContainer">
        Writer Content Creator Influencer
      </div>
      <div className="imageContainer">
        <img src="/hero.png" alt="hero" />
      </div>
    </div>
  )
}