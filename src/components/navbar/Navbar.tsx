import React, {useState} from "react";

import './navbar.scss'

type Props = {
    filter:'kategorie' | 'oblibene' | 'doporucene'
    
}

export const Navbar = (props:Props) => {
    console.log(props)
 return(<nav className='navbar'>
<div className={props.filter === 'kategorie' ? 'nav_active nav_filter' : 'nav_filter' }>Kategorie</div>
<div className={props.filter === 'oblibene' ? 'nav_active nav_filter' : 'nav_filter' }>Oblíbené</div>
<div className={props.filter=== 'doporucene' ? 'nav_active nav_nav_filter' : 'nav_filter' }>Doporučené</div>
</nav>)}