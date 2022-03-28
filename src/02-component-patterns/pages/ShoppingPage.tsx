
import { ProductButtons, ProductCard, ProductoImage, ProductoTitle } from '../components/';
import '../styles/custom-styles.css'

const product = {

    id: '1',
    title: 'Coffeee Mug- card',
    img: './coffee-mug.png'

}

export const ShoppingPage = () => {
    return (
        <div className='bg-dark'>
            <h1>ProductCard</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>

            </div>
            <ProductCard product={product}
                className="bg-dark text-white">
                <ProductCard.Image className="custom-image" />
                <ProductCard.Title className=" text-bold" title={'Cafee'} activeClass='active' />
                <ProductCard.Buttons className="custom-buttons" />


            </ProductCard>

            <ProductCard product={product}
                className="bg-dark text-white">               
                <ProductoImage className="custom-image" style={{
                    boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'
                }}/>
                <ProductoTitle className=" text-bold" activeClass='active' />
                <ProductButtons className="custom-buttons" />


            </ProductCard>
            <ProductCard product={product}
                className="bg-dark text-white"
                style={{
                    backgroundColor: '#70D1F8'
                }}>
                <ProductoImage style={{
                    boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'
                }}  />
                <ProductoTitle style={{
                    fontWeight: 'bold'
                }}  />
                <ProductButtons style={{
                    display: 'flex',
                    justifyContent: 'end'
                }} />


            </ProductCard>

        </div>
    )
}
