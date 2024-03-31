import "./contact.scss"

export const Contact = () => {
  return (
    <div className="contact">
      <div className="textContainer">
        <h1>Let's work together</h1>
        <div className="item">
          <h2>Mail</h2>
          <span>hello@react.dev</span>
        </div>
        <div className="item">
          <h2>Address</h2>
          <span>Hello street New york</span>
        </div>
        <div className="item">
          <h2>Phone</h2>
          <span>+995 596 123 123</span>
        </div>
      </div>
      <div className="formContainer">
        <form>
          <input type="text" required placeholder="Your name" />
          <input type="email" required placeholder="Your email" />
          <textarea placeholder="Your message" rows={10} />
          <button>Send</button>
        </form>
      </div>
    </div>
  )
}