import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import s from "./TodoForm.module.css";

const TodoForm = ({ todo, setTodo, search, setSearch }) => {
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

  function back() {
    setSearch({ ...search, flag: false });
    setValue("");
  }

  function changeTextInSearch(value) {
    setValue(value);
    setSearch({ ...search, text: value });
  }

  return (
    <div className={s.form}>
      <div className={search.flag ? s.disable : ""}>
        <div className={`${s.cycleForInput}`}></div>
        <div className={s.wrapper_input}>
          <input
            value={value}
            placeholder="Create a new todo"
            onChange={(e) => setValue(e.target.value)}
            onKeyUp={(e) => handleKeyUp(e)}
          ></input>
        </div>

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

      <div className={search.flag ? "" : s.disable}>
        <div className={`${s.cycleForInput}`}></div>
        <div className={s.wrapper_input}>
          <input
            className={s.searchInput}
            value={value}
            placeholder="Searching"
            onChange={(e) => changeTextInSearch(e.target.value)}
          ></input>
        </div>

        <div className={s.buttons}>
          <button onClick={back}>Back</button>
        </div>
      </div>
    </div>
  );
};

export default TodoForm;
