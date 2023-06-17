import { Row, Col, Typography, Card, Collapse, Divider } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";

export default function HowItLookConsultacion() {
  return (
    <>
      <Row>
        <Col span={24}>
          <Divider orientation="center" style={{ backgroundColor: "#999" }}>
            <Typography.Title level={2}>
              Як виглядає консультація?
            </Typography.Title>
          </Divider>
          <Collapse
            size="large"
            items={[
              {
                key: "1",
                label: "Як все відбувається",
                children: (
                  <p>
                    <CheckCircleOutlined />
                    {
                      " Я працюю онлайн в скайпі або у вайбері. Тривалість однієї зустрічі 50 хв. до зустрічі вам ніяк не треба готуватись. Хіба що зарядити телефон/ноутбук та організувати тихе місце."
                    }
                  </p>
                ),
              },
            ]}
          />
          <Collapse
            size="large"
            items={[
              {
                key: "1",
                label: "Скільки потрібно зустрічей",
                children: (
                  <p>
                    <CheckCircleOutlined />
                    {
                      " Я не знаю. Це залежить від вашого запиту та цілей. Я працюю як в форматі консультування (5-7 зустрічі) так і в форматі психотерапії (регулярні зустрічі 1 раз в тиждень або в два тижні) основну частину моєї практики займає саме психотерапія не буду приховувати, що саме психотерапія мені більше до душі там особливо теплий контакт з клієнтами та глибокі зміни психоемоційного стану та якості життя в цілому, але люблю всіх клієнтів однаково сильно."
                    }
                  </p>
                ),
              },
            ]}
          />
          <Collapse
            size="large"
            items={[
              {
                key: "1",
                label: "Яка вартість",
                children: (
                  <p>
                    <CheckCircleOutlined />
                    {
                      " Вартість регулярно росте разом з моїми навичками та досвідом тому не писатиму тут, але ви сміливо можете запитати мене про це в діректі- це безкоштовно."
                    }
                  </p>
                ),
              },
            ]}
          />
        </Col>
      </Row>
    </>
  );
}
