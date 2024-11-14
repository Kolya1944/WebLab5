import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const useHistory = () => {
  const [history, setHistory] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    setHistory((prev) => [...prev, location.pathname]);
    navigate(path);
  };

  return { history, handleNavigation };
};

export default useHistory;
