import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import "../styles/index.css";

const About = () => {
  return (
    <>
      <Row className=" mt-5">
        <Col md="4" lg="4" sm="4" sx="4">
          <Row class="text-center">
            <Col className="profile-pic m-2">
              <img
                className="profile-img"
                src={require("../styles/anexos/profile-pic.png")}
              />
            </Col>
          </Row>
        </Col>
        <Col>
          <Card>
            <CardHeader>ABOUT ME</CardHeader>
            <CardBody className="border-bottom">
              <Row>
                <Col md="2" lg="2" sm="2">
                  <strong>Name:</strong>
                </Col>
                <Col>MARCOS FELIPPE ALVES</Col>
              </Row>
              <Row>
                <Col md="2" lg="2" sm="2">
                  <strong>E-mail:</strong>
                </Col>
                <Col>mfelippe.bsb@hotmail.com</Col>
              </Row>
              <Row>
                <Col md="2" lg="2" sm="2">
                  <strong>Phone:</strong>
                </Col>
                <Col>+55 61 99315-3532</Col>
              </Row>
            </CardBody>
            <CardBody>
              <p className="text-left p-1">
                <i>
                  Hi, my name is Marcos Felippe. I'm a technology fan and
                  electronic engineer graduated from the University of
                  Brasilia(UnB). <br />
                  Because of college I have skills with embedded, microprocessed
                  and microcontrolled systems. My first experience was with{" "}
                  <strong>C++ </strong>
                  and java, but actually I usually other languages.
                </i>
              </p>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default About;
