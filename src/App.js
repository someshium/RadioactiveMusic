import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var sanskrit = [
    { name: "Ayigiri Nandini", rating: "5/5" },
    { name: "Rudrashtakam", rating: "4.5/5" },
    { name: "KaalBhairavashtakam", rating: "4.5/5" }
  ];
  var rap = [
    { name: "raat jashan di ft YO YO Honey Singh", rating: "4.7/5" },
    { name: "Im not afriad ft Eminem", rating: "4.5/5" },
    { name: "Stardom ft Yo YO Honey Singh", rating: "4.2/5" }
  ];
  var english = [
    { name: "Believer", rating: "5/5" },
    { name: "Hall of Fame", rating: "4.5/5" },
    { name: "KaalBhairavashtakam", rating: "4.5/5" }
  ];
  var [showvalue, resetshowvalue] = useState("");

  function sansclick() {
    var res = sanskrit.map((x) => (
      <div className="entry">
        <p>{x.name}</p>
        <p>{x.rating}</p>
      </div>
    ));
    resetshowvalue(res);
  }
  function rapclick() {
    var res = rap.map((x) => (
      <div className="entry">
        <p>{x.name}</p>
        <p>{x.rating}</p>
      </div>
    ));
    resetshowvalue(res);
  }
  function engclick() {
    var res = english.map((x) => (
      <div className="entry">
        <p>{x.name}</p>
        <p>{x.rating}</p>
      </div>
    ));
    resetshowvalue(res);
  }

  return (
    <div className="App">
      <h1 class="heading">Radioactive Music ⚛️ </h1>
      <h2>Try something in new, EveryDay!</h2>
      <div className="nav">
        <ul className="ulist">
          <li className="list">
            <button href="#" onClick={sansclick} className="links">
              Sanskrit
            </button>
          </li>
          <li class="list">
            <button onClick={rapclick} className="links">
              Rap
            </button>
          </li>
          <li class="list">
            <button onClick={engclick} className="links">
              English
            </button>
          </li>
        </ul>
      </div>

      <div className="result">{showvalue}</div>
    </div>
  );
}
