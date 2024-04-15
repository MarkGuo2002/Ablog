import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault(); // Prevent the form from submitting through the browser
    const response = await fetch('/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const data = await response.json();
    console.log(data);
    if (data.token) {
      localStorage.setItem('token', data.token);
      window.location.href = '/dashboard'; // Redirect to the Dashboard
    } else {
      alert('Login failed!');
    }
  };

  const handleRegister = async (event) => {
    event.preventDefault(); // Prevent the form from submitting through the browser
    const response = await fetch('/api/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const data = await response.json();
    console.log(data);
    console.log("hahahahaahhah");
    if (data.token) {
      localStorage.setItem('token', data.token);
      window.location.href = '/dashboard'; // Redirect to the Dashboard
    } else {
      alert('Registration failed!');
    }
  };

  return (
    <form className='flex gap-4 flex-col items-center justify-center'>
      <h1 className="text-red-500 text-2xl font-bold my-4">Login</h1>
      <div className='flex gap-2 items-center'>
        <label>Username</label>
        <input
          className='block w-32 p-2 border border-gray-300 rounded'
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
      />
      </div>
      <div className='flex gap-2 items-center'>
        <label>Password</label>
        <input
          className='block w-32 p-2 border border-gray-300 rounded'
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      </div>
      <div className='flex gap-6 items-center'>
        <button onClick={handleLogin} type="submit" className=" border-2 border-primaryStrong rounded-3xl px-4 py-2 text-black font-bold bg-primary hover:text-white hover:bg-primaryStrong duration-150 transition-all" >Login</button>
        <button onClick={handleRegister} type="submit" className=" border-2 border-primaryStrong rounded-3xl px-4 py-2 text-black font-bold bg-primary hover:text-white hover:bg-primaryStrong duration-150 transition-all" >Register</button>
      </div>
    </form>
  );
};

export default Login;
