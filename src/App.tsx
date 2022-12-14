import { Btn_close } from './components/Btn_close/Btn_close'
import { Categories } from './components/categories/Categories'
import { Navbar } from './components/navbar/Navbar'
import { ProductType_Filter } from './components/product-type-filter/ProductType_Filter'
import { products } from './components/products'
import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

export const App = () => {
  const [filter, setFilter] = useState('kategorie' as 'kategorie' | 'oblibene' | 'doporucene')

  return (
    <div className='wrapper'>
      <Btn_close />
      <Navbar filter={filter} setFilter={setFilter} />
      <div className='flex-wrapper'>
        <Categories />
        <main className='main'>
          <h1 className='h1'>Nábytek</h1>
          <ProductType_Filter />
          <div className='products'>
            {products
              .filter(product => (filter === 'kategorie' ? product : product.category === filter))
              .map(product => (
                <div className='product' key={product.id}>
                  <div className='product-img-wrapper'>
                    <img src={product.img} alt={product.name} />
                  </div>
                  <p className='product-avaliability'>
                    {product.isAvaliable ? 'Skladem' : 'neni skladem'}
                  </p>
                  <p className='product-description'>
                    {product.description.length < 25
                      ? product.description
                      : product.description.slice(0, 25) + '...'}
                  </p>
                  <p className='product-price'>{product.cena}</p>
                  <button className='product-add-button'>Do studia</button>
                </div>
              ))}
          </div>
        </main>
      </div>
    </div>
  )
}
