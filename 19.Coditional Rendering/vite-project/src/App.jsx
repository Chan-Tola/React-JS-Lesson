const App = () => {
  // ternary operator
  //syntax
  //{ condition ? expression: exporession }
  const uploading = true;
  return (
    <>
    <h1>{ uploading ? <Loading  /> : "This is false" }</h1>
    </>
  )
}
const Loading = ()=> {
  return <span>Files are loading...!</span>;
}


export default App
