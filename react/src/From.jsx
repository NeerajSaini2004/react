function handleFromSubmit(event){
    event.preventDefault();
    console.log("form was submitted")
}

export default function From() {
    return (
      <form onSubmit={handleFromSubmit}>
        <input type="text" />
        <button type="submit">Submit</button>
      </form>
    );
  }