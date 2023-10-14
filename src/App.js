import logo from './logo.svg';
import './App.css';
import { useDispatch,useSelector } from 'react-redux';
import { increment,decrement,reset } from './Redux/Actions';

function App() {

  const dispatch=useDispatch();
  const Selector=useSelector((state)=>state.count)


  return (
    <div className="App">
     {/* <Parent/> */}
     <h1>{Selector}</h1>
    
    <button onClick={()=>dispatch(increment())}>Increment</button>

    <button onClick={()=>dispatch(decrement())}>Decrement</button>
    <button onClick={()=>dispatch(reset())}>Reset</button>
    

    </div>
  );
}

export default App;
