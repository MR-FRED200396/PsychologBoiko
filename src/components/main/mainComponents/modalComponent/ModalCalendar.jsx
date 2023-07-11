import React from "react";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import dayLocaleData from "dayjs/plugin/localeData";
import { Calendar, Select, Typography, Row } from "antd";
dayjs.extend(dayLocaleData);

const ModalCalendar = ({ token }) => {
  const onPanelChange = (value, mode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };

  const wrapperStyle = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };

  return (
    <div
      style={{
        height: "420px",
        backgroundColor: "#f0f0f0",
        padding: "20px",
        display: "flex",
        justifyContent: "end",
        alignItems: "start",
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
                <Row gutter={8}>{monthOptions}</Row>
              </div>
            );
          }}
          onPanelChange={onPanelChange}
        />
      </div>
    </div>
  );
};

export default ModalCalendar;
