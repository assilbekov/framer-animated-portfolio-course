import "./links.scss";

export const Links = () => {
  const items = [
    "Homepage",
    "Services",
    "Portfolio",
    "Contact",
    "About",
  ]

  return (
    <div className="links">
      {items.map((item, index) => (
        <a href={`#${item}`} key={index}>{item}</a>
      ))}
    </div>
  )
}