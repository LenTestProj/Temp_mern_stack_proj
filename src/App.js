import {Route,Routes} from 'react-router-dom';
import MobileNavbar from './components/Navbar/MobileNavbar';
import Navbar from './components/Navbar/Navbar';
import AdminLoginPage from './pages/AdminLoginPage';
import AutocompletePage from './pages/AutocompletePage';
import CollapsibleContentPage from './pages/CollapsibleContentPage';
import CreateEmployeePage from './pages/CreateEmployeePage';
import CSSPropertiesPage from './pages/CSSPropertiesPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import HomePage from './pages/HomePage';
import IFramesPage from './pages/IFramesPage';
import ImagesPage from './pages/ImagesPage';
import LinksPage from './pages/LinksPage';
import LoginPage from './pages/LoginPage';
import MenuPage from './pages/MenuPage';
import MultipleTabsPage from './pages/MultipleTabsPage';
import PopupPage from './pages/PopupPage';
import SearchEmployeePage from './pages/SearchEmployeePage';
import SliderPage from './pages/SliderPage';
import TooltipPage from './pages/TooltipPage';


function App() {
  return (
    <div>
      <Navbar />
      <MobileNavbar />
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
        <Route path="/Home/UpLoadImage" element={<ImagesPage />} />
        <Route path="/Home/Slider" element={<SliderPage />} />
        <Route path="/Home/Tooltip" element={<TooltipPage />} />
        <Route path="/Home/Popup" element={<PopupPage />} />
        <Route path="/Home/Links" element={<LinksPage />} />
        <Route path="/Home/CSSProperty" element={<CSSPropertiesPage />} />
        <Route path="/Home/Iframe" element={<IFramesPage />} />
      </Routes>
    </div>
  );
}

export default App;
