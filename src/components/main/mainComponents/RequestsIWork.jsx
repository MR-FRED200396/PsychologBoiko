import { Row, Col, Typography, Card, Divider } from "antd";
const { Meta } = Card;

export default function RequestsIWork() {
  const requests = [
    {
      alt: "Стосунки з партнером",
      src: "requests3.jpg",
      location: "https://www.instagram.com/p/CMhspd6l7__/",
      title: "Стосунки з партнером",
      description: "рівноправність, злиття",
    },
    {
      alt: "Тривога",
      src: "requests2.jpg",
      location: "https://www.instagram.com/p/CG-jeFoFSc7/",
      title: "Тривога",
      description: "відчуття тривоги",
    },
    {
      alt: "Стосунки з батьками",
      src: "requests7.jpg",
      location: "https://www.instagram.com/p/CTfK1jJjIKK/",
      title: "Стосунки з батьками",
      description: "напорозуміння, сепарація",
    },
    {
      alt: "Проявленість",
      src: "requests4.jpg",
      location: "https://www.instagram.com/p/CSZw6Lgj3U8/",
      title: "Проявленість",
      description: "заявити про себе",
    },
    {
      alt: "Стосунки з собою",
      src: "requests9.jpg",
      location: "https://www.instagram.com/p/CddVSUSNa-g/",
      title: "Стосунки з собою",
      description: "шкідливі звички, стрес, немає сил",
    },
    {
      alt: "Невпевненість",
      src: "requests11.jpg",
      location: "https://www.instagram.com/p/CoVKynAtfzw/",
      title: "Невпевненість",
      description: "невпевненість в собі",
    },
    {
      alt: "Емоційне вигорання",
      src: "requests1.jpg",
      location: "https://www.instagram.com/p/CCyi7HFJGRv/",
      title: "Емоційне вигорання",
      description: "що це таке? чим небезпечно?",
    },

    {
      alt: "Підтримка",
      src: "requests12.jpg",
      location: "https://www.instagram.com/p/CsD04GnOmGA/",
      title: "Підтримка",
      description: "де отримати підтримку?",
    },
    {
      alt: "Дитячі травми",
      src: "requests6.jpg",
      location: "https://www.instagram.com/p/CEmBT5EFEbY/",
      title: "Дитячі травми",
      description: "чому важливо позбутися?",
    },
    {
      alt: "Обмежуючі переконання",
      src: "requests10.jpg",
      location: "https://www.instagram.com/p/CKec1zOletM/",
      title: "Обмежуючі переконання",
      description: "чому це важливо?",
    },
    {
      alt: "Криза у відносинах",
      src: "requests5.jpg",
      location: "https://www.instagram.com/p/CMxUgnYFdwM/",
      title: "Криза у відносинах",
      description: "коли зявляється? як усвідомити?",
    },
    {
      alt: "Панічні атаки",
      src: "requests8.jpg",
      location: "https://www.instagram.com/p/CUKpbmwsydt/",
      title: "Панічні атаки",
      description: "як побороти і що робити?",
    },
  ];

  return (
    <>
      <Row>
        <Col span={24}>
          <Divider orientation="center" style={{ backgroundColor: "#999" }}>
            <Typography.Title level={2}>Запити з якими працюю</Typography.Title>
          </Divider>
        </Col>
      </Row>

      <Row justify="space-around">
        {requests.map((request, index) => (
          <Card
            key={index}
            hoverable
            style={{
              width: 240,
              margin: "10px",
            }}
            cover={<img alt={request.alt} src={request.src} />}
            onClick={() => {
              window.location.assign(request.location);
            }}
          >
            <Meta title={request.title} description={request.description} />
          </Card>
        ))}
      </Row>
    </>
  );
}
