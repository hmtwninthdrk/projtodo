import React, { useState } from "react";
import s from "./Clock.module.css";
import startTime from "../icons/startTime.png";
const Clock = (props) => {
  const [opt, setOpt] = useState();
  const [disabled, setDisabled] = useState(false);
  const clockCycle = (dayTime) => {
    const isNumeric = (n) => !!Number(n);
    let mn, sc;
    let flag = true;
    let hr = dayTime.substr(0, 3);
    if (isNumeric(hr)) flag = true;
    else flag = false;
    if (flag) {
      hr = parseInt(dayTime.substr(0, 3));
      mn = parseInt(dayTime.substr(4, 2));
      sc = parseInt(dayTime.substr(7, 2));
    } else {
      hr = parseInt(dayTime.substr(0, 2));
      mn = parseInt(dayTime.substr(3, 2));
      sc = parseInt(dayTime.substr(6, 2));
    }

    // if (hr > 0) {
    //   if (sc === 0) {
    //     mn--;
    //     sc = 59;
    //   }
    //   if (mn === 0) {
    //     hr--;
    //     sc = 59;
    //     mn = 59;
    //   }

    //   sc--;
    //   let time = hr + ":" + mn + ":" + sc;
    //   props.setTime(time);
    //   if (!disabled) setTimeout(clockCycle, 1000, time);
    let timerId = setInterval(() => {
      if (hr > 0) {
        // if (mn == -1) {
        //   mn = 59;
        //   hr = hr - 1;
        // }
        // if (sc == 60) {
        //   mn = mn - 1;
        //   sc = 0;
        // }
        if (sc === 0) {
          mn--;
          sc = 59;
        }
        if (mn === 0) {
          hr--;
          sc = 59;
          mn = 59;
        }
        sc--;
        let time = hr + ":" + mn + ":" + sc;

        props.setTime(time);
      }
    }, 1000);
  };

  const toggleForm = () => {
    if (opt != null) {
      if (!disabled) {
        setDisabled(true);
      }
      if (disabled) {
        setDisabled(false);
        props.setTime("00:00:00");
      }
    }
  };
  const setTimeFromOpt = () => {
    let dayTime;
    switch (opt) {
      case "1 Day":
        dayTime = "23:59:00";
        props.setTime(dayTime);
        break;
      case "2 Day":
        dayTime = "47:59:00";
        props.setTime(dayTime);
        break;
      case "3 Day":
        dayTime = "71:59:00";
        props.setTime(dayTime);
        break;
      case "4 Day":
        dayTime = "95:59:00";
        props.setTime(dayTime);
        break;
      case "5 Day":
        dayTime = "119:59:00";
        props.setTime(dayTime);
        break;
      case "6 Day":
        dayTime = "143:59:00";
        props.setTime(dayTime);
        break;
      case "7 Day":
        dayTime = "168:59:00";
        props.setTime(dayTime);
        break;
    }
    toggleForm();
    clockCycle(dayTime);
  };

  function white_mode() {
    props.setWmode(true);
  }

  props.setWmode(false);

  return (
    <div onClick={white_mode} className={s.clockComponent}>
      <div className={s.circle}>
        <div className={s.time}>{props.time}</div>
        <form className={`${s.form} ${disabled ? `${s.hide}` : ""}`} action="#">
          <select
            defaultValue={"DEFAULT"}
            onChange={(e) => setOpt(e.target.value)}
          >
            <option value="DEFAULT" disabled>
              Days
            </option>
            <option value="1 Day">1 Day</option>
            <option value="2 Day">2 Day</option>
            <option value="3 Day">3 Day</option>
            <option value="4 Day">4 Day</option>
            <option value="5 Day">5 Day</option>
            <option value="6 Day">6 Day</option>
            <option value="7 Day">7 Day</option>
          </select>
          <div className={s.startTime} onClick={setTimeFromOpt}>
            <img src={startTime} alt="" />
          </div>
        </form>
      </div>

      <form action="" className={disabled ? `${s.hide}` : ""}></form>
    </div>
  );
};

export default Clock;
