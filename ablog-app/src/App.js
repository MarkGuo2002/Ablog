import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

function App() {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  return (
    <div className='flex'>
      <Sidebar toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar}/>
      <Navbar toggleSidebar={toggleSidebar}/>
    </div>
  );
}

export default App;
