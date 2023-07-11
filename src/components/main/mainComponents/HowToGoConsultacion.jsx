import React, { useState } from "react";
import ModalComponent from "./modalComponent/ModalComponent";

import { Button, Divider, Row, Col, Typography } from "antd";

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
        <Col span={24}>
          <Divider orientation="center" style={{ backgroundColor: "#999" }}>
            <Typography.Title level={2}>Запис на консультацію</Typography.Title>
          </Divider>
          <Button type="primary" onClick={handleOpen}>
            Записатись
          </Button>
          <ModalComponent open={open} handleClose={handleClose} />
        </Col>
      </Row>
    </>
  );
}
