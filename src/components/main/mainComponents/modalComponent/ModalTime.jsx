// import React from "react";
// import { Radio, Col } from "antd";

// const ModalTime = () => {
//   return (
//     <>
//       <Col
//         span={8}
//         style={{
//           height: "420px",

//           padding: "20px",
//         }}
//       >
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "row",
//             justifyContent: "center",
//             alignItems: "center",
//             height: "100%",
//           }}
//         >
//           {/* <TimePicker /> */}
//           <Radio.Button value="default">Default</Radio.Button>
//         </div>
//       </Col>
//     </>
//   );
// };

// export default ModalTime;

import React, { useState } from "react";
import { Col, Button, Typography } from "antd";

const ModalTime = () => {
  const [buttonText, setButtonText] = useState();
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleButtonClick = () => {
    setButtonDisabled(true);
  };

  const handleNextButtonClick = () => {
    // Виконується логіка при натисканні на кнопку "Далі"
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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Typography.Text>{buttonText}</Typography.Text>
          <Button
            type="primary"
            onClick={handleButtonClick}
            disabled={buttonDisabled}
            style={{ marginTop: "16px" }}
          >
            10:30
          </Button>
          {buttonDisabled && (
            <Button
              type="primary"
              onClick={handleNextButtonClick}
              style={{ marginTop: "16px" }}
            >
              Далі
            </Button>
          )}
        </div>
      </Col>
    </>
  );
};

export default ModalTime;
