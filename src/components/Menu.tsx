import {
  Navbar,
  NavbarText,
  NavItem,
  NavLink,
  Collapse,
  Nav,
} from "reactstrap";

import { FiGithub, FiGitlab, FiLinkedin } from "react-icons/fi";

const Menu = () => {
  return (
    <>
      <Navbar>
        <NavItem>
          <NavLink href="https://github.com/mfelippe">
            GITHUB <FiGithub />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://gitlab.com/mfelippe">
            GITLAB <FiGitlab />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://www.linkedin.com/in/marcos-felippe-alves-4b483719a/">
            LINKEDIN <FiLinkedin />
          </NavLink>
        </NavItem>

        <NavbarText>
          M.Felippe{" "}
          <strong>
            <i>{"<CODER>"}</i>
          </strong>
        </NavbarText>
      </Navbar>
    </>
  );
};

export default Menu;
