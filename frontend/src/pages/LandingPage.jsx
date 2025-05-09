import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
export default function LandingPage() {
  const router = useNavigate();
  return (
    <div className="landingPageContainer">
      <nav>
        <div className="navHeader"><h2>MeetSync</h2></div>
        <div className="navList">
          <p onClick={() => {
                        router("/aljk23")}}>Join as Guest</p>
          <p>Register</p>
          <div role="button" onClick={()=>{router('/auth')}}>
            <p>Login</p>
          </div>
        </div>
      </nav>

      <div className="landingMainContainer">
        <div>
          <h1><span style={{ color: "#ff9839" }}>Connect</span> with your loved Ones</h1>
          <p>cover a distance by MeetSync</p>
          <div role="button">

            <Link to={"/auth"}>Get Start</Link>
          </div>
        </div>
        <div>
          <img src="/mobile.png" alt="" />
        </div>

      </div>
    </div>
  )
}
