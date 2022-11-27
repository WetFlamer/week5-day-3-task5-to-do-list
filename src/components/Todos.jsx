import React from "react";
import Todo from "./Todo";

function Todos(props) {
  return (
    <div className="list-1">
      {props.todos.map((todo, index) => {
        const todoClass = todo.completed ? "completed" : "list";

        return <Todo key={index} changeCompleted={props.changeCompleted} deleteTodo={props.deleteTodo} todo={todo} index={index} todoClass={todoClass} />;
      })}
    </div>
  );
}

export default Todos;
