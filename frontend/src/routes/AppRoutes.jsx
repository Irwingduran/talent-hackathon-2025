import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accountant from '../pages/accountant/Home';
import AuthForm from '../pages/auth/AuthForm'
import OnboardingScreen from '../pages/accountant/onboarding/Home';
import OnboardingScreenPyme from '../pages/pymes/onboarding/Home';
import LoginPage from '../pages/login/Home';
import SignupPage from '../pages/singup/Home';
import FiscalDashboard from '../pages/pymes/dashboard/Home';
import AccountingDashboard from '../pages/accountant/dashboard/Home';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthForm />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />


        <Route path="/accountant" element={<Accountant />} />
        <Route path='/accountant/onboarding' element={<OnboardingScreen/>} />
        <Route path='/accountant/dashboard' element={<AccountingDashboard/>} />

        <Route path='/pyme/onboarding' element={<OnboardingScreenPyme/>} />
        <Route path='/pyme/dashboard' element={<FiscalDashboard/>} />

      </Routes>
    </Router>
  );
};

export default AppRoutes;
