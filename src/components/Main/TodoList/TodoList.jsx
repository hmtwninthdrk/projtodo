import React, { useState } from "react";
import arrow from "../../icons/arrow.png";
import s from "./TodoList.module.css";
const TodoList = (props) => {
  console.log(props.todo);

  function workbtn() {
    let buy = document.querySelector(".buy_block");
    let acc = document.getElementsByClassName("acc");
    let content = document.getElementsByClassName("content");
    let hobby = document.querySelector(".hb_block");
    let study = document.querySelector(".st_block");
    let other = document.querySelector(".or_block");
    for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        content[i].classList.toggle("active");
        hobby.classList.toggle("active");
        study.classList.toggle("active");
        other.classList.toggle("active");
        buy.classList.toggle("active");
      });
    }
  }

  function hobbybtn() {
    let buy = document.querySelector(".buy_block");
    let acc = document.getElementsByClassName("acc");
    let content = document.getElementsByClassName("content");
    let work = document.querySelector(".wr_block");
    let study = document.querySelector(".st_block");
    let other = document.querySelector(".or_block");
    for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        content[i].classList.toggle("active");
        work.classList.toggle("active");
        study.classList.toggle("active");
        other.classList.toggle("active");
        buy.classList.toggle("active");
      });
    }
  }

  function studybtn() {
    let buy = document.querySelector(".buy_block");
    let acc = document.getElementsByClassName("acc");
    let content = document.getElementsByClassName("content");
    let work = document.querySelector(".wr_block");
    let hobby = document.querySelector(".hb_block");
    let other = document.querySelector(".or_block");
    for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        content[i].classList.toggle("active");
        work.classList.toggle("active");
        hobby.classList.toggle("active");
        other.classList.toggle("active");
        buy.classList.toggle("active");
      });
    }
  }

  function buybtn() {
    let acc = document.getElementsByClassName("acc");
    let content = document.getElementsByClassName("content");
    let work = document.querySelector(".wr_block");
    let hobby = document.querySelector(".hb_block");
    let study = document.querySelector(".st_block");
    let other = document.querySelector(".or_block");
    for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        content[i].classList.toggle("active");
        work.classList.toggle("active");
        hobby.classList.toggle("active");
        study.classList.toggle("active");
        other.classList.toggle("active");
      });
    }
  }

  function otherbtn() {
    let acc = document.getElementsByClassName("acc");
    let content = document.getElementsByClassName("content");
    let work = document.querySelector(".wr_block");
    let hobby = document.querySelector(".hb_block");
    let study = document.querySelector(".st_block");
    let buy = document.querySelector(".buy_block");
    for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        content[i].classList.toggle("active");
        work.classList.toggle("active");
        hobby.classList.toggle("active");
        study.classList.toggle("active");
        buy.classList.toggle("active");
      });
    }
  }

  const [sortState, setSortState] = useState("none");
  function sorting(sortState) {
    if (sortState == "ascending") {
      const arr = [...props.todo].sort(function (a, b) {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        // a должно быть равным b
        return 0;
      });
      props.setTodo(arr);
    }
    if (sortState == "descending") {
      const arr = [...props.todo].sort(function (a, b) {
        if (a.name > b.name) {
          return -1;
        }
        if (a.name < b.name) {
          return 1;
        }
        // a должно быть равным b
        return 0;
      });
      props.setTodo(arr);
    }
  }

  return (
    <div className={s.TodoList}>
      <div className={s.todoListContent}>
        <div className="scroll_block">
          <div className="wr_block">
            <div onClick={workbtn} className={s.itemType}>
              Work
              <img className="acc" src={arrow}></img>
            </div>
          </div>

          <div className="content">
            <ul className="ul">
              {props.todo.map((item) =>
                item.type === "work" ? (
                  <li className={s.item} key={item.id}>
                    {item.name}
                  </li>
                ) : (
                  ""
                )
              )}
            </ul>
          </div>
        </div>

        <div className="scroll_block">
          <div className="hb_block">
            <div onClick={hobbybtn} className={s.itemType}>
              Hobby
              <img className="acc" src={arrow}></img>
            </div>
          </div>

          <div className="content">
            <ul className="ul">
              {props.todo.map((item) =>
                item.type === "hobby" ? (
                  <li className={s.item} key={item.id}>
                    {item.name}
                  </li>
                ) : (
                  ""
                )
              )}
            </ul>
          </div>
        </div>

        <div className="scroll_block">
          <div className="st_block">
            <div onClick={studybtn} className={s.itemType}>
              Study
              <img className="acc" src={arrow}></img>
            </div>
          </div>
          <div className="content">
            <ul className="ul">
              {props.todo.map((item) =>
                item.type === "study" ? (
                  <li className={s.item} key={item.id}>
                    {item.name}
                  </li>
                ) : (
                  ""
                )
              )}
            </ul>
          </div>
        </div>

        <div className="scroll_block">
          <div className="buy_block">
            <div onClick={buybtn} className={s.itemType}>
              Buy
              <img className="acc" src={arrow}></img>
            </div>
          </div>

          <div className="content">
            <ul className="ul">
              {props.todo.map((item) =>
                item.type === "buy" ? (
                  <li className={s.item} key={item.id}>
                    {item.name}
                  </li>
                ) : (
                  ""
                )
              )}
            </ul>
          </div>
        </div>

        <div className="scroll_block">
          <div className="or_block">
            <div onClick={otherbtn} className={s.itemType}>
              Other
              <img className="acc" src={arrow}></img>
            </div>
          </div>

          <div className="content">
            <ul className="ul">
              {props.todo.map((item) =>
                item.type === "other" ? (
                  <li className={s.item} key={item.id}>
                    {item.name}
                  </li>
                ) : (
                  ""
                )
              )}
            </ul>
          </div>
        </div>

        <div className={s.footerList}>
          <p>{props.todo.length} items left</p>
          <div className={s.footerListButtons}>
            <select
              defaultValue={"DEFAULT"}
              onChange={(e) => setSortState(e.target.value)}
            >
              <option value="DEFAULT" disabled>
                Choose sorting
              </option>
              <option value="ascending">Ascending</option>
              <option value="descending">Descending</option>
            </select>
            <button onClick={(e) => sorting(sortState)}>Sort</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
