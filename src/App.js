import {Route,Routes} from 'react-router-dom';
import AdminLoginPage from './pages/AdminLoginPage';
import AutocompletePage from './pages/AutocompletePage';
import CollapsibleContentPage from './pages/CollapsibleContentPage';
import CreateEmployeePage from './pages/CreateEmployeePage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import MenuPage from './pages/MenuPage';
import MultipleTabsPage from './pages/MultipleTabsPage';
import SearchEmployeePage from './pages/SearchEmployeePage';


function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<LoginPage />}/>
        <Route path="/Home/Index" element={<HomePage/>} />
        <Route path="/Account/ForgotPassword" element={<ForgotPasswordPage />} />
        <Route path="/Account/AdminLogin" element={<AdminLoginPage />} />
        <Route path="/Employee/Create" element={<CreateEmployeePage />} />
        <Route path="/Employee/Search" element={<SearchEmployeePage />} />
        <Route path="/Home/Tabs" element={<MultipleTabsPage />} />
        <Route path="/Home/Menu" element={<MenuPage />} />
        <Route path="/Home/Autocomplete" element={<AutocompletePage />} />
        <Route path="/Home/Collapse" element={<CollapsibleContentPage />} />
      </Routes>
    </div>
  );
}

export default App;
