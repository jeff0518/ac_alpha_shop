import Header from "./components/Header/Header";
import StepProgress from "./components/Steps/StepProgress";
import Step1 from "./components/Steps/Step1";
import Step2 from "./components/Steps/Step2";
import Step3 from "./components/Steps/Step3";
import ProgressControl from "./components/Steps/ProgressControl";
import Footer from "./components/Footer/Footer";
import styled from "styled-components";
import './sass/BaseStyled.css';

const BaseStyled = styled.div`
  
`;

function App() {
  return (
    <BaseStyled>
      <Header />
      <StepProgress />
      <Step1 />
      {/* <Step2 /> */}
      {/* <Step3 /> */}
      <ProgressControl />
      <Footer />
    </BaseStyled>
  );
}

export default App;
