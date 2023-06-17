import { Row, Col, Typography, List, Card } from "antd";

export default function RequestsIWork() {
  const requests = [
    "стосунки з собою",
    "стосунки з партнером",
    "особисті кордони",
    "стосунки з батьками",
    "самоцінність",
    "проявленість",
    "тривога",
    "образи",
    "проживання кризи",
  ];
  const backgroundImageUrl = "requests.jpg";

  const cardStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minheight: "100vh",
  };
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
          <Typography.Title level={2}>Запити з якими працюю </Typography.Title>
        </Col>
      </Row>
      <Row>
        <Col span={12} style={{ backgroundColor: "#f0f0f0" }}>
          <List
            dataSource={requests}
            renderItem={(item) => (
              <List.Item
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <li key={item}>{item}</li>
              </List.Item>
            )}
          />
        </Col>
        <Col span={12}>
          <Card style={cardStyle} />
        </Col>
      </Row>
    </>
  );
}
