import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'

const Footer = () => (
  <div>
    <span style={{fontSize:"12px"}}>Show: </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>
      All Players
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
      Active Players
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
      Past Players
    </FilterLink>
  </div>
)

export default Footer