import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";

export function MainForm(){
  return (
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
  );
}