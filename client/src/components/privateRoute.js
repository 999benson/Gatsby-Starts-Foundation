import React, { useContext } from "react"
import { navigate } from "gatsby"
import { IdentityContext } from "../context/identity-context"
import PropTypes from "prop-types"

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const { user } = useContext(IdentityContext)
  console.log("location in PrivateRoute", location)
  // check if user is login, if not, navigate it to the default page
  if (!user && location.pathname !== "/app/login") {
    navigate("/app/login")
    return null
  }
  return <Component {...rest} />
}

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired,
  location: PropTypes.any,
}
export default PrivateRoute
