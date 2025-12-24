import { Link } from "react-router-dom";
function ProductPage(){
const Products=[
{id:'p1', title:'product 1'},
{id:'p2', title:'product 2'},
{id:'p3', title:'product 3'}
]

return <>
<h1>This is the product page</h1>
<ul>
{Products.map((product)=>(
  <li><Link to={product.id}>{product.title}</Link></li>  
))}   
</ul>
</>


}

export default ProductPage;