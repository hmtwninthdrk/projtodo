import React from "react";
import luna from "../../icons/luna.png";
import TodoForm from "../TodoForm/TodoForm";
import s from "./Head.module.css";

const Header = (props) => {
  return (
    <div className={s.head}>
      <div className={s.textHead}>
        <p>TODO</p>
        <img src={luna} alt="" />
      </div>
      <TodoForm todo={props.todo} setTodo={props.setTodo} />
    </div>
  );
};

export default Header;
