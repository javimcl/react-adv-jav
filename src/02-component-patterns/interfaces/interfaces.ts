import { ReactElement } from "react";
import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ProductTitleProps } from "../components/ProductTitle";
import { Props as ProductImageProps } from "../components/ProductImages";
import { Props as ProductButtonsProps } from "../components/ProductButtons";
import { NumericLiteral } from "typescript";


export interface Product {
    id: string;
    title: string;
    img?: string
}

export interface ProductContextProps {
    counter: number;
    product: Product;
    maxCount?: number
    increaseBy: (value: number) => void;
    
}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): JSX.Element,
    Title: (Props: ProductTitleProps) => JSX.Element,
    Image: (Props: ProductImageProps) => JSX.Element,
    Buttons: (Props: ProductButtonsProps) => JSX.Element

}

export interface onCahngeArgs {
    product: Product;
    count: number;
}

export interface ProductInCart extends Product {
    count: number
}


export interface InitialValues {

    count?: number
    maxCount?:number

}

export interface ProductCardHandlers {
    count: number;
    isMaxCountReached: boolean;
    maxCount?: number;
    product: Product;

    increaseBy: (value: number) => void;
    reset: () => void;

}