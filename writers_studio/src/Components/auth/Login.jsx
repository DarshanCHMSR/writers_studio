import React, { useState } from 'react';
import '../../css/signup.css'; 
import { useNavigate } from 'react-router-dom';
import {url} from '../data-link/url'; // Import the URL from the data-link file

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors

    try {
      const response = await fetch(`${url}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        // Save the auth token and redirect to the dashboard
        localStorage.setItem('auth-token', data.authtoken); // Save the auth token  
        localStorage.setItem('email', data.user.email); // Save email if needed
        localStorage.setItem('name', data.user.firstname); // Save name if needed
        navigate('/creator'); // Redirect to the dashboard or another page
      } else {
        setError(data.error || 'Invalid credentials');
      }
    } catch (err) {
      console.error('Error during login:', err);
      setError('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <p className="title">Login</p>
        <p className="message">Login now and get full access to our Writers Studio.</p>

        {error && <p className="error-message">{error}</p>}

        <label>
          <input
            className="input"
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span>Email</span>
        </label>

        <label>
          <input
            className="input"
            type="password"
            placeholder="Enter your password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span>Password</span>
        </label>

        <button className="submit" type="submit">Submit</button>
        <p className="signin">Do not have an account? <a href="/signup">Sign Up</a></p>
      </form>
    </div>
  );
};

export default Login;