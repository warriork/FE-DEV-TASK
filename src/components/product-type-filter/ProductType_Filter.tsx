import React from "react";
import './productType_filter.scss'
import {productTypes} from './productTypes'

type Product = {
    img: string
    name: string
}

export const ProductType_Filter = () => (
    <div className="overflow-container">
 <div className="product-filter-wrapper"> {
    productTypes.map((product: Product, ind: number)=>(
    <div className="product-filter-option" key={ind}>
        <img src={product.img} alt={product.name} />
        <h3>{product.name}</h3>
    </div>))
    }
    </div> 
    </div>)