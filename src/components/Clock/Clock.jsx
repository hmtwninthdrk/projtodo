import React, { useState } from "react";
import s from "./Clock.module.css";
const Clock = (props) => {
  const [opt, setOpt] = useState();
  const [disabled, setDisabled] = useState(false);
  const clockCycle = (dayTime) => {
    console.log("inClockCycle");
    let hr = parseInt(dayTime.substr(0, 2));
    let mn = parseInt(dayTime.substr(3, 2));
    let sc = parseInt(dayTime.substr(6, 2));
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
    if (!disabled) {
      console.log("hi");
      setDisabled(true);
      console.log("Disabled change", disabled);
    }
    if (disabled) {
      setDisabled(false);
      props.setTime("00:00:00");
      console.log("Disabled change", disabled);
    }
  };
  const setTimeFromOpt = () => {
    console.log("inFromOpt");
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

  return (
    <div className={s.clockComponent}>
      <div className={s.circle}>
        <div className={s.time}>{props.time}</div>
      </div>
      <form className={`${s.form} ${disabled ? `${s.hide}` : ""}`} action="#">
        <select onChange={(e) => setOpt(e.target.value)}>
          <option value="1 Day">1 Day</option>
          <option value="2 Day">2 Day</option>
          <option value="3 Day">3 Day</option>
          <option value="4 Day">4 Day</option>
          <option value="5 Day">5 Day</option>
          <option value="6 Day">6 Day</option>
          <option value="7 Day">7 Day</option>
        </select>
        <button onClick={setTimeFromOpt}>Go!</button>
      </form>
      <form action="" className={disabled ? `${s.hide}` : ""}></form>
    </div>
  );
};

export default Clock;
