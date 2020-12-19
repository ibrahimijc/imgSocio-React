import React, { useState } from 'react';

function SignUp() {
  const [userName, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  function signUp(e) {
    e.preventDefault();
  }
  return (
    <div className="card">
      <div className="login-card">
        <h1>SignUp</h1>
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
        <label htmlFor="email">
          Email:
          <input
            id="email"
            type="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
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
        <label htmlFor="confirmPassword">
          Confirm Password:
          <input
            id="confirmPassword"
            type="password"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            value={confirmPassword}
          />
        </label>

        <input
          type="submit"
          value="Sign Up"
          onClick={(e) => {
            signUp(e);
          }}
        />
      </div>
    </div>
  );
}

export default SignUp;
