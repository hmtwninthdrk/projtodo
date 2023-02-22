import React, { useState } from "react";
import Block2 from "../Block2/block2";
import Clock from "../Clock/Clock";
import TodoForm from "../TodoForm/TodoForm";
import Header from "../TodoHeader/Header";
import ms from "./Main.module.css";
import { Navigate } from "react-router-dom";
import DoneBlock from "../DoneBlock/DoneBlock";
const Main = ({ todo, setTodo, doneList, setDoneList }) => {
  const [time, setTime] = useState("00:00:00");
  let logInfo = JSON.parse(localStorage.getItem("logInfo"));
  if (!logInfo) return <Navigate to="/signUp" />;
  return (
    <div className={ms.form}>
      <div className="container">
        <Header />
        <section className="main">
          <div className="left_side">
            <TodoForm todo={todo} setTodo={setTodo} />
          </div>
          <Block2 todo={todo} setTodo={setTodo} />
          <DoneBlock doneList={doneList} setDoneList={setDoneList} />
          <div className="right_side"></div>
        </section>
        <Clock time={time} setTime={setTime} />
      </div>
    </div>
  );
};

export default Main;
