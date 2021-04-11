import "./styles.css";
import React, { useState } from "react";
const youtubers = {
  Education: [{name:"Tanay Pratap",rating:9.5},{name:"Ali Abdaal", rating:8},{name:"Curious Harish", rating:8}],
  Technology: [{name:"Mrwhosetheboss",rating:9.5},{name: "MKBHD",rating:9}],
  Entertainment: [{name:"MrBeast",rating:8.5},{name: "Micset",rating:8},{name:"Parithabangal",rating:7}]
};

export default function App() {
  
  const [genre, setgenre] = useState("Education");

  var initArr = Object.keys(youtubers);

  function clickHandler(element) {
    setgenre(element);
  }

  return (
    <div className="App">
      <h1>My favourite YouTubers</h1>
      <div>
        {initArr.map((element) => (
          <button
            onClick={() => clickHandler(element)}
            style={{
              padding: "0.5rem  1rem",
              margin: "1rem 0.3rem",
              cursor: "pointer",
              border: "1px solid black",
              borderRadius: "0.5rem"
            }}
          >
            {element}
          </button>
        ))}
      </div>
      <hr />
      <div>
        <ul style={{paddingInlineStart:"0"}}>
          {youtubers[genre].map((element) => (
            <li
              style={{
                listStyle: "none",
                padding: "0.5rem 1rem",
                border: "1px solid black",
                borderRadius:"0.5rem",
                margin: "10px 0.3rem",
                maxWidth: "300px"
              }}
            >
              <h3>{element.name}</h3>
              <div>Rating:{element.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
