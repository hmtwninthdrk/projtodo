import React, { useState } from "react";
import s from "./Clock.module.css";
const Clock = (props) => {
  const [opt, setOpt] = useState();

  const clockCycle = (dayTime) => {
    console.log("inClockCycle");
    let hr = parseInt(dayTime.slice(0, 2));
    console.log(props.time);

    let mn = parseInt(dayTime.slice(3, 2));
    let sc = parseInt(dayTime.slice(6, 2));
    if (hr > 0) {
      console.log(hr);
      if (mn == -1) {
        mn = 59;
        hr = hr - 1;
      }
      if (sc == 60) {
        mn = mn - 1;
        sc = 0;
      }
      sc++;
      let time = hr + ":" + mn + ":" + sc;

      props.setTime(time);
      console.log(props.time);
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
    clockCycle(dayTime);
  };

  return (
    <div className={s.clockComponent}>
      <div className={s.circle}>
        <div className={s.time}>{props.time}</div>
      </div>
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
    </div>
  );
};

export default Clock;
