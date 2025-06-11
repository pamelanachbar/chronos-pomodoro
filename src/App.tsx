import { PlayCircleIcon } from "lucide-react";
import "./assets/style/global.css";
import "./assets/style/theme.css";
import { Container } from "./components/Container/";
import { CountDown } from "./components/CountDown";
import { Cycles } from "./components/Cycles";
import { DefaultInput } from "./components/DefaultInput";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { DefaultButton } from "./components/DefaultButton";
import { Footer } from "./components/Footer";
import { useState } from "react";
import { Heading } from "./components/Heading";

export function App() {
  const [numero, setNumero] = useState(0);

  function handleClick(){
    setNumero((prevState) => prevState + 1)
  }
  return (
    <>
      <Heading>Numero: {numero}</Heading>
      <button onClick={handleClick}>Incrementar</button>
      <Container><Logo/></Container>
      <Container><Menu/></Container>
      <Container><CountDown/></Container>
      <Container>
        <form className="form">
            <div className="formRow">
              <DefaultInput type="text" id="meuInput" labelText="Task: " placeholder="Digite algo"></DefaultInput>
            </div>

            <div className="formRow">
                <p>Click on the button for start</p>
            </div>

            <div className="formRow">
              <Cycles/>
            </div>

            <div className="formRow">
                <DefaultButton icon={<PlayCircleIcon/>} color="green"></DefaultButton>
            </div>
        </form>
      </Container>

      <Container><Footer></Footer></Container>
    </>
  );
}
