import React, { useState } from "react";
import Block2 from "../Block2/block2";
import Clock from "../Clock/Clock";
import TodoForm from "../TodoForm/TodoForm";
import Header from "../TodoHeader/Header";
import ms from "./Main.module.css";
const Main = ({ todo, setTodo }) => {
  const [time, setTime] = useState("00:00:00");

  return (
    <div className={ms.form}>
      <div className="container">
        <Header />
        <section className="main">
          <div className="left_side">
            <TodoForm todo={todo} setTodo={setTodo} />
          </div>
          <Block2 todo={todo} setTodo={setTodo} />
          <div className="right_side"></div>
        </section>
        <Clock time={time} setTime={setTime} />
      </div>
    </div>
  );
};

export default Main;
