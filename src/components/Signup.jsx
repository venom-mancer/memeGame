import React, { useState } from 'react';
import '../styles/Signup.css';  
import { useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login API call here
    console.log('Logging in with:', { email, password });
    // After successful login, navigate to game
    navigate('/game');
  };

  const handleGuestPlay = () => {
    // Handle guest play logic here
    console.log('Starting game as guest');
    navigate('/game');
  };

  return (
    <div className="align">
      <div className="grid align__item">
        <div className="register">
          <img 
            src="/front-end/images & gifs/funny-pepe-the-frog-meme-doodle.gif" 
            alt="Meme Game Logo" 
            className="site__logo"
          />

          <h2>Welcome to Meme Game</h2>

          <div className="forms-container">
            <div className="form-card login-form">
              <h3>Login to Play</h3>
              <form className="form" onSubmit={handleLogin}>
                <div className="form__field">
                  <div className="input-group">
                    <span className="input-group-text">
                      <FaUser className="input-icon" />
                    </span>
                    <input
                      type="text"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="form__field">
                  <div className="input-group">
                    <span className="input-group-text">🔒</span>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="form__field">
                  <input type="submit" value="Login" />
                </div>
              </form>
            </div>

            <div className="form-card guest-form">
              <h3>Play as Guest</h3>
              <div className="guest-play">
                <p>Want to try the game without creating an account?</p>
                <button className="play-button" onClick={handleGuestPlay}>
                  Play meme Game
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
