import {useEffect, useState} from "react";
import {Product} from "../models/products.ts";
import Catalog from "../../features/catalog/Catalog.tsx";
import {Typography} from "@mui/material";
function App() {
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        fetch('http://localhost:5186/api/Products')
            .then(response=>response.json())
            .then(data => setProducts(data))
    },[]);
    function addProducts(){
        setProducts(prevState => [...prevState,
            {
                id : prevState.length+101,
                name:'product' + (prevState.length+1), 
                price: (prevState.length*100)+100,
                description: 'SOme Description',
                brand: 'Gucci',
                pictureUrl: 'http://picsnum.photos/200',
            }])
    }
  return (
    <div>
    <Typography variant='h1'>AmazeStore</Typography>
        <Catalog products={products} addProduct ={addProducts} />
        
    </div>
  )
}

export default App
