import './App.css'

function App() {

  return (
    <>
      <div>
       <p>Hello World</p>
      </div>
      <div>
        <p>Welcome to my movie project</p>
      </div>
      <Welcome/>
      <DynamicProps display={"Whats up?"}/>
    </>
  )
}

function Welcome() {
  return(
    <div>
      Welcome to my website.
    </div>
  )
}

function DynamicProps({display}) {
  return(
    <div>{display}</div>
  )
}

export default App
