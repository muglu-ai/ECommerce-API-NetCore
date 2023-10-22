import {Avatar, List, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import {Product} from "../../app/models/products.ts";

interface Props{
    product: Product;
}
export default function ProductCard({product}: Props){
    return(
        <List>
                <ListItem key={product.id}>
                    <ListItemAvatar>
                        <Avatar src={product.pictureUrl}/>
                    </ListItemAvatar>
                    <ListItemText>{product.name} - {product.price}</ListItemText>
                </ListItem>
        </List>
    )
}