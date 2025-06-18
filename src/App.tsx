
import "./assets/style/global.css";
import "./assets/style/theme.css";
import { TaskContextProvider } from "./contexts/TaskContext/TaskContextProvider";
import { Home } from "./pages/Home";




 
export function App() {

  return (
    <TaskContextProvider>
      <Home/>
    </TaskContextProvider>
  );
}