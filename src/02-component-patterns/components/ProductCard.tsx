import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { createContext, useContext } from 'react';
import { ProductCardProps, ProductContextProps } from '../interfaces/interfaces';



export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;





interface ProductButtonsProps {
    increaseBy: (value: number) => void
    counter: number;
}


export const ProductCard = ({ children, product }: ProductCardProps) => {

    const { counter, increaseBy } = useProduct();

    return (
        <Provider value={{

            counter,
            increaseBy,
            product
        }}>
            <div className={styles.productCard}>
                {children}
                {/* <ProductoImage img={product.img} />

            <ProductoTitle title={product.title} />

            <ProductButtons counter={counter} increaseBy={increaseBy} /> */}




            </div>
        </Provider>
    )
}


ProductCard.Title = ProductoTitle
ProductCard.Image = ProductoImage
ProductCard.Button = ProductButtons