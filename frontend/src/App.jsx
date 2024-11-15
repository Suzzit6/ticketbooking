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
import { AppProviders } from "./context/appprovider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <AppProviders>
    <Router>
      <Routes>
        <Route path="/" Component={Landing} />
        <Route path="/login/user/:token" element={<LoginRedirect />} />
      </Routes>
    </Router>
    </AppProviders>
  );
}

export default App;
