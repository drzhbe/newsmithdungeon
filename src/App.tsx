import "./App.css";
import { UserList } from "./pages/user-list";
import { Topbar } from "./components/topbar";

function App() {
  return (
    <div className="App">
      <Topbar />
      <h1>Hi</h1>
      <UserList />
    </div>
  );
}

export default App;
