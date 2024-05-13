import { useSidebarContext } from '../utils/SidebarContext';
import { useTheme } from '../utils/ThemeProvider';
import { Link, useLocation } from 'react-router-dom';

import Logo from '../assets/logo.png';
import { FaNoteSticky, FaNotesMedical, FaBars, FaPalette, FaRegClipboard, FaRegEnvelope,
        FaRegTrashCan, FaMoon, FaRightToBracket, FaRegImage, FaRegCircleUser, FaMagnifyingGlass, FaMusic, FaSun} from "react-icons/fa6";
/*
FaFile FaRegEnvelope
*/
const Sidebar = () =>{
    const { toggleSidebar, setToggleSidebar } = useSidebarContext();
    return(
        <div className={` dark:bg-night-900 transition-width duration-300 ease-in-out ${toggleSidebar ? 'w-60' : 'w-16'}  fixed top-0 left-0 h-screen flex flex-col border-r-2 border-[#f5f5f5] dark:border-r-0 bg-white`} >
            <div className=' logo-burger flex justify-start items-center px-4 pt-6 pb-2'>
                <div className={`${toggleSidebar ? 'block' : 'hidden'} flex items-center`}>
                    <img src={Logo} alt="Logo" className="w-8 h-8" />
                    <p className= 'text-3xl text-primaryStrong font-bold italic ml-4 bg-gradient-to-r from-slate-200 to-primaryStrong text-transparent bg-clip-text'>Ablog</p>
                </div>
                
                <i  className='dark:bg-night-300 ml-auto hover:rotate-90  hover:text-primaryStrong duration-200 ease-out p-1 bg-slate-200 rounded cursor-pointer'
                    onClick={ () => setToggleSidebar(!toggleSidebar)}><FaBars size='20' />
                </i>
            </div>


            <Link to='/new-blog' className='new-blog flex flex-col gap-2 items-center mt-8 group cursor-pointer'>
                <i className='bg-primaryStrong text-white p-4 rounded-full group-hover:bg-selectedPrimaryStrong group-hover:text-primary duration-200'><FaNotesMedical size='20' /></i>
                <p className={`${!toggleSidebar && 'hidden'} font-bold parent-selected`}>New Blog</p>
            </Link>


            <div className='sidebar-options-container flex flex-col items-center justify-center gap-1 mt-5' >
                <SidebarOption icon={ <FaRegEnvelope size='20'/>} text='My Blogs' number='12' to='/my-blogs'/>
                {/* <SidebarOption icon={ <FaRegClipboard size='20'/>} text='Drafts' number='1' to='/drafts'/> */}
                <SidebarOption icon={ <FaRegTrashCan size='20'/>} text='Trash' number='3' to='/trash'/>
                <SidebarOption icon={ <FaPalette size='20'/>} text='Personalize' to='/personalize'/>
            </div>
            
            <NightMode />
            

        </div>
    )
}

// `${!toggleSidebar && 'hidden'}`

const SidebarOption = ({ icon, text, number = "", to }) => {
    const { toggleSidebar } = useSidebarContext();
    const location = useLocation();
    const isActive = location.pathname === to ? 'bg-primary' : '';
    return (
        <Link to={to} className={`${isActive} sidebar-option flex justify-center content-center group dark:text-white dark:bg-night-900`}>
            <div className='dark:text-white sidebar-icon flex content-center justify-center text-black group-hover:rotate-12 group-hover:translate-x-1 group-hover:text-primaryStrong duration-100'>
                {icon}
            </div>
            <div className={`dark:text-white ml-5 font-semibold text-black group-hover:text-primaryStrong group-hover:translate-x-1 duration-100   ${!toggleSidebar && 'hidden'}`}>
                {text}
            </div>
            <div className={`dark:text-white text-slate-500 ml-auto mr-4 ${!toggleSidebar && 'hidden'}`}>
                {number}
            </div>
        </Link>
    );
};
// 

const NightMode = () => {
    const { theme, toggleTheme } = useTheme();
    const { toggleSidebar } = useSidebarContext();
    const string = theme==='dark' ? 'Night Mode' : 'Day Mode';
    const icon = theme==='dark' ? <FaSun size='24'/> : <FaMoon size='24'/>;
    return(
    <div onClick={toggleTheme} className='dark:bg-night-800 mt-auto bg-slate-200 p-4 flex items-center justify-center cursor-pointer group'>
                <i className='dark:text-gray-50 text-black group-hover:text-gray-500 duration-300'>
                    {icon}
                </i>
                <p className={` ${!toggleSidebar && 'hidden'} text-lg ml-4 group-hover:text-gray-500 duration-300`}>{string}</p>
    </div>
    );
};

export default Sidebar;