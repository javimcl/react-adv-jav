

import { ProductButtons, ProductCard, ProductoImage, ProductoTitle } from '../components/';
import { products } from '../data/products';
import { useShoppingCart } from '../hooks/useShoppingCart';
import '../styles/custom-styles.css'








export const ShoppingPage = () => {

    const {shoppingCart, onProductCountChange} = useShoppingCart();


    

    return (
        <div >
            <h1>ProductCard</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>

                {
                    products.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            className="bg-dark text-white"
                            onChange={(evento) => onProductCountChange(evento)}
                            value={shoppingCart[product.id]?.count || 0}
                        >
                            <ProductoImage className="custom-image" style={{
                                boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'
                            }} />
                            <ProductoTitle className=" text-bold" activeClass='active' />
                            <ProductButtons className="custom-buttons" />


                        </ProductCard>

                    ))
                }
            </div>
            <div className='shopping-cart'>

                {

                    Object.entries(shoppingCart).map(([key, product]) => (
                        <ProductCard
                            key={key}
                            product={product}
                            className="bg-dark text-white"
                            style={{ width: '100px' }}
                            onChange={onProductCountChange}
                            value={product.count} >
                            <ProductoImage
                                className="custom-image"
                                style={{
                                    boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'
                                }} />

                            <ProductButtons
                                className="custom-buttons"
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }} />
                        </ProductCard>
                    ))


                }
            </div>
        </div>
    )
}
