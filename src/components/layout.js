import React from "react"

import Navigation from "./navbar"
import Footer from "./footer"
export default function Layout(props) {
  return (
    <div style={{ margin: `0 auto`, maxWidth: 1250, padding: `0 1rem` }}>
      <Navigation />
      {props.children}

    </div>
  )
}
