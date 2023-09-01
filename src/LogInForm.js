import React, { useState } from 'react';

const LogInForm = ({ onLogIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogIn = () => {
    onLogIn({ username, password });
  };

  return (
    <div>
      <h2>LogIn</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogIn}>Log In</button>
    </div>
  );
};

export default LogInForm;
