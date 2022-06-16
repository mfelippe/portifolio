import { Container } from "reactstrap";
import About from "./About";
import Menu from "./Menu";
import Skills from "./Skill";

const Home = () => {
  return (
    <Container>
      <Menu />
      <About />

      <Skills />
    </Container>
  );
};

export default Home;
