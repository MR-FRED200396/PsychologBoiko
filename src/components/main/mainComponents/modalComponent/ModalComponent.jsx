import React from "react";
import { Modal, Row, Col } from "antd";
import ModalTitle from "./ModalTitle";
import ModalCalendar from "./ModalCalendar";
import ModalTime from "./ModalTime";

const ModalComponent = ({ open, handleClose }) => {
  const token = {
    colorBorderSecondary: "#FFCCCC",
    borderRadiusLG: "5px",
  };

  return (
    <Modal
      centered
      visible={open}
      footer={null}
      onCancel={handleClose}
      width={900}
    >
      <Row gutter={24}>
        <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
          <ModalTitle />
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
          <ModalCalendar token={token} />
        </Col>
        <Col
          xs={24}
          sm={24}
          md={8}
          lg={8}
          xl={8}
          xxl={8}
          style={{ marginTop: "-20px" }}
        >
          <ModalTime />
        </Col>
      </Row>
    </Modal>
  );
};

export default ModalComponent;
