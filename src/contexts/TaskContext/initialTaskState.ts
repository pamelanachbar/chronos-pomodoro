import type { TaskStateModel } from "../../models/TaskStateModel";

export const initialTaskState: TaskStateModel = {
     task: [], 
      secondsRemaing: 0,
      formattedSecondsRemaining:  "00:00",
      activeTask: null,
      currentCycle: 0,
      config: {
      workTime: 25,
      shortBreakTime: 5,
      longBreackTime: 15,
      },
  }