import type { TaskModel } from "./TaskModel";

//task -> array de TaskModel
export type TaskStateModel = {
  task: TaskModel[],//historico e mainForm
  secondsRemaing: number, //contador
  formattedSecondsRemaining: string //contador formatado em string
  activeTask: TaskModel | null //a unica task ativa ou pode ser nenhuma
  currentCycle: number, //bolinhas, de 1 a 8 
  config: {
    workTime: number,
    shortBreakTime: number,
    longBreackTime: number,
  }

}