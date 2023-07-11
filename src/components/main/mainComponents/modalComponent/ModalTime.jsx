import React from "react";
import { TimePicker } from "antd";

const ModalTime = () => {
  return (
    <div
      style={{
        height: "420px",
        backgroundColor: "#f0f0f0",
        padding: "20px",
        display: "flex",
        justifyContent: "start",
        alignItems: "start",
      }}
    >
      <TimePicker />
    </div>
  );
};

export default ModalTime;
