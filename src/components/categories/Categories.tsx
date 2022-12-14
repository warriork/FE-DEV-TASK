import './categories.scss'
import { useState } from 'react'
import React from 'react'

export const Categories = () => {
  const [isDisabled, setDisabled] = useState(false)
  return (
    <aside className={isDisabled ? 'categories categories-disabled' : 'categories'}>
      <div className='categories-heading-wrapper'>
        <h3>Kategorie</h3>
        <button className='arrow' onClick={() => setDisabled(!isDisabled)} />
      </div>
      <div className='return-back'>
        <button className='arrow-back' />
        <a className='link-return-back'>Všechny produkty</a>
      </div>
      <ul className='categories-list'>
        <li>
          <div className='category-name'>Sedací soupravy</div>
          <div className='category-name-amount'>820</div>
        </li>
        <li>
          <div className='category-name'>Obývací stěny</div>
          <div className='category-name-amount'>23</div>
        </li>
        <li>
          <div className='category-name'>Křesla</div>
          <div className='category-name-amount'>18</div>
        </li>
        <li>
          <div className='category-name'>Lenošky</div>
          <div className='category-name-amount'>31</div>
        </li>
        <li>
          <div className='category-name'>Postele</div>
          <div className='category-name-amount'>4</div>
        </li>
      </ul>
    </aside>
  )
}
