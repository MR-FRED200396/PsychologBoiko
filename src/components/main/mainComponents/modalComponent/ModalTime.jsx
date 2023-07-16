import React, { useState } from "react";
import { Col, Button } from "antd";

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
    // Виконується логіка при натисканні на кнопку "Далі"
    console.log(`Далі: ${nextButtonTime}`);
  };

  return (
    <>
      <Col
        span={8}
        style={{
          height: "420px",
          padding: "20px",
        }}
      >
        {timeOptions.map((time, index) => (
          <div key={time} style={{ display: "flex", alignItems: "center" }}>
            {selectedTime === time && showNextButton ? (
              <>
                <Button
                  type="primary"
                  style={{ width: "70px", marginRight: "5px" }}
                  onClick={() => handleTimeButtonClick(time, index)}
                  disabled={buttonDisabled[index]}
                >
                  {time}:00
                </Button>
                <Button
                  type="primary"
                  onClick={handleNextButtonClick}
                  style={{ width: "70px", marginRight: "5px" }}
                >
                  Далі
                </Button>
              </>
            ) : (
              <Button
                type={selectedTime === time ? "primary" : "default"}
                style={{ width: "70px", marginRight: "5px" }}
                onClick={() => handleTimeButtonClick(time, index)}
                disabled={buttonDisabled[index]}
              >
                {time}:00
              </Button>
            )}
          </div>
        ))}
      </Col>
    </>
  );
};

export default ModalTime;
