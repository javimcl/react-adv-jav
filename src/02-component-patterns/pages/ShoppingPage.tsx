import React from 'react'
import { ProductButtons, ProductCard, ProductoImage, ProductoTitle } from '../components/ProductCard';


const product = {

    id:'1',
    title: 'Coffeee Mug- card',
    img: './coffee-mug.png'

}

export const ShoppingPage = () => {
    return (
        <div> <h1>ProductCard</h1>
            <hr />
            <div style={{
                display:'flex',
                flexDirection:'row',
                flexWrap: 'wrap'
            }}>

            </div>
            <ProductCard product={product}>
               <ProductCard.Image/>
               <ProductCard.Title title={'Cafee'}/>
               <ProductButtons />


            </ProductCard>

            <ProductCard product={product}>
               <ProductoImage/>
               <ProductoTitle />
               <ProductButtons />


            </ProductCard>
            
        </div>
    )
}
