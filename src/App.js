import React, { useState } from 'react';
import './App.css';
import SignUpForm from './SignUpForm'; // Corrected import path
import LogInForm from './LogInForm'; // Corrected import path

const App = () => {
  const [user, setUser] = useState(null);

  const handleSignUp = (userData) => {
    setUser(userData);
  };

  const handleLogIn = (userData) => {
    setUser(userData);
  };

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome, {user.username}!</h1>
          {/* Display logged-in user's content */}
        </div>
      ) : (
        <div>
          <SignUpForm onSignUp={handleSignUp} />
          <LogInForm onLogIn={handleLogIn} />
        </div>
      )}
    </div>
  );
};

export default App;
