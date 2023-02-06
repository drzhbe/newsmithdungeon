import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { UserList } from "./pages/user-list";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Hi</h1>
      <UserList />
    </div>
  );
}

export default App;
