import React ,{useState,useReducer}from "react"
import './App.css';
import Todo from "./Todo"
export const ACTIONS={
  ADD_TODO : "addtodo",
  TOOGLE_TODO :"toogletodo",
  DELETE_TODO : "deletetodo"
}

function reducer(todos,action){

  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos,newTodo(action.payload.name)]

      
    
      case ACTIONS.TOOGLE_TODO:
        return todos.map(todo=>{
          if(todo.id === action.payload.id)
          {
            return {...todo,complete:!todo.complete}
          }
          return todo
        })
       

        
      case ACTIONS.DELETE_TODO:
        return todos.filter(todo=> todo.id !==action.payload.id)
      

       
  
    default:
      return todos;
  }

}
function newTodo(name){

  return {id:Date.now(),name:name,complete:false}

}

function App() {

  const [todos, dispatch] = useReducer(reducer,[])
  const [name, setName] = useState('')

  const handlesubmit=(e)=>{
    e.preventDefault();
    dispatch({type:ACTIONS.ADD_TODO,payload:{name:name}})
    setName("")
  }
  
  return (
    <div className="App">
      <form onSubmit={handlesubmit}>
        <h1>Todo App</h1>
        <input
        type="text"
        onChange={(e)=>{
          setName(e.target.value);

        }}
        value={name}
        placeholder="Enter your todo here..."

        
        />

       



      </form>
      {todos.map((todo)=>{
          return(
            <Todo
            key={todo.id}
            todo={todo}
            dispatch={dispatch}
            
            />
          )

        })}
    
    </div>
  );
}

export default App;
