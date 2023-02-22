import React, { useState } from "react";

const DoneBlock = (props) => {
  return (
    <div className="DoneBlock">
      {props.doneList.map((item) => (
        <div key={item.id} draggable="true">
          <div>{item.name}</div>
        </div>
      ))}
    </div>
  );
};

export default DoneBlock;
