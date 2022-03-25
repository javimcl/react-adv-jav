import { useContext } from "react";
import styles from '../styles/styles.module.css';
import noImage from "../assets/no-image.jpg";
import {  ProductContext } from "./ProductCard";

export const ProductoImage = ({ img = '' }) => {

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
        <img className={styles.productImg} src={imToShow} alt='Product ' />
    )

}

