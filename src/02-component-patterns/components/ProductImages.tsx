import { useContext } from "react";
import styles from '../styles/styles.module.css';
import noImage from "../assets/no-image.jpg";
import {  ProductContext } from "./ProductCard";


export interface Props {
    img?: string;
    
    className?: string;
    style?: React.CSSProperties

}

export const ProductoImage = ({ img = '', className, style }: Props) => {

    const { product } = useContext(ProductContext);
    let imToShow: string;
    if (img) {
        imToShow = img;
    } else if (product.img) {
        imToShow = product.img
    } else {
        imToShow = noImage
    }
    return (
        <img className={`${styles.productImg} ${className}`} src={imToShow} alt='Product '
        style={style} />
    )

}

