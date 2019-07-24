import React from 'react'
import { NavBar } from './NavBar'

export default ({ children }) => (
    <>
        <NavBar color={'secondary'} />
        {children}
        <div>Little better than cheese</div>
    </>
)
