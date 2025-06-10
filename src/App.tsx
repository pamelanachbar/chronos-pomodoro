import "./assets/style/global.css";
import "./assets/style/theme.css";
import { Container } from "./components/Container/";
import { CountDown } from "./components/CountDown";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";

export function App() {
  return (
    <>
      <Container><Logo/></Container>
      <Container><Menu/></Container>
      <Container><CountDown/></Container>
      <Container>
        <form className="form">
            <div className="formRow">
                <label htmlFor="input"></label>
                <input type="text" id="input"/>
            </div>

            <div className="formRow">
                <p>kkkkkkk</p>
            </div>

            <div className="formRow">
                <p>kkkkkkk</p>
                <p>kkkkkkk</p>
            </div>

            <div className="formRow">
                <button>Enviar</button>
            </div>
        </form>
      </Container>
    </>
  );
}
