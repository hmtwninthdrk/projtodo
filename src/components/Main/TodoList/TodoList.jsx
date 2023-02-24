import React, { useState } from "react";
import arrow from "../../icons/arrow.png";
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


  function deleteItem(id) {
    let newlist = [...props.todo].filter((item) => item.id != id);
    props.setTodo(newlist);
  }

  const [change, setChange] = useState(null);
  const [value,setValue] = useState()


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

  return (
    <div className={s.TodoList}>
      <div className={s.todoListContent}>
        <div className="scroll_block">
          <div className="wr_block">
            <div onClick={workbtn} className={s.itemType}>
              <div className={s.leftItemType}>
                <img src={work} alt="" />
                Work
              </div>
              <img className="acc" src={arrow}></img>
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
            
              <input className={s.inp_edit} value={value} onChange={(e) => setValue(e.target.value)} />
           
          ) : (
            <div>{item.name}</div>
          )}
           </li>
                    
          {change == item.id ? (
            
              <div className={s.save_text} onClick={() => saveChanges(item.id)}>
                Save
              </div>
            
          ) : (
            <>
                    <img onClick={() => editItem(item.id, item.name)} className={s.edit_item} src={edit}></img>
                    <img onClick={() => deleteItem(item.id)} className={s.delete_item} src={deletebtn}></img>
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
            <div onClick={hobbybtn} className={s.itemType}>
              <div className={s.leftItemType}>
                <img src={hobby} alt="" />
                Hobby
              </div>
              <img className="acc" src={arrow}></img>
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
            
            <input className={s.inp_edit} value={value} onChange={(e) => setValue(e.target.value)} />
         
        ) : (
          <div>{item.name}</div>
        )}

                    </li>

                    
                    {change == item.id ? (
            
              <div className={s.save_text} onClick={() => saveChanges(item.id)}>
                Save
              </div>
            
          ) : (
            <>
                    <img onClick={() => editItem(item.id, item.name)} className={s.edit_item} src={edit}></img>
                    <img onClick={() => deleteItem(item.id)} className={s.delete_item} src={deletebtn}></img>
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
            <div onClick={studybtn} className={s.itemType}>
              <div className={s.leftItemType}>
                <img src={book} alt="" />
                Study
              </div>

              <img className="acc" src={arrow}></img>
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
            
            <input className={s.inp_edit} value={value} onChange={(e) => setValue(e.target.value)} />
         
        ) : (
          <div>{item.name}</div>
        )}
                    </li>
                    {change == item.id ? (
            
            <div className={s.save_text} onClick={() => saveChanges(item.id)}>
              Save
            </div>
          
        ) : (
          <>
                  <img onClick={() => editItem(item.id, item.name)} className={s.edit_item} src={edit}></img>
                  <img onClick={() => deleteItem(item.id)} className={s.delete_item} src={deletebtn}></img>
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
            <div onClick={buybtn} className={s.itemType}>
              <div className={s.leftItemType}>
                <img src={buy} alt="" />
                Buy
              </div>
              <img className="acc" src={arrow}></img>
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
            
            <input className={s.inp_edit} value={value} onChange={(e) => setValue(e.target.value)} />
         
        ) : (
          <div>{item.name}</div>
        )}
                    </li>
                    {change == item.id ? (
            
            <div className={s.save_text} onClick={() => saveChanges(item.id)}>
              Save
            </div>
          
        ) : (
          <>
                  <img onClick={() => editItem(item.id, item.name)} className={s.edit_item} src={edit}></img>
                  <img onClick={() => deleteItem(item.id)} className={s.delete_item} src={deletebtn}></img>
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
            <div onClick={otherbtn} className={s.itemType}>
              <div className={s.leftItemType}>
                <img src={other} alt="" />
                Other
              </div>
              <img className="acc" src={arrow}></img>
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
            
            <input className={s.inp_edit} value={value} onChange={(e) => setValue(e.target.value)} />
         
        ) : (
          <div>{item.name}</div>
        )}
                    </li>
                    {change == item.id ? (
            
            <div className={s.save_text} onClick={() => saveChanges(item.id)}>
              Save
            </div>
          
        ) : (
          <>
                  <img onClick={() => editItem(item.id, item.name)} className={s.edit_item} src={edit}></img>
                  <img onClick={() => deleteItem(item.id)} className={s.delete_item} src={deletebtn}></img>
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
