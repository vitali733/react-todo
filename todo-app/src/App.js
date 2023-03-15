import React, {useState, useEffect} from "react"
import './App.css';

function App() {


  //this will be our array for all the todo key:value pairs
  const [todoList, setToDoList] = useState([]);

 const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      todoName: e.target.children[0].value,
      done: false,
      id: "" + Math.floor(Math.random() * 90000)
    };

    setToDoList((prevState) => {
      return [...prevState, newTodo];
    });


 }


  return (

    <div className="App">
      <h1>todo-machine</h1>
   
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="add todo" />
        <input type="submit" />
      </form>

      <div>
        <ul>

        </ul>
      </div>
    </div>
  );
}

export default App;
