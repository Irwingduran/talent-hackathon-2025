import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accountant from '../pages/accountant/Home';
import AuthForm from '../pages/auth/AuthForm'
import OnboardingScreen from '../pages/accountant/onboarding/Home';
import OnboardingScreenPyme from '../pages/pymes/onboarding/Home';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthForm />} />
        <Route path="/accountant" element={<Accountant />} />
        <Route path='/accountant/onboarding' element={<OnboardingScreen/>} />

        <Route path='/pyme/onboarding' element={<OnboardingScreenPyme/>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
