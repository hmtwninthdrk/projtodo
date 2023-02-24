import React, { useState } from "react";
import arrow from "../../icons/arrow.png";
import arrowclose from "../../icons/arrowclose.png";
import book from "../../icons/book.png";
import edit from "../../icons/edit.png";
import deletebtn from "../../icons/delete.png";
import buy from "../../icons/buy.png";
import work from "../../icons/work.png";
import notdone from "../../icons/notdone.svg";
import done from "../../icons/done.svg";
import hobby from "../../icons/hobby.png";
import other from "../../icons/other.png";

import s from "./TodoList.module.css";

const TodoList = (props) => {
  const [arrows, setArrows] = useState(true);
  function goSearch() {
    props.setSearch({ ...props.search, flag: true });
  }
  function workbtn() {
    setArrows(!arrows);

    let buy = document.querySelector(".buy_block");
    let acc = document.getElementsByClassName("acc");
    let content = document.getElementsByClassName("content");
    let hobby = document.querySelector(".hb_block");
    let study = document.querySelector(".st_block");
    let other = document.querySelector(".or_block");
    acc[0].addEventListener("click", workbtn);

    for (let i = 0; i < acc.length; i++) {
      content[0].classList.add("active");
      hobby.classList.add("active");
      study.classList.add("active");
      other.classList.add("active");
      buy.classList.add("active");
    }
  }

  function wclose() {
    setArrows(!arrows);
    let buy = document.querySelector(".buy_block");
    let accclose = document.getElementsByClassName("accclose");
    let content = document.getElementsByClassName("content");
    let hobby = document.querySelector(".hb_block");
    let study = document.querySelector(".st_block");
    let other = document.querySelector(".or_block");
    accclose[0].addEventListener("click", wclose);

    for (let i = 0; i < accclose.length; i++) {
      content[0].classList.remove("active");
      hobby.classList.remove("active");
      study.classList.remove("active");
      other.classList.remove("active");
      buy.classList.remove("active");
    }
  }

  function hobbybtn() {
    setArrows(!arrows);
    let buy = document.querySelector(".buy_block");
    let acc = document.getElementsByClassName("acc");
    let content = document.getElementsByClassName("content");
    let work = document.querySelector(".wr_block");
    let study = document.querySelector(".st_block");
    let other = document.querySelector(".or_block");
    acc[1].addEventListener("click", hobbybtn);
    for (let i = 0; i < acc.length; i++) {
      content[1].classList.add("active");
      work.classList.add("active");
      study.classList.add("active");
      other.classList.add("active");
      buy.classList.add("active");
    }
  }

  function hclose() {
    setArrows(!arrows);
    let buy = document.querySelector(".buy_block");
    let accclose = document.getElementsByClassName("accclose");
    let content = document.getElementsByClassName("content");
    let work = document.querySelector(".wr_block");
    let study = document.querySelector(".st_block");
    let other = document.querySelector(".or_block");
    accclose[1].addEventListener("click", hclose);
    for (let i = 0; i < accclose.length; i++) {
      content[1].classList.remove("active");
      work.classList.remove("active");
      study.classList.remove("active");
      other.classList.remove("active");
      buy.classList.remove("active");
    }
  }

  function studybtn() {
    setArrows(!arrows);
    let buy = document.querySelector(".buy_block");
    let acc = document.getElementsByClassName("acc");
    let content = document.getElementsByClassName("content");
    let work = document.querySelector(".wr_block");
    let hobby = document.querySelector(".hb_block");
    let other = document.querySelector(".or_block");
    acc[2].addEventListener("click", studybtn);
    for (let i = 0; i < acc.length; i++) {
      content[2].classList.add("active");
      work.classList.add("active");
      hobby.classList.add("active");
      other.classList.add("active");
      buy.classList.add("active");
    }
  }

  function sclose() {
    setArrows(!arrows);
    let buy = document.querySelector(".buy_block");
    let accclose = document.getElementsByClassName("accclose");
    let content = document.getElementsByClassName("content");
    let work = document.querySelector(".wr_block");
    let hobby = document.querySelector(".hb_block");
    let other = document.querySelector(".or_block");
    accclose[2].addEventListener("click", sclose);
    for (let i = 0; i < accclose.length; i++) {
      content[2].classList.remove("active");
      work.classList.remove("active");
      hobby.classList.remove("active");
      other.classList.remove("active");
      buy.classList.remove("active");
    }
  }

  function buybtn() {
    setArrows(!arrows);
    let acc = document.getElementsByClassName("acc");
    let content = document.getElementsByClassName("content");
    let work = document.querySelector(".wr_block");
    let hobby = document.querySelector(".hb_block");
    let study = document.querySelector(".st_block");
    let other = document.querySelector(".or_block");
    acc[3].addEventListener("click", buybtn);
    for (let i = 0; i < acc.length; i++) {
      content[3].classList.add("active");
      work.classList.add("active");
      hobby.classList.add("active");
      study.classList.add("active");
      other.classList.add("active");
    }
  }

  function bclose() {
    setArrows(!arrows);
    let accclose = document.getElementsByClassName("accclose");
    let content = document.getElementsByClassName("content");
    let work = document.querySelector(".wr_block");
    let hobby = document.querySelector(".hb_block");
    let study = document.querySelector(".st_block");
    let other = document.querySelector(".or_block");
    accclose[3].addEventListener("click", bclose);
    for (let i = 0; i < accclose.length; i++) {
      content[3].classList.remove("active");
      work.classList.remove("active");
      hobby.classList.remove("active");
      study.classList.remove("active");
      other.classList.remove("active");
    }
  }

  function otherbtn() {
    setArrows(!arrows);
    let acc = document.getElementsByClassName("acc");
    let content = document.getElementsByClassName("content");
    let work = document.querySelector(".wr_block");
    let hobby = document.querySelector(".hb_block");
    let study = document.querySelector(".st_block");
    let buy = document.querySelector(".buy_block");
    acc[4].addEventListener("click", otherbtn);
    for (let i = 0; i < acc.length; i++) {
      content[4].classList.add("active");
      work.classList.add("active");
      hobby.classList.add("active");
      study.classList.add("active");
      buy.classList.add("active");
    }
  }

  function oclose() {
    setArrows(!arrows);
    let accclose = document.getElementsByClassName("accclose");
    let content = document.getElementsByClassName("content");
    let work = document.querySelector(".wr_block");
    let hobby = document.querySelector(".hb_block");
    let study = document.querySelector(".st_block");
    let buy = document.querySelector(".buy_block");
    accclose[4].addEventListener("click", oclose);
    for (let i = 0; i < accclose.length; i++) {
      content[4].classList.remove("active");
      work.classList.remove("active");
      hobby.classList.remove("active");
      study.classList.remove("active");
      buy.classList.remove("active");
    }
  }

  function deleteItem(id) {
    let newlist = [...props.todo].filter((item) => item.id != id);
    props.setTodo(newlist);
  }

  const [change, setChange] = useState(null);
  const [value, setValue] = useState();

  function editItem(id, name) {
    setChange(id);
    setValue(name);
  }

  function saveChanges(id) {
    let newList = [...props.todo].map((item) => {
      if (item.id == id) {
        item.name = value;
      }
      return item;
    });
    props.setTodo(newList);
    setChange(null);
  }

  function statusTodo(id) {
    let newTodo = [...props.todo].filter((item) => {
      if (item.id == id) {
        item.status = !item.status;
      }
      return item;
    });
    props.setTodo(newTodo);
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

  const handleKeyUp = (e, itemId) => {
    if (e.key === "Enter") saveChanges(itemId);
  };
  return (
    <div className={s.TodoList}>
      <div className={s.todoListContent}>
        <div className={props.search.flag ? s.disable : ""}>
          <div className="scroll_block">
            <div className="wr_block">
              <div className={s.itemType}>
                <div className={s.leftItemType}>
                  <img src={work} alt="" />
                  Work
                </div>
                {arrows ? (
                  <img onClick={workbtn} className="acc" src={arrow}></img>
                ) : (
                  <img
                    onClick={wclose}
                    className="accclose"
                    src={arrowclose}
                  ></img>
                )}
              </div>
            </div>

            <div className="content">
              <ul className="ul">
                {props.todo.map((item) =>
                  item.type === "work" ? (
                    <div className={s.w_done}>
                      <li
                        className={!item.status ? s.close : s.item}
                        key={item.id}
                      >
                        <div
                          className={s.notdone}
                          onClick={() => statusTodo(item.id)}
                        >
                          {item.status ? (
                            <img src={notdone}></img>
                          ) : (
                            <img src={done}></img>
                          )}
                        </div>
                        {change == item.id ? (
                          <input
                            onKeyUp={(e) => handleKeyUp(e, item.id)}
                            className={s.inp_edit}
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                          />
                        ) : (
                          <div>{item.name}</div>
                        )}
                      </li>

                      {change == item.id ? (
                        <div
                          className={s.save_text}
                          onClick={() => saveChanges(item.id)}
                        >
                          Save
                        </div>
                      ) : (
                        <>
                          <img
                            onClick={() => editItem(item.id, item.name)}
                            className={s.edit_item}
                            src={edit}
                          ></img>
                          <img
                            onClick={() => deleteItem(item.id)}
                            className={s.delete_item}
                            src={deletebtn}
                          ></img>
                        </>
                      )}
                    </div>
                  ) : (
                    ""
                  )
                )}
              </ul>
            </div>
          </div>

          <div className="scroll_block">
            <div className="hb_block">
              <div className={s.itemType}>
                <div className={s.leftItemType}>
                  <img src={hobby} alt="" />
                  Hobby
                </div>
                {arrows ? (
                  <img onClick={hobbybtn} className="acc" src={arrow}></img>
                ) : (
                  <img
                    onClick={hclose}
                    className="accclose"
                    src={arrowclose}
                  ></img>
                )}
              </div>
            </div>

            <div className="content">
              <ul className="ul">
                {props.todo.map((item) =>
                  item.type === "hobby" ? (
                    <div className={s.w_done}>
                      <li
                        className={!item.status ? s.close : s.item}
                        key={item.id}
                      >
                        <div
                          className={s.notdone}
                          onClick={() => statusTodo(item.id)}
                        >
                          {item.status ? (
                            <img src={notdone}></img>
                          ) : (
                            <img src={done}></img>
                          )}
                        </div>
                        {change == item.id ? (
                          <input
                            onKeyUp={(e) => handleKeyUp(e, item.id)}
                            className={s.inp_edit}
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                          />
                        ) : (
                          <div>{item.name}</div>
                        )}
                      </li>

                      {change == item.id ? (
                        <div
                          className={s.save_text}
                          onClick={() => saveChanges(item.id)}
                        >
                          Save
                        </div>
                      ) : (
                        <>
                          <img
                            onClick={() => editItem(item.id, item.name)}
                            className={s.edit_item}
                            src={edit}
                          ></img>
                          <img
                            onClick={() => deleteItem(item.id)}
                            className={s.delete_item}
                            src={deletebtn}
                          ></img>
                        </>
                      )}
                    </div>
                  ) : (
                    ""
                  )
                )}
              </ul>
            </div>
          </div>

          <div className="scroll_block">
            <div className="st_block">
              <div className={s.itemType}>
                <div className={s.leftItemType}>
                  <img src={book} alt="" />
                  Study
                </div>

                {arrows ? (
                  <img onClick={studybtn} className="acc" src={arrow}></img>
                ) : (
                  <img
                    onClick={sclose}
                    className="accclose"
                    src={arrowclose}
                  ></img>
                )}
              </div>
            </div>
            <div className="content">
              <ul className="ul">
                {props.todo.map((item) =>
                  item.type === "study" ? (
                    <div className={s.w_done}>
                      <li
                        className={!item.status ? s.close : s.item}
                        key={item.id}
                      >
                        <div
                          className={s.notdone}
                          onClick={() => statusTodo(item.id)}
                        >
                          {item.status ? (
                            <img src={notdone}></img>
                          ) : (
                            <img src={done}></img>
                          )}
                        </div>
                        {change == item.id ? (
                          <input
                            onKeyUp={(e) => handleKeyUp(e, item.id)}
                            className={s.inp_edit}
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                          />
                        ) : (
                          <div>{item.name}</div>
                        )}
                      </li>
                      {change == item.id ? (
                        <div
                          className={s.save_text}
                          onClick={() => saveChanges(item.id)}
                        >
                          Save
                        </div>
                      ) : (
                        <>
                          <img
                            onClick={() => editItem(item.id, item.name)}
                            className={s.edit_item}
                            src={edit}
                          ></img>
                          <img
                            onClick={() => deleteItem(item.id)}
                            className={s.delete_item}
                            src={deletebtn}
                          ></img>
                        </>
                      )}
                    </div>
                  ) : (
                    ""
                  )
                )}
              </ul>
            </div>
          </div>

          <div className="scroll_block">
            <div className="buy_block">
              <div className={s.itemType}>
                <div className={s.leftItemType}>
                  <img src={buy} alt="" />
                  Buy
                </div>
                {arrows ? (
                  <img onClick={buybtn} className="acc" src={arrow}></img>
                ) : (
                  <img
                    onClick={bclose}
                    className="accclose"
                    src={arrowclose}
                  ></img>
                )}
              </div>
            </div>

            <div className="content">
              <ul className="ul">
                {props.todo.map((item) =>
                  item.type === "buy" ? (
                    <div className={s.w_done}>
                      <li
                        className={!item.status ? s.close : s.item}
                        key={item.id}
                      >
                        <div
                          className={s.notdone}
                          onClick={() => statusTodo(item.id)}
                        >
                          {item.status ? (
                            <img src={notdone}></img>
                          ) : (
                            <img src={done}></img>
                          )}
                        </div>
                        {change == item.id ? (
                          <input
                            onKeyUp={(e) => handleKeyUp(e, item.id)}
                            className={s.inp_edit}
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                          />
                        ) : (
                          <div>{item.name}</div>
                        )}
                      </li>
                      {change == item.id ? (
                        <div
                          className={s.save_text}
                          onClick={() => saveChanges(item.id)}
                        >
                          Save
                        </div>
                      ) : (
                        <>
                          <img
                            onClick={() => editItem(item.id, item.name)}
                            className={s.edit_item}
                            src={edit}
                          ></img>
                          <img
                            onClick={() => deleteItem(item.id)}
                            className={s.delete_item}
                            src={deletebtn}
                          ></img>
                        </>
                      )}
                    </div>
                  ) : (
                    ""
                  )
                )}
              </ul>
            </div>
          </div>

          <div className="scroll_block">
            <div className="or_block">
              <div className={s.itemType}>
                <div className={s.leftItemType}>
                  <img src={other} alt="" />
                  Other
                </div>
                {arrows ? (
                  <img onClick={otherbtn} className="acc" src={arrow}></img>
                ) : (
                  <img
                    onClick={oclose}
                    className="accclose"
                    src={arrowclose}
                  ></img>
                )}
              </div>
            </div>

            <div className="content">
              <ul className="ul">
                {props.todo.map((item) =>
                  item.type === "other" ? (
                    <div className={s.w_done}>
                      <li
                        className={!item.status ? s.close : s.item}
                        key={item.id}
                      >
                        <div
                          className={s.notdone}
                          onClick={() => statusTodo(item.id)}
                        >
                          {item.status ? (
                            <img src={notdone}></img>
                          ) : (
                            <img src={done}></img>
                          )}
                        </div>
                        {change == item.id ? (
                          <input
                            onKeyUp={(e) => handleKeyUp(e, item.id)}
                            className={s.inp_edit}
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                          />
                        ) : (
                          <div>{item.name}</div>
                        )}
                      </li>
                      {change == item.id ? (
                        <div
                          className={s.save_text}
                          onClick={() => saveChanges(item.id)}
                        >
                          Save
                        </div>
                      ) : (
                        <>
                          <img
                            onClick={() => editItem(item.id, item.name)}
                            className={s.edit_item}
                            src={edit}
                          ></img>
                          <img
                            onClick={() => deleteItem(item.id)}
                            className={s.delete_item}
                            src={deletebtn}
                          ></img>
                        </>
                      )}
                    </div>
                  ) : (
                    ""
                  )
                )}
              </ul>
            </div>
          </div>
        </div>

        <div
          className={`${s.searchBlock} ${props.search.flag ? "" : s.disable}`}
        >
          <div className="content active">
            <ul className="ul">
              {props.todo.map((item) =>
                item.name.includes(props.search.text) ? (
                  <div className={s.w_done}>
                    <li
                      className={!item.status ? s.close : s.item}
                      key={item.id}
                    >
                      <div
                        className={s.notdone}
                        onClick={() => statusTodo(item.id)}
                      >
                        {item.status ? (
                          <img src={notdone}></img>
                        ) : (
                          <img src={done}></img>
                        )}
                      </div>
                      {change == item.id ? (
                        <input
                          onKeyUp={(e) => handleKeyUp(e, item.id)}
                          className={s.inp_edit}
                          value={value}
                          onChange={(e) => setValue(e.target.value)}
                        />
                      ) : (
                        <div>{item.name}</div>
                      )}
                    </li>

                    {change == item.id ? (
                      <div
                        className={s.save_text}
                        onClick={() => saveChanges(item.id)}
                      >
                        Save
                      </div>
                    ) : (
                      <>
                        <img
                          onClick={() => editItem(item.id, item.name)}
                          className={s.edit_item}
                          src={edit}
                        ></img>
                        <img
                          onClick={() => deleteItem(item.id)}
                          className={s.delete_item}
                          src={deletebtn}
                        ></img>
                      </>
                    )}
                  </div>
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
            <button onClick={goSearch}>Search</button>
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
