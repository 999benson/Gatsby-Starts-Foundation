import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

import React from "react"
import { IdentityProvider } from "./src/context/identity-context"

/** This file lets you respond to Gatsby-specific events within the browser,
 * and wrap your page components in additional global components
 */
export const wrapRootElement = ({ element }) => {
  return <IdentityProvider>{element}</IdentityProvider>
}
