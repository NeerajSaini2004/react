import Product from "./product";

function productTab() {
  // let options = ["neeraj", "saini", "goodloking"];
  // let obj = { company: "neeraj", product: "saini", quality: "goodloking" };

  let styles={ 
    display: "flex", 
    flexWrap: "wrap" ,
  justifyContent: "center",
alignItems: "center",};
 
  return (
  <div style={styles}>
    
    <Product  title="Bike"  idx={0} />
    <Product title="Car"  idx={1}/>
    <Product  title="Money" idx={2} />
    <Product  title="Sucess" idx={3} />
    
  </div>
  );
}
export default productTab;