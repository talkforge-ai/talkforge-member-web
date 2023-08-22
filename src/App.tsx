import React from "react";

import logo from "./asset/logo.svg";
import talkImg from "./asset/talk-img.png";
import commercial from "./asset/commercial-icon.svg";
import personalization from "./asset/personalization.svg";
import authentic from "./asset/authentic.svg";
import intelligent from "./asset/intelligent.svg";
import gospl from "./asset/gospl.svg";
import "./App.css";

import Member from "./Member";

function App() {
  return (
    <div className="app">
      <div className="bg-block">
        <div>
          <img
            alt="logo"
            src={logo}
            width={143}
            height={149}
            style={{ float: "right", marginTop: "54px", marginRight: "-15px" }}
          />
        </div>
      </div>
      <div className="content-block">
        <div>
          <div className="member-block-title">成为会员</div>
          <div className="member-block-desc">Talk like a native speaker</div>
          <img
            alt="talk"
            src={talkImg}
            style={{ borderRadius: "12px", marginTop: "22px" }}
          />
          <div className="main-text">
            随时随地与AI外教一对一交流，学习最地道、最实用的商务英语。不再为职场工作中的英语表达而苦恼，告别尴尬，大胆说出来！
          </div>
        </div>
        <div>
          <img
            alt="commercials"
            src={commercial}
            style={{ margin: "-10px 26px 10px 10px", float: "right" }}
          />
          <div style={{ padding: "52px 24px 0" }}>
            <div className="des-title">丰富的商务场景</div>
            <div className="des-des">
              涵盖1000+主题、12大行业、6大场景，模拟真实的商务场景，助你掌握专业的职场英文表达
            </div>
          </div>
          <div>
            <img
              alt="personalization"
              src={personalization}
              style={{ margin: "60px 10px 0px 34px", float: "left" }}
            />
            <div style={{ padding: "128px 24px 0" }}>
              <div className="des-title" style={{ textAlign: "right" }}>
                个性化英语学习
              </div>
              <div
                className="des-des"
                style={{ textAlign: "right", paddingLeft: "46px" }}
              >
                为不同英语水平学习者提供个性化内容高效针对性英语学习
              </div>
            </div>
          </div>
          <div>
            <img
              alt="authentic"
              src={authentic}
              style={{ margin: "64px 26px 10px 10px", float: "right" }}
            />
            <div style={{ padding: "128px 24px 0" }}>
              <div className="des-title">地道发音与语法纠正</div>
              <div className="des-des">
                基于先进的AI技术，提供地道专业的英文发音，实时语法纠错
              </div>
            </div>
          </div>
          <div>
            <img
              alt="intelligent"
              src={intelligent}
              style={{ margin: "60px 10px 0px 34px", float: "left" }}
            />
            <div style={{ padding: "128px 24px 0" }}>
              <div className="des-title" style={{ textAlign: "right" }}>
                智能职场助理
              </div>
              <div className="des-des" style={{ textAlign: "right" }}>
                轻松解决文案生成、邮件编辑、方案分析、文字处理，PPT生成等工作难题，大幅提升办公效率
              </div>
            </div>
          </div>
          <div>
            <img
              alt="gospl"
              src={gospl}
              style={{ margin: "64px 26px 10px 10px", float: "right" }}
            />
            <div style={{ padding: "128px 24px 0" }}>
              <div className="des-title">社恐福音</div>
              <div
                className="des-des"
                style={{ position: "absolute", marginRight: "100px" }}
              >
                无需面对真人，更不需要麻烦他人。
                自由与AI角色对话，让交流不再尴尬。
              </div>
            </div>
          </div>
        </div>
        <Member />
      </div>
    </div>
  );
}

export default App;
