import React, { useState } from 'react';
import axios from 'axios';
import './login.css';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
    mobile: '',
    address: '',
  });
  const [isLogin, setIsLogin] = useState(true);

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleLoginSubmit = async(e) => {
    e.preventDefault();
    // Implement login logic and API request here
    try {
      const response = await axios.post("http://localhost:5000/login", loginData);
      //console.log(response.status);
      if (response.status === 200) {
        setLoginData(
          { email: '', password: '' }
        )
        alert(response.data.message);
       
        if (loginData.email === 'admin@gmail.com' && loginData.password === "admin") {
          navigate('/admin'); // Redirect to /admin if email is 'admin@gmail.com'
        } else {
          navigate('/user'); // Redirect to /user for other email addresses
        }
      }
      else
      {
        alert("in else");
      }

    }
    catch (err) {
      console.log(err);
      alert("Error occured try again");
    }
    console.log('Login data:', loginData);
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    // Implement registration logic and API request here
    try {
      const response = await axios.post('http://localhost:5000/createuser', registerData);
      if (response.status === 200) {
        setRegisterData({
          name: '',
          email: '',
          password: '',
          mobile: '',
          address: ''
        })
        alert(response.data.message);
      }

      console.log('Register data:', registerData);
    }
    catch (err) {
      console.log("err");
      alert("some error, try again")
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="login">
      <div className="form-container">
        {isLogin ? (
          <form onSubmit={handleLoginSubmit}>
            <h2>Login</h2>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={loginData.email}
              onChange={handleLoginChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={loginData.password}
              onChange={handleLoginChange}
              required
            />
            <button type="submit">Login</button>
            <p onClick={toggleForm}>Don't have an account? Sign Up</p>
          </form>
        ) : (
          <form onSubmit={handleRegisterSubmit}>
            <h2>Sign Up</h2>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={registerData.name}
              onChange={handleRegisterChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={registerData.email}
              onChange={handleRegisterChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={registerData.password}
              onChange={handleRegisterChange}
              required
            />
            <input
              type="text"
              name="mobile"
              placeholder="Mobile Number"
              value={registerData.mobile}
              onChange={handleRegisterChange}
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={registerData.address}
              onChange={handleRegisterChange}
              required
            />
            <button type="submit">Sign Up</button>
            <p onClick={toggleForm}>Already have an account? Login</p>
          </form>
        )}
      </div>
    </div>
  );
}

export default LoginPage;
