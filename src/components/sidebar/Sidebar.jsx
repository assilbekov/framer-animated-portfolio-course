import { Links } from "./links/Links"
import "./sidebar.scss"
import { ToggleButton } from "./toogleButton/ToggleButton"

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="bg">
        <Links />
      </div>
      <ToggleButton />
    </div>
  )
}