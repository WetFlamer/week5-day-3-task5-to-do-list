import { useState } from "react";
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

  const deleteTodo = (indexRemoveItem) => {
    const filtered = todos.filter((todo, index) => {
      if (index === indexRemoveItem) {
        return false;
      }
      return true;
    });
    setTodos(filtered);
  };

  const newTodos = todos.map((todo, index) => {
    const todoClass = todo.completed ? "completed" : "list";

    return (
      <div className={todoClass}>
        <div>
          <input
            className="checkBox"
            type="checkBox"
            checked={todo.completed}
          />
        </div>
        <div className="list-text">{todo.text}</div>
        <button
          onClick={() => deleteTodo(index)}
          className="buttonDel"
        ></button>
      </div>
    );
  });
  return (
    <div className="App">
      <div className="title">Список дел</div>
      <hr />
      <div className="main">
        <input
          className="input"
          type="text"
          placeholder="Введите текст..."
        ></input>
        <button className="buttonAdd" placeholder="Введите текст...">
          Добавить
        </button>
      </div>
      <div className="list-1">{newTodos}</div>
    </div>
  );
}

export default App;
