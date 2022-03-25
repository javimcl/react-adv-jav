import { ProductCardHOCProps } from "../interfaces/interfaces";
import { ProductButtons } from "./ProductButtons";
import { ProductCard as ProductCardHOC } from "./ProductCard";
import { ProductoImage } from "./ProductImages";
import { ProductoTitle } from "./ProductTitle";
export { ProductButtons } from "./ProductButtons";
//export  { ProductCard } from "./ProductCard";
export { ProductoImage } from "./ProductImages";
export { ProductoTitle } from "./ProductTitle";


export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
    Title: ProductoTitle,
    Image: ProductoImage,
    Buttons: ProductButtons

})

export default ProductCard;