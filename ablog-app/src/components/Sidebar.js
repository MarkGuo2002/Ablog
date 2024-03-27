import { useSidebarContext } from '../utils/SidebarContext';

import Logo from '../assets/logo.png';
import { FaNoteSticky, FaNotesMedical, FaBars, FaPalette, FaRegClipboard, FaRegEnvelope,
        FaRegTrashCan, FaMoon, FaRightToBracket, FaRegImage, FaRegCircleUser, FaMagnifyingGlass, FaMusic} from "react-icons/fa6";
/*
FaFile FaRegEnvelope
*/
const Sidebar = () =>{
    const { toggleSidebar, setToggleSidebar } = useSidebarContext();
    return(
        <div className={`${toggleSidebar ? 'w-60' : 'w-18'}  block fixed top-0 left-0 h-screen flex flex-col border-r-2 border-[#f5f5f5] bg-white transition-all duration-300 ease-in-out`} >
            <div className='logo-burger flex justify-start items-center px-4 pt-6 pb-2'>
                <div className={`${toggleSidebar ? 'block' : 'hidden'} flex items-center`}>
                    <img src={Logo} alt="Logo" className="w-8 h-8" />
                    <p className= 'text-3xl text-primaryStrong font-bold italic ml-4 bg-gradient-to-r from-slate-200 to-primaryStrong text-transparent bg-clip-text'>Ablog</p>
                </div>
                
                <i  className='ml-auto hover:rotate-90  hover:text-primaryStrong duration-200 ease-out p-1 bg-slate-200 rounded cursor-pointer'
                    onClick={ () => setToggleSidebar(!toggleSidebar)}><FaBars size='20' />
                </i>
            </div>


            <div className='new-blog flex flex-col gap-2 items-center mt-8 group cursor-pointer'>
                <i className='bg-primaryStrong text-white p-4 rounded-full group-hover:bg-selectedPrimaryStrong group-hover:text-primary duration-200'><FaNotesMedical size='20' /></i>
                <p className={`${!toggleSidebar && 'hidden'} font-bold parent-selected`}>New Blog</p>
            </div>


            <div className='sidebar-options-container flex flex-col items-center justify-center gap-1 mt-5' >
                <SidebarOption icon={ <FaRegEnvelope size='20'/>} text='My Blogs' number='12'/>
                <SidebarOption icon={ <FaRegClipboard size='20'/>} text='Drafts' number='1'/>
                <SidebarOption icon={ <FaRegTrashCan size='20'/>} text='Trash' number='3'/>
                <SidebarOption icon={ <FaPalette size='20'/>} text='Personalize'/>
            </div>

            <NightMode />
            

        </div>
    )
}

// `${!toggleSidebar && 'hidden'}`

const SidebarOption = ({ icon, text, number = "" }) => {
    const { toggleSidebar } = useSidebarContext();
    return (
        <div className='sidebar-option group'>
            <div className='sidebar-icon flex content-center justify-center text-black group-hover:rotate-12 group-hover:translate-x-1 group-hover:text-primaryStrong duration-100'>
                {icon}
            </div>
            <div className={`ml-5 font-semibold ${!toggleSidebar && 'hidden'}`}>
                {text}
            </div>
            <div className={`text-slate-500 ml-auto mr-4 ${!toggleSidebar && 'hidden'}`}>
                {number}
            </div>
        </div>
    );
};


const NightMode = () => {
    <div className='mt-auto bg-slate-200 p-4 flex items-center justify-center cursor-pointer hover:bg-slate-800 group'>
                <i className='text-black group-hover:text-white duration-300'>
                    <FaMoon size='24'/>
                </i>
                <p className=' text-lg ml-4 group-hover:text-white duration-300'>Night Mode</p>
            </div>
}

export default Sidebar;