import { Container } from "../../components/Container";
import { CountDown } from "../../components/CountDown";
import { MainForm } from "../../components/MainForm";
import { MainTemplate } from "../../templates/MainTemplates";


export function Home(){
  return (

    <MainTemplate>
         <Container><CountDown /></Container>
          <Container><MainForm></MainForm></Container>
      </MainTemplate>
  );
}