import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Service1 from '../pages/service1/Home';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Service" element={<Service1 />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
