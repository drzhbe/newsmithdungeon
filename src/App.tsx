import "./App.css";
import { UserList } from "./pages/user-list";
import { Topbar } from "./components/topbar";
import { Outlet } from "react-router-dom";

function App() {
  console.log("### RENDER APP");
  return (
    <div className="App">
      <Topbar />
      <h1>Hi</h1>
      <Outlet />
    </div>
  );
}

export default App;
