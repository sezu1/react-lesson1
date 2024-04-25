
import './App.css';


function Header() {
        return (
            <>
                <h1>This is Header</h1>
                <Title/>
            </>
        )
}



function Content(){
    return(
        <>
            <h1>This is Content</h1>
            <Title/>
        </>
    )
}

const Title = ()=>{
    return (
        <h4>This is title</h4>
    )
}

function Footer(){
  return (
      <>
        <h2>This is Footer</h2>
        <Title/>
      </>
  )


}


function App() {
  return (
    <div className="App">
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
