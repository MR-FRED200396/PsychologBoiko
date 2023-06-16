import { Row, Col, Typography, Button, Card } from "antd";

export default function HowToGoConsultation() {
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
            Як потрапити на консультацію?
          </Typography.Title>
        </Col>
        <Col xs={24} sm={12} md={12} lg={12}>
          <Card>
            Написати на сайті
            <Button
              type="primary"
              block
              style={{
                backgroundColor: "orange",
                color: "black",
              }}
              onClick={() => console.log("Button clicked")}
            >
              записатись на консультацію
            </Button>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={12} lg={12}>
          <Card>
            Написати у соцмережі
            <Button
              type="primary"
              block
              style={{
                backgroundColor: "orange",
                color: "black",
              }}
              onClick={() => console.log("Button clicked")}
            >
              записатись на консультацію
            </Button>
          </Card>
        </Col>
      </Row>
    </>
  );
}
