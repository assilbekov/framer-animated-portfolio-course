import "./toggleButton.scss"

export const ToggleButton = ({ setOpen }) => {
  return (
    <button onClick={() => setOpen(v => !v)}>
      Toogle button
    </button>
  )
}