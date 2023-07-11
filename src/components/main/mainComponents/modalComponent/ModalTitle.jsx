import React from "react";
import { Typography } from "antd";

const ModalTitle = () => {
  return (
    <div
      style={{
        height: "420px",
        backgroundColor: "#f0f0f0",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "start",
      }}
    >
      <h3>Заголовок опису</h3>
      <p>Тут буде опис вашого елемента.</p>
    </div>
  );
};

export default ModalTitle;
