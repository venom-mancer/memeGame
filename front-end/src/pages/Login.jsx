import React, { useState } from 'react';
import '../styles/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Login attempt with:', { email, password });
  };

  const handleGuestPlay = () => {
    // Add guest play logic here
    console.log('Playing as guest');
  };

  return (
    <div className="align">
      <div className="grid align__item">
        <div className="register">
          <img 
            src={process.env.PUBLIC_URL + '/funny-pepe-the-frog-meme-doodle.gif'} 
            alt="Meme Game Logo" 
            className="site__logo"
          />

          <h2>Welcome to Meme Game</h2>

          <div className="options-container">
            <div className="option-card login-option">
              <h3>Login as User</h3>
              <form onSubmit={handleLogin} className="form">
                <div className="form__field">
                  <input
                    type="email"
                    placeholder="Username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form__field">
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form__field">
                  <input type="submit" value="Login" />
                </div>
              </form>
              <p>Don't have an account? <a href="/signup">Sign Up</a></p>
            </div>

            <div className="option-card play-option">
              <h3>Play as Guest</h3>
              <p>Play the game without creating an account</p>
              <button className="play-button" onClick={handleGuestPlay}>
                Play Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login; 