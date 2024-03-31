import "./services.scss";

export const Services = () => {
  return (
    <div className="services">
      <h1>What we do?</h1>
      <div className="services__container">
        <div className="services__card">
          <img src="/web.png" alt="web" />
          <h2>Web Development</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget est auctor, tincidunt elit non, consectetur libero.</p>
        </div>
        <div className="services__card">
          <img src="/app.png" alt="app" />
          <h2>App Development</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget est auctor, tincidunt elit non, consectetur libero.</p>
        </div>
        <div className="services__card">
          <img src="/seo.png" alt="seo" />
          <h2>SEO</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget est auctor, tincidunt elit non, consectetur libero.</p>
        </div>
      </div>
    </div>
  )
}