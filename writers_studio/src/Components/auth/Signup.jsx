
import React from 'react';
import '../../css/signup.css'; 
const SignUp = () => {
  
    return (
      <div className="container">
    <form class="form">
    <p class="title">Register </p>
    <p class="message">Signup now and get full access to our Writers Studio. </p>
        <div class="flex">
        <label>
            <input class="input" type="text" placeholder="Enter your first name" required=""/>
            <span>Firstname</span>
        </label>

        <label>
            <input class="input" type="text" placeholder="Enter your last name" required=""/>
            <span>Lastname</span>
        </label>
    </div>  
            
    <label>
        <input class="input" type="email" placeholder="Enter your email " required=""/>
        <span>Email</span>
    </label> 
    <button class="otpsubmit">Get otp</button>

    <label>
        <input class="input" type="number" placeholder="Enter otp" required=""/>
        <span>Otp</span>
    </label>
    <button class="otpsubmit">Verify otp</button>

    <label>
        <input class="input" type="password" placeholder="Enter password" required=""/>
        <span>Password</span>
    </label>
    <label>
        <input class="input" type="password" placeholder="Confirm password" required=""/>
        <span>Confirm password</span>
    </label>
    <button class="submit">Submit</button>
    <p class="signin">Already have an acount ? <a href="/login">Login</a> </p>
</form>
      </div>
    );
  };
  
  export default SignUp;