import React from "react";

function Main(props) {
  return (
    <div className="main">
      <input
        className="input"
        type="text"
        placeholder="Введите текст..."
        value={props.text}
        onChange={(e) => props.setText(e.target.value)}
      ></input>
      <button
        onClick={props.addTodo}
        className="buttonAdd"
        placeholder="Введите текст..."
      >
        Добавить
      </button>
    </div>
  );
}

export default Main;
