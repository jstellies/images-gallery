import React from "react";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";

const Header = ({title}) => {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">{title}</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;



// const Header = (props) => {
//     const { title } = props;
//     return (
//       <Navbar bg="light" variant="light">
//         <Container>
//           <Navbar.Brand href="/">{title}</Navbar.Brand>
//         </Container>
//       </Navbar>
//     );
//   };