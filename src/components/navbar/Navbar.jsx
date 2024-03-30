import "./navbar.scss"

export const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <div className="wrapper">
        <span>Lama dev</span>
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