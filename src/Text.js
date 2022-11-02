import Logo from "./components/Header/Logo"
import Menu from "./components/Header/Menu"
import Icon from "./components/Header/Icon"
import styled from "styled-components"

const Div = styled.div`
  max-width: 1440px;
  height: 60px;
  display: flex;
  align-items: center;
`;

const Text = () => {
  return (
    <>
      <h1>Text(Header)</h1>
      <Div>
        <Menu />
        <Logo />
        <Icon />
      </Div>
    </>
  );
}

export default Text