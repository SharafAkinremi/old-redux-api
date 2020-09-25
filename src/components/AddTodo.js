import React, { useState } from "react";
import { connect } from "react-redux";

import { addTodo } from "../redux/actions";

const AddTodo = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const handleTodo = () => {
    // dispatches actions to add todo
    addTodo(input);
    // sets state back to empty string
    setInput(" ");
  };

  const updateInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <input onChange={updateInput} value={input} />
      <button className="add-todo" onClick={handleTodo}>
        Add Todo
      </button>
    </div>
  );
};

export default connect(null, { addTodo })(AddTodo);
