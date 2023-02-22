import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import s from "./TodoForm.module.css";

const TodoForm = ({ todo, setTodo }) => {
  const [value, setValue] = useState();
  const [opt, setOpt] = useState();

  function addItem() {
    if (value != "" && value != null && opt != undefined) {
      setTodo([
        ...todo,
        {
          id: uuidv4(),
          name: value,
          status: true,
          type: opt,
        },
      ]);
      setValue("");
    }
  }
  const handleKeyUp = (e) => {
    if (e.key === "Enter") addItem();
  };

  return (
    <div className={s.form}>
      <select defaultValue={"DEFAULT"} onChange={(e) => setOpt(e.target.value)}>
        <option value="DEFAULT" disabled>
          Option
        </option>
        <option value={"work"}>Work</option>
        <option value={"hobby"}>Hobby</option>
        <option value={"study"}>Study</option>
      </select>
      <label>Name</label>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyUp={(e) => handleKeyUp(e)}
      ></input>

      <button onClick={addItem}>Add List</button>
    </div>
  );
};

export default TodoForm;
