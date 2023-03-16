import React, {useState, useEffect} from "react"
import './App.css';

function App() {


  //this will be our array for all the todo key:value pairs
  const [todoList, setToDoList] = useState([]);
  const [completedTaskCount, setCompletedTaskCount] = useState(0);

  console.log(todoList)

  useEffect(() => {
    console.log("useEffect has been fired");
    const data = localStorage.getItem("todo-list");

    console.log(data);

    if (data) {
      setToDoList(JSON.parse(data));
    }
  }, []);

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

    e.target.children[0].value = "";

    localStorage.setItem(
      "todo-list",
      JSON.stringify([...todoList, newTodo])
    );
  };

  const handleComplete = (id) => {
      let list = todoList.map((task) => {
        let item= {};
        if (task.id === id){
          if (!task.done) {
            setCompletedTaskCount(completedTaskCount +1);
          } else {
            setCompletedTaskCount(completedTaskCount -1);
          }
          item = {...task, done: !task.done};
        } else item = {...task}
      });
      setToDoList(list)
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
        {todoList.map((element) => (
          <li
          onClick={() => handleComplete(element.id)}
           style={{
            listStyle:"none",
            textDecoration: element.done && "line-trhough"
          }
          }>
           {element.done.toString()} {element.todoName} ID: {element.id}
          </li>
        ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
