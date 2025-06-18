import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useRef, useState } from "react";


export function MainForm(){
  const [taskName, setTaskName] = useState('')
  const numero = useRef(0);
  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();
  }
  return (

     <form className="form" onSubmit={handleCreateNewTask}>
          <h1>{numero.current}</h1>
            <div className="formRow">
              <DefaultInput type="text" id="meuInput" labelText="Task: " placeholder="Digite algo" value={taskName} onChange={e => setTaskName(e.target.value)}></DefaultInput>
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
  );
}