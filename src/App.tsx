import React from "react";
import logo from "./asset/logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <img src={logo} className="LogoImage" alt="logo" />
        <div className="Desc">
          <div className="App-title">TalkForge.AI</div>
          <div className="APP-desc ">
            Powered by artificial intelligence that makes language learning
            effective and easy
          </div>
          <div className="Btn-wrapper">
            <div className="App-store">
              <span
                className="Btn-text"
                style={{ position: "relative", left: "3.125rem", top: "2rem" }}
              >
                Coming soon
              </span>
            </div>
            <div className="Google-play">
              <span
                className="Btn-text"
                style={{
                  position: "relative",
                  left: "3.83375rem",
                  top: "0.3125rem",
                }}
              >
                Coming soon
              </span>
            </div>
          </div>
        </div>
      </div>
      <footer className="Footer">
        ©2023 Immersively Inc. All rights reserved. | Contact us at
        dev@talkforge.ai
      </footer>
    </div>
  );
}

export default App;
