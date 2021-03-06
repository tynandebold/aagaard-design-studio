import React, { useState, useEffect } from "react"

const Loading = props => {
  const [text, setText] = useState(props.text)
  let interval

  useEffect(() => {
    const stopper = props.text + "..."
    interval = window.setInterval(() => {
      text === stopper
        ? setText(props.text)
        : setText(prevText => prevText + ".")
    }, props.interval)

    if (props.interval === 0) {
      window.clearInterval(interval)
    }

    return function cleanup() {
      window.clearInterval(interval)
    }
  })

  return <h4 className={`preloader ${props.class}`}>{text}</h4>
}

export default Loading
