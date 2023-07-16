import React from "react";
import { Col, Typography } from "antd";
import { ClockCircleOutlined, VideoCameraOutlined } from "@ant-design/icons";

const ModalTitle = () => {
  return (
    <Col span={24}>
      <div
        style={{
          height: "325px",
          padding: "12px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
          backgroundColor: "#FFCCCC",
          borderRadius: "2%",
          marginBottom: "20px",
        }}
      >
        <Typography.Text style={{ width: "8em", textAlign: "center" }}>
          Ірина Бойко
        </Typography.Text>
        <Typography.Title
          level={5}
          style={{
            width: "5em",
            textAlign: "center",
            marginTop: "1em",
            marginBottom: "1em",
          }}
        >
          Зустріч
        </Typography.Title>
        <Typography.Text
          style={{ width: "8em", textAlign: "center", padding: "10px" }}
        >
          <ClockCircleOutlined /> 50 хв
        </Typography.Text>
        <Typography.Text style={{ width: "8em", textAlign: "center" }}>
          <VideoCameraOutlined /> Деталі веб-конференції надаються після
          реєстрації
        </Typography.Text>
      </div>
    </Col>
  );
};

export default ModalTitle;
