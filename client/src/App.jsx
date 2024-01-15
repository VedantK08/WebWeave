import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Pages from "./Pages/Pages";
import LoginPage from "./Pages/LoginPage";
import Account from "./Pages/Account";
import SignUp from "./Pages/SignUp";
import Root from "./Root";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/userHome" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/userLogin" element={<LoginPage />} />
          <Route path="/myAccount" element={<Account />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
