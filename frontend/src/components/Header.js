import React from "react";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { ReactComponent as Logo} from '../images/logo.svg';

const navbarStyle = {
  backgroundColor: '#eeeeee'
};

const Header = ({title}) => {
  return (
    <Navbar style={navbarStyle} variant="light">
      <Container>
        <Logo alt={title} style={{ maxWidth: '12rem', maxHeight: '2rem' }}/>
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