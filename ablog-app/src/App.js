import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import { useSidebarContext } from './utils/SidebarContext';
import { FaBars } from "react-icons/fa6";

function App() {
  const { toggleSidebar, setToggleSidebar } = useSidebarContext();
  return (
    <div>
      <div className='flex'>
        <Sidebar/>
        <Navbar/> 
      </div>

        
    
    </div>
  );
}

export default App;


/*<div className='ml-60'>
          <div className={` transition-width ${toggleSidebar ? 'w-8' : 'w-12'} m-10 h-10 border-r-2 border-black bg-red-600`} >
          
          </div>
        </div> */