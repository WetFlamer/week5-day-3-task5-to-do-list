import React from 'react';

function Todo(props) {
    return (
        <div className={props.todoClass}>
        <div>
          <input
            className="checkBox"
            type="checkBox"
            checked={props.todo.completed}
            onChange={() => props.changeCompleted(props.index)}
          />
        </div>
        <div className="list-text">{props.todo.text}</div>
        <button
          onClick={() => props.deleteTodo(props.index)}
          className="buttonDel"
        ></button>
      </div>
    );
}

export default Todo;