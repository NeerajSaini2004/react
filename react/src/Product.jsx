//importing css file
import "./Product.css";

import Price from "./Price";


function Product({title, idx }) { //destructuring props with default value

  // const list=qulity.map((qulityItem)=> <li>{qulityItem}</li>);
  // let styles={backgroundColor:"yellow"}
   let oldprice=["29999","39999","0","0"];
  let newprice=["24999","34999","1","1"];
  let Description=["This is a nice bike","This is a good  color car ","This is a money","This is a good success"];
  return (
    //defining the structure of product component
    //using the title prop passed from parent component

  <div className="Product" >
    {/* <h2>{title}</h2>                         
    <p>This is the product component.</p> */}
    {/* <p>Qulity: {qulity}</p> */}
    {/* <p>Company: {obj.company}</p> */}

    {/* <p>{qulity.map((qulityItem)=> <li>{qulityItem}</li>)}</p>    //direct mapping without storing in list variable */}



    <h4>{title}</h4>
    <p>{Description[idx]}</p>
    <Price oldprice={oldprice[idx]} newprice={newprice[idx]}/>
    
    
  </div>
  );
}
export default Product;