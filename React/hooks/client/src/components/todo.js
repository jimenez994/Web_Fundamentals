import React, { useState } from "react";

const Todo = props => {
  const [todoName, setTodoName] = useState("");
    // first value is the current State and the second value is a function we can call to update the state
  const [todoList, setTodoList] = useState([]);

  const inputChangeHandler = event => {
    setTodoName(event.target.value)
  };

  const todoAddHandler = () => {
    setTodoList(todoList.concat(todoName))
    setTodoName("")
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Todo"
        onChange={inputChangeHandler}
        value={todoName}
      />
      <button onClick={todoAddHandler}>Submit</button>
      <p>{todoList.map(todo => <p key={todo}>{todo}</p>)}</p>
    </div>
  );
};

export default Todo;
