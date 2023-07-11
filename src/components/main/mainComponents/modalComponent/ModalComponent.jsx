import React from "react";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import dayLocaleData from "dayjs/plugin/localeData";
import {
  Modal,
  Row,
  Col,
  Typography,
  TimePicker,
  Calendar,
  Select,
  theme,
} from "antd";
dayjs.extend(dayLocaleData);

const ModalComponent = ({ open, handleClose }) => {
  const { token } = theme.useToken();

  const onPanelChange = (value, mode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };

  const wrapperStyle = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };

  return (
    <Modal
      centered
      visible={open}
      onOk={handleClose}
      onCancel={handleClose}
      width={1000}
    >
      <Row>
        <Col
          span={8}
          style={{
            height: "420px",
            backgroundColor: "#f0f0f0",
            padding: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              alignItems: "start",
              height: "100%",
            }}
          >
            <h3>Заголовок опису</h3>
            <p>Тут буде опис вашого елемента.</p>
          </div>
        </Col>
        <Col
          span={8}
          style={{
            height: "420px",
            backgroundColor: "#f0f0f0",
            padding: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              alignItems: "start",
              height: "100%",
            }}
          >
            <div style={wrapperStyle}>
              <Calendar
                fullscreen={false}
                headerRender={({ value, type, onChange, onTypeChange }) => {
                  const start = 0;
                  const end = 12;
                  const monthOptions = [];
                  let current = value.clone();
                  const localeData = value.localeData();
                  const months = [];
                  for (let i = 0; i < 12; i++) {
                    current = current.month(i);
                    months.push(localeData.monthsShort(current));
                  }
                  for (let i = start; i < end; i++) {
                    monthOptions.push(
                      <Select.Option key={i} value={i} className="month-item">
                        {months[i]}
                      </Select.Option>
                    );
                  }
                  const year = value.year();
                  const month = value.month();
                  const options = [];
                  for (let i = year - 10; i < year + 10; i += 1) {
                    options.push(
                      <Select.Option key={i} value={i} className="year-item">
                        {i}
                      </Select.Option>
                    );
                  }
                  return (
                    <div
                      style={{
                        padding: 8,
                      }}
                    >
                      <Typography.Title level={4}>
                        Вибрати дату та час
                      </Typography.Title>
                      <Row gutter={8}></Row>
                    </div>
                  );
                }}
                onPanelChange={onPanelChange}
              />
            </div>
          </div>
        </Col>
        <Col
          span={8}
          style={{
            height: "420px",
            backgroundColor: "#f0f0f0",
            padding: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              alignItems: "start",
              height: "100%",
            }}
          >
            <TimePicker />
          </div>
        </Col>
      </Row>
    </Modal>
  );
};

export default ModalComponent;

// для розділення на менші компоненти але булм проблеми

// import React from "react";
// import dayjs from "dayjs";
// import "dayjs/locale/zh-cn";
// import dayLocaleData from "dayjs/plugin/localeData";
// import { Modal } from "antd";
// import ModalTitle from "./ModalTitle";
// import ModalCalendar from "./ModalCalendar";
// import ModalTime from "./ModalTime";
// dayjs.extend(dayLocaleData);

// const ModalComponent = ({ open, handleClose }) => {
//   const token = {
//     colorBorderSecondary: "#000000",
//     borderRadiusLG: "5px",
//     // Other token properties
//   };

//   return (
//     <Modal
//       centered
//       visible={open}
//       onOk={handleClose}
//       onCancel={handleClose}
//       width={1000}
//     >
//       <ModalTitle />
//       <ModalCalendar token={token} />
//       <ModalTime />
//     </Modal>
//   );
// };

// export default ModalComponent;
