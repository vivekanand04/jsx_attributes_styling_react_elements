import React from "react";
import ReactDOM from "react-dom";
const img = "https://picsum.photos/200/300";
ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <ul>
      <li>Bacon</li>
      <li>Noodles</li>
      <li>Jamon</li>
    </ul>
    <img src={img}></img>
  </div>,
  document.getElementById("root")
);
//jsx me class ke jagah classname likha jata hai,
//to make text editable add contentEditble="true"to get <h1 className="heading" contentEditble="true">My Favourite Foods</h1>  if you write false or write className in not in camel form then cant edit
//its a new way to get photo that is   <img src={img}></img>
