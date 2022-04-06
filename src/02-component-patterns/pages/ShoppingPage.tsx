

import { ProductButtons, ProductCard, ProductoImage, ProductoTitle } from '../components/';
import { products } from '../data/products';

import '../styles/custom-styles.css'




const product = products[0];



export const ShoppingPage = () => {






    return (
        <div >
            <h1>ProductCard</h1>
            <hr />

            <ProductCard
                key={product.id}
                product={product}
                
                initialValues={{
                    count: 4,
                    maxCount: 10
                }}
            >

                {
                    ({reset, isMaxCountReached, count, increaseBy, maxCount}) => (
                        <>
                            <ProductoImage />
                            <ProductoTitle  />
                            <ProductButtons />

                           
                            

                        </>
                    )
                }

            </ProductCard>

        </div>
    )
}
