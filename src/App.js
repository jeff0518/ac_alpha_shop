import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import styled from "styled-components";
import './sass/BaseStyled.css';


const BaseStyled = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  width: var(--width);
`;

function App() {
  return (
    <div>
      <BaseStyled>
        <Header />
        <Main />
      </BaseStyled>
      <Footer />
    </div>
  );
}

export default App;
