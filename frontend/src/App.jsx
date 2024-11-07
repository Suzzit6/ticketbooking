import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useLocation,
} from "react-router-dom";
import Header from "./pages/header";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" Component={Header} />
      </Routes>
    </Router>
  );
}

export default App;
