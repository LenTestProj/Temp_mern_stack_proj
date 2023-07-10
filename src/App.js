import {Route,Routes} from 'react-router-dom';
import AdminLoginPage from './pages/AdminLoginPage';
import CreateEmployeePage from './pages/CreateEmployeePage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';


function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<LoginPage />}/>
        <Route path="/Home/Index" element={<HomePage/>} />
        <Route path="/Account/ForgotPassword" element={<ForgotPasswordPage />} />
        <Route path="/Account/AdminLogin" element={<AdminLoginPage />} />
        <Route path="/Employee/Create" element={<CreateEmployeePage />} />
      </Routes>
    </div>
  );
}

export default App;
