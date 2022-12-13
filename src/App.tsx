import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'
import { Btn_close } from './components/Btn_close/Btn_close'
import { Navbar } from './components/navbar/Navbar'





export const App = () => {
    const [filter, setFilter] = useState('kategorie' as 'kategorie' | 'oblibene' | 'doporucene')

    return (
<div className='wrapper'>
<Btn_close/>
<Navbar filter={filter}/>
</div>
    )
}