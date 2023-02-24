import React, { useContext } from "react"
import { IdentityContext } from "../context/identity-context"

const Dashboard = () => {
  const { user } = useContext(IdentityContext)
  return (
    <div>
      <h1>Dashboard</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  )
}

export default Dashboard
