import React, { useState } from 'react';

function SignIn() {
  const [userName, setName] = useState('');
  const [password, setPassword] = useState('');

  function logIn() {}
  return (
    <div className="card">
      <div className="login-card">
        <h1>Login</h1>
        <label htmlFor="userName">
          UserName:
          <input
            id="userName"
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={userName}
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            id="password"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
        </label>
        <input
          type="submit"
          value="Login"
          onClick={() => {
            logIn();
          }}
        />
      </div>
    </div>
  );
}

export default SignIn;
