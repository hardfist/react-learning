import React from 'react'
import FilterLink from './FilterLink'
const Footer = () => (
    <p>
        <FilterLink filter="SHOW_ALL">ALL</FilterLink>,
        <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>,
        <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
    </p>
)
export default Footer;