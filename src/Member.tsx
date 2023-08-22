import React from "react";

const Member = () => {
  return (
    <div style={{ marginBottom: "250px" }}>
      <div
        className="des-title"
        style={{ textAlign: "center", marginTop: "124px" }}
      >
        会员权益对比
      </div>
      <table
        style={{
          width: "100%",
          height: "236px",
          marginTop: "32px",
          textAlign: "center",
          fontSize: "12px",
        }}
      >
        <tr>
          <th style={{ width: "48px", fontWeight: 600 }}></th>
          <th style={{ width: "76px" }}>非会员</th>
          <th style={{ width: "60px" }}>
            <div className="pre">Premium</div>
          </th>
          <th style={{ width: "100px" }}>
            <div className="plus">Premium PLUS</div>
          </th>
        </tr>
        <tr>
          <td className="td-1">场景对话</td>
          <td>免费体验3天3次/天</td>
          <td>35次/月</td>
          <td>无上限</td>
        </tr>
        <tr>
          <td className="td-1">语法纠错</td>
          <td>免费体验3天</td>
          <td>支持</td>
          <td>支持</td>
        </tr>
        <tr>
          <td className="td-1">知识解答</td>
          <td>免费体验3天</td>
          <td>无上限</td>
          <td>无上限</td>
        </tr>
        <tr>
          <td className="td-1">职场助理</td>
          <td>免费体验3天</td>
          <td>无上限</td>
          <td>无上限</td>
        </tr>
        <tr>
          <td className="td-1">学习报告</td>
          <td>支持</td>
          <td>支持</td>
          <td>支持</td>
        </tr>
      </table>
    </div>
  );
};

export default Member;
