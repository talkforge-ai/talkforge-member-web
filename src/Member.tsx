import React from "react"

const Member = () => {
  return (
    <div style={{ marginBottom: "16px" }}>
      <div
        className="des-title"
        style={{ textAlign: "center", marginTop: "60px" }}
      >
        会员权益对比
      </div>
      <table className="table">
        <thead>
          <tr>
            <th style={{ width: "71px", fontWeight: 600 }}></th>
            <th style={{ width: "81px" }}>非会员</th>
            <th style={{ width: "80px" }}>
              <div className="pre">Premium</div>
            </th>
            <th style={{ width: "110px" }}>
              <div className="plus">Premium PLUS</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ height: "62px" }}>
            <td className="td-1">场景对话</td>
            <td>免费体验1天3次/天</td>
            <td>35次/月</td>
            <td>无上限</td>
          </tr>
          <tr style={{ height: "33px" }}>
            <td className="td-1">语法纠错</td>
            <td>免费体验1天</td>
            <td>支持</td>
            <td>支持</td>
          </tr>
          <tr style={{ height: "33px" }}>
            <td className="td-1">知识解答</td>
            <td>免费体验1天</td>
            <td>无上限</td>
            <td>无上限</td>
          </tr>
          <tr style={{ height: "33px" }}>
            <td className="td-1">职场助理</td>
            <td>免费体验1天</td>
            <td>无上限</td>
            <td>无上限</td>
          </tr>
          <tr style={{ height: "33px" }} className="last-tr">
            <td className="td-1">学习报告</td>
            <td>支持</td>
            <td>支持</td>
            <td>支持</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Member
