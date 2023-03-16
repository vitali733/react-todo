import React, {useState, useEffect} from "react"
import './App.css';

function App() {

const [todoList, setTodoList] = useState([]);

const handleSubmit = (e) => {
      console.log("executing handlesubmit")
      e.preventDefault();

      const newTodo = {
        todoName: e.target.children[0].value,
        done: false,
        id: "" + Math.floor(Math.random() * 90000)
      };

      //because of asynchronous behaviour of useState a new variable 
      //with up-to-date value of usestate is been created and passed to localstorage
      const updatedTodoList =[newTodo, ...todoList]
      setTodoList(updatedTodoList)

      localStorage.setItem("stringifiedTodoList",JSON.stringify(updatedTodoList))
}
  

useEffect(() => {
  console.log("firing useEffect []")
  const data = JSON.parse(localStorage.getItem("stringifiedTodoList"));

    if(data){
      setTodoList(data)
    }
  }, []);
  
//----------------------

  return (

    <div className="App">
      <h1>todo-machine</h1>
   
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="add todo" />
        <input type="submit" />
      </form>

      <div>
        <ul>
          {todoList.map(e => (
            <li key={e.id}>
              <span>{e.todoName}</span><span> {e.done ? "true" : "false"}</span><span> {e.id}</span>
            </li>
          )
          )}

        </ul>
      </div>
    </div>
  );
}

export default App;
