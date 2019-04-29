import React from "react"

class Contact extends React.Component {
  constructor(props) {
    super()

    this.state = {
      active: false,
      copyMessage: "",
    }
  }

  handleClick = e => {
    e.target.firstChild.select()
    document.execCommand("copy")
    this.setState({ active: true, copyMessage: "Email copied to clipboard" })
    this.removeClass()
  }

  removeClass = () => {
    window.setTimeout(() => {
      this.setState({ active: false })
    }, 3500)
  }

  render() {
    return (
      <div className="contact-btn-wrapper">
        <button onClick={this.handleClick}>
          <input
            style={{
              top: "-1rem",
              cursor: "default",
              height: 0,
              opacity: 0.01,
              position: "absolute",
            }}
            defaultValue="fta@charlietango.dk"
          />
          Contact
        </button>
        {this.state.copyMessage && (
          <p className={this.state.active ? "copied-msg active" : "copied-msg"}>
            {this.state.copyMessage}
          </p>
        )}
      </div>
    )
  }
}

export default Contact
