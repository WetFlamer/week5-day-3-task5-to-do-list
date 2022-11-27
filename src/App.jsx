import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Todos from "./components/Todos";
import "./styles.css";

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Купить бананы",
      completed: false,
    },
    {
      text: "Продать квартиру",
      completed: true,
    },
    {
      text: "Выучить уроки по JavaScript",
      completed: false,
    },
  ]);
  const [text, setText] = useState("");

  const deleteTodo = (indexRemoveItem) => {
    const filtered = todos.filter((todo, index) => {
      if (index === indexRemoveItem) {
        return false;
      }
      return true;
    });
    setTodos(filtered);
  };

  const changeCompleted = (i) => {
    setTodos(
      todos.map((item, index) => {
        if (i === index) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  const addTodo = () => {
    setTodos([{
      text: text,
      completed: false
    }, ...todos,] )
    setText('')
  }

  return (
    <div className="App">
     <Header />
      <Main  text={text} setText={setText} addTodo={addTodo}/>
  <Todos todos={todos} changeCompleted={changeCompleted} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
