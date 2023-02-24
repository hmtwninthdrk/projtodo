import React, { useEffect, useState } from "react";
import Clock from "../Clock/Clock";
import demon from "../icons/demon1.png";
import Header from "./TodoHeader/Header";
import ms from "./Main.module.css";
import { Navigate } from "react-router-dom";
import TodoList from "./TodoList/TodoList";

const Main = ({ todo, setTodo, search, setSearch }) => {
  const [time, setTime] = useState("00:00:00");
  let logInfo = JSON.parse(localStorage.getItem("logInfo"));
  if (!logInfo) return <Navigate to="/signUp" />;
  return (
    <div className={ms.main}>
      <Header
        todo={todo}
        setTodo={setTodo}
        search={search}
        setSearch={setSearch}
      />
      <div className="container">
        <TodoList
          todo={todo}
          setTodo={setTodo}
          search={search}
          setSearch={setSearch}
        />
        <div className={ms.shadowBlock}>
          <img src={demon} alt="" />
        </div>

        <Clock time={time} setTime={setTime} />
      </div>
    </div>
  );
};

export default Main;
