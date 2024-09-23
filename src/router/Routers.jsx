import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import LoginForm from "../pages/LoginForm";
import RegisterForm from "../pages/RegisterForm";
import Home from "../pages/Home";

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/accounts/login" element={<LoginForm />} />
        <Route path="/accounts/register" element={<RegisterForm />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default Routers;
