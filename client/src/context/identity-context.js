import React, { createContext, useState, useEffect } from "react"
import netlifyIdentity from "netlify-identity-widget"
import PropTypes from "prop-types"

const IdentityContext = createContext()

const IdentityProvider = props => {
  const [user, setUser] = useState()
  useEffect(() => {
    netlifyIdentity.init({})
  }, [])
  netlifyIdentity.on("login", user => {
    netlifyIdentity.close()
    setUser(user)
  })
  netlifyIdentity.on("init", user => {
    setUser(user)
  })

  netlifyIdentity.on("logout", () => {
    netlifyIdentity.close()
    setUser()
  })

  return (
    <IdentityContext.Provider value={{ netlifyIdentity, user }}>
      {props.children}
    </IdentityContext.Provider>
  )
}

IdentityProvider.propTypes = {
  children: PropTypes.object.isRequired,
}
export { IdentityContext, IdentityProvider }
