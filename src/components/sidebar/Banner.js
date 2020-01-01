import React from "react"
import "./sidebar.css"

import siteLogo from "../../images/logo.png"

const Banner = ({ author, tagline }) => {
  return (
    <div className="bio-main w-75">
      <img
        src={siteLogo}
        style={{ maxWidth: `200px` }}
        // className="profile-img"
        alt=""
      />
      <small className="text-light">{tagline}</small>
    </div>
  )
}

export default Banner
