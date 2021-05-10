import React from "react";
import { Container, Row, Card, Col, Image } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={10}>
            <Card>
              <Card.Body>
                <Image
                  alt="profile"
                  height="200"
                  width="150"
                  className="text=center img-fluid mx-auto d-block border-secondary"
                  src="/images/nancypic2.jpg"
                />

                <Card.Title>About Me</Card.Title>
                <Card.Text>
                  <p>
                    I have a successful track record of leading development and
                    deployment teams. Taking new concepts and technology from an
                    idea to a fully functioning, deployed product is what I
                    enjoy the most. The building of teams and watching them
                    bring out the best in one another ranks high on my best
                    accomplishments list! I have a passion for technology and
                    travel, especially cruising. I plan to use my new skills to
                    bring the two together.
                  </p>
                  <p>
                    I enjoy spending time with family and friends and am looking
                    forward to the time that we can all gather and travel safely
                    once again.
                  </p>
                  <p>
                    As a travel advisor I like to make travel affordable and
                    easy for my clients. Using technology to simplify travel, to
                    save time with routine tasks and give my clients more time
                    for fun and new experiences on their trips is my goal!
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
