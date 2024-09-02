import React from 'react'

const page = () => {
  return (
    <div className="containerOuter">
    <h1 className="fira-sans-semibold">Access Denied</h1>
    <br />
    <p className="fira-sans-regular">Insufficient permissions.</p>
    <br />
    <p className="fira-sans-light"><code>403 Forbidden</code></p>
    <br />
    <p className="fira-sans-light"><a href="./index.html" className="aSelected">Head back to root?</a></p>
  </div>
  )
}

export default page