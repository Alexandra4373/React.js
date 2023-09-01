import React, { useState } from 'react';

const Welcome= ({ onLogIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogIn = () => {
    onLogIn({ username, password });
  };

  return (
    <div>
      <h2>Welcome</h2>
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
      <button onClick={handleLogIn}>Welcome</button>
    </div>
  );
};

export default Welcome;