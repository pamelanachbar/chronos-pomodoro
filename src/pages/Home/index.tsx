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
  const {state, setState} = props
      console.log(props);

      function handleClick(){
        setState(prevState => {
          return {
            ...prevState,
            currentCycle: 5
          }
        });
      }
  return (

    <MainTemplate>
      <Container><button onClick={handleClick}></button></Container>
         <Container><CountDown/></Container>
          <Container><MainForm></MainForm></Container>
      </MainTemplate>
  );
}