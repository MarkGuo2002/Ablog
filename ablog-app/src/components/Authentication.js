import React, { useState } from 'react';

const Authentication = () => {
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
    setUsername('');
    setPassword('');
    if (data.token) {
      localStorage.setItem('token', data.token);
      window.location.href = '/home';
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
    //read the message from the server
    

    const data = await response.json();
    console.log(data);
    setUsername('');
    setPassword('');
    alert(data.msg);
  };

  return (
    <form className='flex gap-4 flex-col items-center justify-center h-screen'>
      <h1 className="text-black text-2xl font-bold my-4  text-center">Welcome! 👋 <br></br> Ready to become <span className=' text-primaryStrong'>Ablog</span>ger?</h1>
      <div className='flex gap-2 items-center'>
        <label className=' font-semibold'>Username</label>
        <input
          className='block w-32 p-2 border border-gray-300 rounded'
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
      />
      </div>
      <div className='flex gap-2 items-center'>
        <label className=' font-semibold'>Password</label>
        <input
          className='block w-32 p-2 border border-gray-300 rounded'
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      </div>
      <div className='mt-4 flex gap-6 items-center'>
        <button onClick={handleLogin} type="submit" className=" rounded-3xl px-4 py-2 text-white font-bold bg-primaryStrong hover:brightness-75 duration-150 transition-all" >Login</button>
        <button onClick={handleRegister} type="submit" className=" rounded-3xl px-4 py-2 text-white font-bold bg-primaryStrong hover:brightness-75 duration-150 transition-all" >Register</button>
      </div>
    </form>
  );
};

export default Authentication;
