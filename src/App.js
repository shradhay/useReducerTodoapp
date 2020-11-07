import React ,{useState,useReducer}from "react"
import './App.css';
const ACTIONS={
  ADDTODO : "addtodo"
}

function reducer(state,action){

  switch (action.type) {
    case ACTIONS.ADDTODO:
      return [...todos,newTodo(name)]
      break;
  
    default:
      break;
  }

}

function App() {

  const [todos, dispatch] = useReducer(reducer,[])
  const [name, setName] = useState('')

  const handlesubmit=()=>{
    dispatch({type:ACTIONS.ADDTODO})
  }
  return (
    <div className="App">
      <form onSubmit={handlesubmit}>
        <input
        onChange={(e)=>{
          setName(e.target.value);

        }}
        value={todo}

        
        />



      </form>
    
    </div>
  );
}

export default App;
