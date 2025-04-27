import '../css/signup.css'; 


const Login = () => {

  return (
    <div className="container">
    <form class="form">
    <p class="title">Login </p>
    <p class="message">Login now and get full access to our Writers Studio. </p>
            
    <label>
        <input class="input" type="email" placeholder="" required=""/>
        <span>Email</span>
    </label> 
   
    
    <label>
        <input class="input" type="password" placeholder="" required=""/>
        <span>Password</span>
    </label>
    <label>
        <input class="input" type="password" placeholder="" required=""/>
        <span>Confirm password</span>
    </label>
    <button class="submit">Submit</button>
    <p class="signin">Do not have account ..? <a href="/signup">Sign Up</a> </p>
</form>
      </div>
  );
};

export default Login;