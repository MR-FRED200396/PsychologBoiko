import React, { useState } from "react";
import ModalComponent from "./modalComponent/ModalComponent";

import { Button, Divider, Row, Col, Typography } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

export default function HowToGoConsultation() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Row>
        <Col
          span={24}
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Divider orientation="center" style={{ backgroundColor: "#999" }}>
            <Typography.Title level={2}> Хочу на консультацію</Typography.Title>
          </Divider>
          <Button
            type="primary"
            onClick={handleOpen}
            style={{
              width: "300px",
              marginLeft: "auto",
              marginRight: "auto",
              backgroundColor: "#ff3399",
            }}
            shape="round"
          >
            Записатись <ArrowRightOutlined />
          </Button>
          <ModalComponent open={open} handleClose={handleClose} />
        </Col>
      </Row>
    </>
  );
}
