import './App.css'
import '../../lit-3/src/my-element';




function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <my-element onClick={(e)=>{
      console.log(e);
     console.log(e.target);
    }}>
      Hello Slot
    </my-element>
    </>
  )
}

export default App
