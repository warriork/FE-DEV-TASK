import React, { useState } from 'react'

import './navbar.scss'
type Filter = 'kategorie' | 'oblibene' | 'doporucene'
type Props = {
  filter: Filter
  setFilter: (arg: Filter) => void
}

export const Navbar = (props: Props) => {
  return (
    <nav className='navbar'>
      <div
        className={props.filter === 'kategorie' ? 'nav_active nav_filter' : 'nav_filter'}
        onClick={() => props.setFilter('kategorie')}
      >
        Kategorie
      </div>
      <div
        className={props.filter === 'oblibene' ? 'nav_active nav_filter' : 'nav_filter'}
        onClick={() => props.setFilter('oblibene')}
      >
        Oblíbené
      </div>
      <div
        className={props.filter === 'doporucene' ? 'nav_active nav_filter' : 'nav_filter'}
        onClick={() => props.setFilter('doporucene')}
      >
        Doporučené
      </div>
    </nav>
  )
}
