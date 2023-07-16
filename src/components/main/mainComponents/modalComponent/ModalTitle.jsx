import React from "react";
import { Col, Typography } from "antd";
import { ClockCircleOutlined, VideoCameraOutlined } from "@ant-design/icons";

const ModalTitle = () => {
  return (
    <Col span={8}>
      <div
        style={{
          height: "420px",
          width: "100%",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <Typography.Text style={{ width: "8em", textAlign: "center" }}>
          Ірина Бойко
        </Typography.Text>
        <Typography.Title
          level={3}
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
