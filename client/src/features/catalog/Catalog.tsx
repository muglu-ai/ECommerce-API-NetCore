import Button from "@mui/material/Button/Button";
import {Product} from "../../app/models/products.ts";
import ProductList from "./ProductList.tsx";
interface Props{
    products:Product[];
    addProduct: () => void;
    
}
export default function Catalog({products,addProduct}:Props){
    
    return(
        <>
        <ProductList products={products}  addProduct={addProduct}/>
        <Button variant='contained' onClick={addProduct}> Add Product </Button>
        </>
    )}