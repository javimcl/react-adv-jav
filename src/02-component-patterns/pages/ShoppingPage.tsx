

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
                className="bg-dark text-white"
                initialValues={{
                    count: 4,
                    maxCount: 10
                }}
            >

                {
                    ({reset, isMaxCountReached, count, increaseBy, maxCount}) => (
                        <>
                            <ProductoImage className="custom-image" style={{
                                boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'
                            }} />
                            <ProductoTitle className=" text-bold" activeClass='active' />
                            <ProductButtons className="custom-buttons" />

                            <button onClick={reset}> Reset</button>
                            <button onClick={() => increaseBy(-2)}>-2</button>
                            {
                                (!isMaxCountReached && <button onClick={() => increaseBy(2)}>+2</button>                            )
                            }
                            
                            
                            <span>{count} - {maxCount}</span>
                            

                        </>
                    )
                }

            </ProductCard>

        </div>
    )
}
