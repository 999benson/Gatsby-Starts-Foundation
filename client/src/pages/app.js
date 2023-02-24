import React from "react"
import { Router } from "@reach/router"
import PrivateRoute from "../components/privateRoute"
import Login from "../components/Login"
import Dashboard from "../components/Dashboard"

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
