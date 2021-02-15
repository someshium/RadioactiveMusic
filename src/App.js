import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var sanskrit = [
    { name: "Ayigiri Nandini", rating: "5/5", link:"https://open.spotify.com/track/0adBiP7XdpCxoPBFTgHA9L?si=GK7jUXKPT4aLa-stCke3Ng" },
    { name: "Rudrashtakam", rating: "4.5/5", link:"https://open.spotify.com/track/0adBiP7XdpCxoPBFTgHA9L?si=GK7jUXKPT4aLa-stCke3Ng" },
    { name: "Kaal Bhairavashtakam", rating: "4.5/5", link:"https://open.spotify.com/track/0adBiP7XdpCxoPBFTgHA9L?si=GK7jUXKPT4aLa-stCke3Ng"}
  ];
  var rap = [
    { name: "raat jashan di ft YO YO Honey Singh", rating: "4.7/5" },
    { name: "Im not afriad ft Eminem", rating: "4.5/5" },
    { name: "Stardom ft Yo YO Honey Singh", rating: "4.2/5" }
  ];
  var english = [
    { name: "Believer", rating: "5/5" },
    { name: "Hall of Fame", rating: "4.5/5" },
    { name: "Don't let me Down", rating: "4.5/5" }
  ];
  var [showvalue, resetshowvalue] = useState("");

  function sansclick() {
    var res = sanskrit.map((x) => (
      <div className="entry">
        <p>{x.name}</p>
        <p>{x.rating}</p>
        <p><a href= {x.link}>Link</a></p>
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
      <h1 class="heading">️⚛ Radioactive Music </h1>
      <h2>Try something new, EveryDay!</h2>
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
