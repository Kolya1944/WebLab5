import React, { useContext } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { UserContext } from './UserContext';
import { ThemeContext } from './ThemeContext';
import useHistory from './useHistory'; 

function App() {
  const { user, setUser } = useContext(UserContext);
  const { theme, setTheme } = useContext(ThemeContext);
  const { history, handleNavigation } = useHistory();

  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
      <nav>
        <ul>
          <li><button onClick={() => handleNavigation('/')}>Home</button></li>
          <li><button onClick={() => handleNavigation('/category1')}>Category 1: Food</button></li>
          <li><button onClick={() => handleNavigation('/category2')}>Category 2: Travelling</button></li>
          <li><button onClick={() => handleNavigation('/category3')}>Category 3: Technologies</button></li>
          <li><button onClick={() => handleNavigation('/category4')}>Category 4: Health</button></li>
        </ul>
      </nav>

      <div>
        <h1>Welcome, {user}!</h1>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Change the subject to  {theme === 'light' ? 'dark' : 'light'}
        </button>
        <button onClick={() => setUser(user === "Mykola24" ? "User12345" : "Mykola24")}>
        Change user
        </button>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category1" element={<Category name="Food" />} />
        <Route path="/category2" element={<Category name="Travelling" />} />
        <Route path="/category3" element={<Category name="Technologies" />} />
        <Route path="/category4" element={<Category name="Health" />} />
      </Routes>

      <div className="debug">
        <h4>History of transitions:</h4>
        <ul>
          {history.map((path, index) => (
            <li key={index}>{path}</li> 
          ))}
        </ul>
      </div>
    </div>
  );
}

const Home = () => <h2>Home page</h2>;

const Category = ({ name }) => <h2>{name} category</h2>;

export default App;

