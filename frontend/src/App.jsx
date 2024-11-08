import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useLocation,
} from "react-router-dom";
import { useState } from "react";
import Landing from "./pages/landing/landing";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" Component={Landing} />
      </Routes>
    </Router>
  );
}

export default App;
