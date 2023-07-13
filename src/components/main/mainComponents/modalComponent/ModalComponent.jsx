import React from "react";
import { Modal, Row, Col } from "antd";
import ModalTitle from "./ModalTitle";
import ModalCalendar from "./ModalCalendar";
import ModalTime from "./ModalTime";

const ModalComponent = ({ open, handleClose }) => {
  const token = {
    colorBorderSecondary: "#000000",
    borderRadiusLG: "5px",
    // Other token properties
  };

  return (
    <Modal
      centered
      visible={open}
      onOk={handleClose}
      onCancel={handleClose}
      width={1000}
    >
      <Row gutter={24}>
        <Col span={8}>
          <ModalTitle />
        </Col>
        <Col span={8}>
          <ModalCalendar token={token} />
        </Col>
        <Col span={8}>
          <ModalTime />
        </Col>
      </Row>
    </Modal>
  );
};

export default ModalComponent;
