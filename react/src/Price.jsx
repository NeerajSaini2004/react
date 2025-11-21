export default function Price({ oldprice, newprice }) {
    let oldstyles = {
        textDecorationLine: "line-through",
        color: "red",
        
    };
let newstyles={
    fontWeight:"bold",
    color:"green",
};

let styles={
    backgroundColor:"yellow",
    height:"30px",
    borderBottomLeftRadius:"14px",
    borderBottomRightRadius:"14px"
};
  return (
    <div style={styles}>
    <span style={oldstyles}> {oldprice}</span>
    &nbsp; 
    &nbsp;
    <span style={newstyles}> {newprice}</span>
    </div>
  );
}