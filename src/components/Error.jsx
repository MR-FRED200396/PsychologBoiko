import React from "react";
import { Result, Button } from "antd";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  const funk = () => {
    navigate("/");
  };

  return (
    <Result
      status="404"
      title="Помилка 404"
      subTitle="Вибачте, сторінка, яку ви відвідали, не існує."
      extra={
        <Button type="primary" onClick={funk}>
          Повернутись на головну
        </Button>
      }
    />
  );
};

export default Error;
