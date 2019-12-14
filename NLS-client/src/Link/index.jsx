import React from 'react'
import { Link as ReactRouterDomLink } from 'react-router-dom'

export default function Link({ children, to }) {
    return <li className="listItem">
        <ReactRouterDomLink to={to}>{children}</ReactRouterDomLink>
    </li>
}
