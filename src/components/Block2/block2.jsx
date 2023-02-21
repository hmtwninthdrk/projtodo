import React from "react";
import arrow from "../icons/arrow.png"
const Block2 = (props) => {
  console.log(props.todo);

  function workbtn(){
    
    let acc = document.getElementsByClassName("acc");
    let content = document.getElementsByClassName("content");
    let hobby = document.querySelector('.hb_block');
    let study = document.querySelector('.st_block');


    for(let i = 0; i<acc.length;i++){
      acc[i].addEventListener('click', function(){
        
        content[i].classList.toggle('active')
        hobby.classList.toggle('active')
        study.classList.toggle('active')
        
      })
    }

  }

  function hobbybtn(){
    let acc = document.getElementsByClassName("acc");
    let content = document.getElementsByClassName("content");
    let work = document.querySelector('.wr_block');
    let study = document.querySelector('.st_block');


    for(let i = 0; i<acc.length;i++){
      acc[i].addEventListener('click', function(){
        
        content[i].classList.toggle('active')
        work.classList.toggle('active')
        study.classList.toggle('active')
        
      })
    }
  }

  function studybtn(){
    let acc = document.getElementsByClassName("acc");
    let content = document.getElementsByClassName("content");
    let work = document.querySelector('.wr_block');
    let hobby = document.querySelector('.hb_block');


    for(let i = 0; i<acc.length;i++){
      acc[i].addEventListener('click', function(){
        
        content[i].classList.toggle('active')
        work.classList.toggle('active')
        hobby.classList.toggle('active')
        
      })
    }
  }




  return (
    <div className="block2">
      <div>Process</div>

     <div className="scroll_block">
     <div className="wr_block">
     <div className="work">Work</div>
      <img onClick={workbtn} className="acc" src={arrow}></img>
     </div>
      
     
      <div  className="content">
      {props.todo.map((item) =>
        item.type === "work" ? (
          <div key={item.id}>
            <div>{item.name}</div>
          </div>
        ) : (
          ""
        )
      )}
      </div>
     
      </div>
    

     
      <div className="scroll_block">
      <div className="hb_block">
      <div className="hobby">Hobby</div>
      <img onClick={hobbybtn} className="acc" src={arrow}></img>
      </div>
    
      <div className="content">

      {props.todo.map((item) =>
        item.type === "hobby" ? (
          <div key={item.id}>
            <div>{item.name}</div>
          </div>
        ) : (
          ""
        )
      )}
     
      </div>
      </div>
     
     
     
     <div className="scroll_block">
     <div className="st_block">
     <div className="etc">Study</div>
      <img onClick={studybtn} className="acc" src={arrow}></img>
     </div>
     <div className="content" >
     {props.todo.map((item) =>
        item.type === "study" ? (
          <div  key={item.id}>
            <div>{item.name}</div>
          </div>
        ) : (
          ""
        )
      )}
     </div>
        
     </div>
  
      
    </div>
  );
};

export default Block2;
