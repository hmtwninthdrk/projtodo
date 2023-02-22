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
      <div className={s.cycleForInput}></div>
      <input
        value={value}
        placeholder="Create a new todo"
        onChange={(e) => setValue(e.target.value)}
        onKeyUp={(e) => handleKeyUp(e)}
      ></input>
      <div className={s.buttons}>
        <select
          defaultValue={"DEFAULT"}
          onChange={(e) => setOpt(e.target.value)}
        >
          <option value="DEFAULT" disabled>
            Option
          </option>
          <option value={"work"}>Work</option>
          <option value={"hobby"}>Hobby</option>
          <option value={"study"}>Study</option>
          <option value={"buy"}>Buy</option>
          <option value={"other"}>Other</option>
        </select>
        <button onClick={addItem}>Add List</button>
      </div>
    </div>
  );
};

export default TodoForm;
