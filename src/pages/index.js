import React from "react"
import { Link } from "gatsby"

export default function Home() {
  return <div>


    <h1>Choose your trip</h1>

    <Link to="/SanFrancisco">West coast</Link>
    <Link to="/NewYork">East coast</Link>

  </div>
}
