import React from "react"
import { Router } from "@reach/router"
import PrivateRoute from "../../components/private-route"
import Login from "./Login"

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
