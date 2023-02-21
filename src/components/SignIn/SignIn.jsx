import { NavLink, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import si from "./SignIn.module.css";
function SignIn({ setIsAuth }) {
  let logInfo = JSON.parse(localStorage.getItem("logInfo"));
  const [password, setPassword] = useState();
  const [login, setLogin] = useState();
  let Navig = useNavigate();
  const checkUser = (usersArray, existLogin, existPassword) => {
    for (let i = 0; i < usersArray.length; i++) {
      if (
        usersArray[i].login == existLogin &&
        usersArray[i].password == existPassword
      ) {
        usersArray[i].isAuth = true;
        logInfo.users[i] = {
          login: existLogin,
          password: existPassword,
          isAuth: true,
        };
        localStorage.setItem("logInfo", JSON.stringify(logInfo));
        setIsAuth(true);
        return true;
      }
    }
    return false;
  };

  const clickButton = () => {
    if (logInfo) {
      if (checkUser(logInfo.users, login, password)) {
        alert("Welcome " + login);
        Navig("/");
      } else alert("Incorrect password or User does not exist");
    } else {
      alert("Incorrect password or User does not exist");
    }
  };

  return (
    <div className={si.SignIn}>
      <input
        placeholder={"Имя пользователя или эл. адрес"}
        onChange={(e) => setLogin(e.target.value)}
      />
      <input
        type="password"
        placeholder={"Пароль"}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className={si.signInButton} onClick={clickButton}>
        Войти
      </button>
      <p>
        У вас нет аккаунта?
        <NavLink
          to="/signUp"
          className={(navData) => (navData.isActive ? si.active : "")}
        >
          {" "}
          Зарегистрируйтесь
        </NavLink>
      </p>
    </div>
  );
}

export default SignIn;
