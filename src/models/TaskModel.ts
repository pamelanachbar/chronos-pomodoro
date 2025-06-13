import type { TaskStateModel } from "./TaskStateModel"

export type TaskModel = {
  id: string,
  name: string,
  duration: number,
  startDate: number, //Date.now() new Date()
  completeDate: number | null, //quando o timer chega ao final, coloca-se o tempo aqui
  //se a pessoa cancelar a task, sera null
  interruptDate: number, //se a pessoa cancelar a task, vai aparecer a data aqui
  type: keyof TaskStateModel['config']
}