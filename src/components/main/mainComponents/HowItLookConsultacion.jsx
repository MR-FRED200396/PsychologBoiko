import { Row, Col, Typography, Card } from "antd";

export default function HowItLookConsultacion() {
  return (
    <>
      <Row>
        <Col
          span={24}
          style={{
            backgroundColor: "#999",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography.Title level={2}>
            Як виглядає консультація?
          </Typography.Title>
        </Col>
        <Col>
          <Card>
            ЯК ВСЕ ВІДБУВАЄТЬСЯ? отже, переважно я працюю онлайн в скайпі або у
            вайбері. тривалість однієї зустрічі 50 хв. до зустрічі вам ніяк не
            треба готуватись. Хіба що зарядити телефон/ноутбук та організувати
            тихе місце. ЯК ПОТРАПИТИ НА КОНСУЛЬТАЦІЮ? просто написати мені тут,
            в особисті повідомлення СКІЛЬКИ МЕНІ ПОТРІБНО ЗУСТРІЧЕЙ? я не знаю)
            це залежить від вашого запиту та цілей. я працюю як в форматі
            консультування (1-3 зустрічі) так і в форматі психотерапії
            (регулярні зустрічі 1 раз в тиждень або в два тижні) основну частину
            моєї практики займає саме психотерапія не буду приховувати, що саме
            психотерапія мені більше до душі там особливо теплий контакт з
            клієнтами та глибокі зміни психоемоційного стану та якості життя в
            цілому але люблю всіх клієнтів однаково сильно ЯКА ВАРТІСТЬ?
            вартість регулярно росте разом з моїми навичками та досвідом тому не
            писатиму тут, але ви сміливо можете запитати мене про це в діректі-
            це безкоштовно
          </Card>
        </Col>
      </Row>
    </>
  );
}
