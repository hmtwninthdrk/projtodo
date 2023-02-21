import { NavLink, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import su from "./SignUp.module.css";
const SignUp = () => {
  let Navig = useNavigate();
  const [password, setPassword] = useState();
  const [login, setLogin] = useState();
  const checkUser = (usersArray, existLogin, existPassword) => {
    for (let i = 0; i < usersArray.length; i++) {
      if (
        usersArray[i].login == existLogin &&
        usersArray[i].password == existPassword
      ) {
        return true;
      }
    }
    return false;
  };
  function clickButton(event) {
    let logInfo = JSON.parse(localStorage.getItem("logInfo"));
    if (login != "" && password != "") {
      if (logInfo) {
        if (checkUser(logInfo.users, login, password)) {
          alert("User Exist!!");
          Navig("/signIn");
        } else {
          logInfo.users.push({
            login: login,
            password: password,
            isAuth: false,
          });
          localStorage.setItem("logInfo", JSON.stringify(logInfo));
          Navig("/signIn");
        }
      } else {
        localStorage.setItem(
          "logInfo",
          JSON.stringify({
            users: [{ login: login, password: password, isAuth: false }],
          })
        );
        Navig("/sign-in");
      }
    } else {
      alert("Login or password is empty");
    }
  }

  return (
    <div className={su.form}>
      <input
        placeholder={"Имя пользователя"}
        onChange={(e) => setLogin(e.target.value)}
      />
      <input
        type="password"
        placeholder={"Пароль"}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className={su.signUpButton}
        onClick={(event) => clickButton(event)}
      >
        Регистрация
      </button>
      <p>
        Есть аккаунт?
        <NavLink
          to="/signIn"
          className={(navData) => (navData.isActive ? su.active : "")}
        >
          {" "}
          Войти
        </NavLink>
      </p>
    </div>
  );
};

export default SignUp;
