import React, { useContext } from "react"
import { IdentityContext } from "../context/identity-context"
import { navigate } from "gatsby"

const Login = () => {
  const { netlifyIdentity } = useContext(IdentityContext)
  netlifyIdentity.on("login", user => {
    navigate("/app/dashboard")
  })
  return (
    <div>
      <h1>Login</h1>
      <bottom
        onClick={() => {
          netlifyIdentity.open()
        }}
      >
        Login
      </bottom>
    </div>
  )
}

export default Login
