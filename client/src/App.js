import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './scenes/login/LoginPage';
import UserPage from './scenes/user/UserPage';
import AdminPage from './scenes/admin/AdminPage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/user" element={<UserPage/>} />
          <Route path="/admin" element={<AdminPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
