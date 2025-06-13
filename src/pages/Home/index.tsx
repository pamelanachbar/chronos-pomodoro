import { Container } from "../../components/Container";
import { CountDown } from "../../components/CountDown";
import { MainForm } from "../../components/MainForm";
import type { TaskStateModel } from "../../models/TaskStateModel";
import { MainTemplate } from "../../templates/MainTemplates";

type HomeProps = {
  state: TaskStateModel,
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>
}
export function Home(props: HomeProps){
  return (
    <MainTemplate>
         <Container><CountDown/></Container>
          <Container><MainForm></MainForm></Container>
      </MainTemplate>
  );
}