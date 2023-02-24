import React, { useContext } from "react"
import { Router } from "@reach/router"
import PrivateRoute from "../../components/privateRoute"
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
const Dashboard = () => <h1>Dashboard</h1>
const Default = () => <h1>Main App</h1>

const App = () => {
  return (
    <Router basepath="/app">
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <Login path="/login" />
      <Default path="/" />
    </Router>
  )
}

export default App
