import React from "react";

import { Row, Col, Progress, Card, CardHeader, CardBody } from "reactstrap";

const coder = [
  { name: "Python", stack: 60 },
  { name: "JavaScript", stack: 90 },
  { name: "Node.Js", stack: 90 },
  { name: "CSS", stack: 90 },
  { name: "HTML", stack: 90 },
  { name: "C++", stack: 50 },
];
const bancos = [
  { name: "postgresql", stack: 80 },
  { name: "Mysql", stack: 80 },
  { name: "FireBase", stack: 70 },
  { name: "MongoDB", stack: 50 },
];
const frame = [
  { name: "ReactJS", stack: 100 },
  { name: "ReactNative", stack: 80 },
  { name: "Expo", stack: 80 },
  { name: "Bootstrap", stack: 80 },
];

const Skills = () => {
  return (
    <>
      <Card>
        <CardHeader className="second-color"> SKILLS</CardHeader>
        <CardBody>
          <Row>
            <Row>
              <Col className="text-left">
                <h5>programming languages</h5>
              </Col>
            </Row>
            {coder.map((code) => (
              <>
                <Row key={code.name}>
                  <Col>
                    <p>{code.name}</p>
                  </Col>
                  <Col>
                    <Progress
                      animated={true}
                      value={code.stack}
                      color="secondary"
                    />
                  </Col>
                </Row>
              </>
            ))}
            {bancos.map((code) => (
              <>
                <Row key={code.name}>
                  <Col>
                    <p>{code.name}</p>
                  </Col>
                  <Col>
                    <Progress
                      animated={true}
                      value={code.stack}
                      color="secondary"
                    />
                  </Col>
                </Row>
              </>
            ))}
            {frame.map((code) => (
              <>
                <Row key={code.name}>
                  <Col>
                    <p>{code.name}</p>
                  </Col>
                  <Col>
                    <Progress
                      animated={true}
                      value={code.stack}
                      color="secondary"
                    />
                  </Col>
                </Row>
              </>
            ))}
          </Row>
        </CardBody>
      </Card>
    </>
  );
};
export default Skills;
