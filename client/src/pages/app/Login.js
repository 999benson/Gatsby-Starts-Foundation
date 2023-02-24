import React, { useContext } from "react"
import { IdentityContext } from "../../context/identity-context"

const Login = () => {
  const { netlifyIdentity } = useContext(IdentityContext)
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
