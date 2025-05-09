import React, { useState } from 'react';
import '../../css/signup.css'; 
import { useNavigate } from 'react-router-dom';
import { url } from '../data-link/url'; // Import the URL from the data-link file

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    cpassword: '',
    otp: '',
  });
  const [error, setError] = useState('');
  const [otpVerified, setOtpVerified] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validation for first name and last name length
    if (formData.firstName.length < 3) {
      setError('First name must be at least 3 characters long');
      return;
    }

    if (formData.lastName.length < 3) {
      setError('Last name must be at least 3 characters long');
      return;
    }

    // Validation for password length
    if (formData.password.length < 5) {
      setError('Password must be at least 5 characters long');
      return;
    }

    // Validation for matching passwords
    if (formData.password !== formData.cpassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await fetch(`${url}/api/auth/createuser`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstname: formData.firstName,
          lastname: formData.lastName,
          email: formData.email,
          password: formData.password,
          cpassword: formData.cpassword,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Redirect to login page after successful signup
        navigate('/login');
      } else {
        setError(data.error || 'Failed to register');
      }
    } catch (err) {
      console.error('Error during signup:', err);
      setError('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <p className="title">Register</p>
        <p className="message">Signup now and get full access to our Writers Studio.</p>

        {error && <p className="error-message">{error}</p>}

        <div className="flex">
          <label>
            <input
              className="input"
              type="text"
              name="firstName"
              placeholder="Enter your first name"
              required
              value={formData.firstName}
              onChange={handleChange}
            />
            <span>Firstname</span>
          </label>

          <label>
            <input
              className="input"
              type="text"
              name="lastName"
              placeholder="Enter your last name"
              required
              value={formData.lastName}
              onChange={handleChange}
            />
            <span>Lastname</span>
          </label>
        </div>

        <label>
          <input
            className="input"
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <span>Email</span>
        </label>

        <label>
          <input
            className="input"
            type="password"
            name="password"
            placeholder="Enter password"
            required
            value={formData.password}
            onChange={handleChange}
          />
          <span>Password</span>
        </label>

        <label>
          <input
            className="input"
            type="password"
            name="cpassword"
            placeholder="Confirm password"
            required
            value={formData.cpassword}
            onChange={handleChange}
          />
          <span>Confirm password</span>
        </label>

        <button className="submit" type="submit">
          Submit
        </button>
        <p className="signin">
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
};

export default SignUp;