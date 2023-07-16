import React, { useState } from "react";
import { Col, Button, Typography } from "antd";

const ModalTime = () => {
  const timeOptions = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  const [selectedTime, setSelectedTime] = useState(null);
  const [buttonDisabled, setButtonDisabled] = useState(
    Array(timeOptions.length).fill(false)
  );
  const [showNextButton, setShowNextButton] = useState(false);
  const [nextButtonTime, setNextButtonTime] = useState(null);

  const handleTimeButtonClick = (time, index) => {
    setSelectedTime(time);
    setButtonDisabled(buttonDisabled.map((_, i) => i === index));
    setShowNextButton(true);
    setNextButtonTime(time);
  };

  const handleNextButtonClick = () => {
    console.log(`Далі: ${nextButtonTime}`);
  };

  const containerStyle = {
    maxHeight: "325px",
    overflowY: "scroll",
  };

  return (
    <Col span={24}>
      <Typography.Title level={5}>Виберить час</Typography.Title>
      <div style={containerStyle}>
        {timeOptions.map((time, index) => (
          <div
            key={time}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "10px",
              height: "100%",
            }}
          >
            {selectedTime === time && showNextButton ? (
              <>
                <Button
                  type="primary"
                  style={{
                    width: "70px",
                    marginRight: "5px",
                  }}
                  onClick={() => handleTimeButtonClick(time, index)}
                  disabled={buttonDisabled[index]}
                >
                  {time}:00
                </Button>
                <Button
                  type="primary"
                  onClick={handleNextButtonClick}
                  style={{
                    width: "70px",
                    marginRight: "5px",
                    color: "#FFCCCC",
                    backgroundColor: "#ff3399",
                  }}
                >
                  Далі
                </Button>
              </>
            ) : (
              <Button
                type={selectedTime === time ? "primary" : "default"}
                style={{
                  width: "150px",
                  marginRight: "5px",
                  backgroundColor: "#FFCCCC",
                }}
                onClick={() => handleTimeButtonClick(time, index)}
                disabled={buttonDisabled[index]}
              >
                {time}:00
              </Button>
            )}
          </div>
        ))}
      </div>
    </Col>
  );
};

export default ModalTime;
