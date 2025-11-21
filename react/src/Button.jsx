function printhello() {
    console.log("Hello ");
  }

  function handleClick(event) {
    console.log("Paragraph clicked!");
    console.log(event);
  }
  function handleover() {
    console.log("Paragraph click by hover");
  }


export default function Button() {
    return (
        <div> 
            <button onClick={printhello}>Click Me!</button>
            <p onClick={handleClick}>Click the button above. Check the console!</p>
            <p onMouseOver={handleover}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo molestiae eum voluptate nostrum quasi laboriosam accusamus dignissimos vitae, delectus blanditiis nesciunt aperiam excepturi amet impedit. Nemo, expedita. Natus, obcaecati assumenda!</p>
            
        </div>
      
    );
  }