import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Accountant from '../pages/accountant/Home';
import AuthForm from '../pages/auth/AuthForm'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthForm />} />
        <Route path="/accountant" element={<Accountant />} />
        <Route path='/auth' element={<AuthForm/>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
