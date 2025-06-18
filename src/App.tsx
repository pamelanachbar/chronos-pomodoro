
import "./assets/style/global.css";
import "./assets/style/theme.css";
import { Home } from "./pages/Home";
import { TaskContextProvider } from "./contexts/TaskContext";



 
export function App() {

  return (
    <TaskContextProvider>
      <Home/>
    </TaskContextProvider>
  );
}