import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useLocation,
} from "react-router-dom";
import { useState } from "react";
import Landing from "./pages/landing/landing";
import LoginRedirect from "./pages/user/userAuth";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" Component={Landing} />
        <Route path="/login/user/:token" element={<LoginRedirect />} />
      </Routes>
    </Router>
  );
}

export default App;
