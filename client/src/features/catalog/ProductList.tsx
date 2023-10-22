import {Product} from "../../app/models/products.ts";
import {List} from "@mui/material";
import ProductCard from "./ProductCard.tsx";
interface Props{
    products: Product[];
}
export default function ProductList({products} : Props){
    return(
        <List>
        {products.map((product)=>(
            <ProductCard product={product}/>
        ))}
        </List>
    )
}