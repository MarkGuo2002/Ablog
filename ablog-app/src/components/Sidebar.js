import Logo from '../assets/logo.png';
import { FaNoteSticky, FaNotesMedical, FaBars, FaPalette, FaRegClipboard, FaRegEnvelope,
        FaRegTrashCan, FaMoon, FaRightToBracket, FaRegImage, FaRegCircleUser, FaMagnifyingGlass, FaMusic} from "react-icons/fa6";
/*
FaFile FaRegEnvelope
*/
const Sidebar = () =>{
    return(
        <div className="fixed top-0 left-0 h-screen w-60 flex flex-col bg-white border-r-slate-200 border-r-2 shadow-lg">
            <div className='logo-burger flex justify-start items-center px-4 pt-6 pb-2'>
                <div className='flex items-center'>
                    <img src={Logo} alt="Logo" className="w-12 h-12" />
                    <p className=' text-3xl text-primaryStrong font-bold italic mx-2 bg-gradient-to-r from-slate-200 to-primaryStrong text-transparent bg-clip-text'>Ablog</p>
                </div>
                <i className='ml-auto hover:rotate-90  hover:text-primaryStrong duration-200 ease-out p-1 bg-slate-200 rounded'><FaBars size='20' /></i>
            </div>


            <div className='new-blog flex flex-col gap-2 items-center mt-8 group cursor-pointer'>
                <i className='bg-primaryStrong text-white p-4 rounded-full group-hover:bg-selectedPrimaryStrong duration-200'><FaNotesMedical size='32' /></i>
                <p className=' font-bold parent-selected'>New Blog</p>
            </div>


            <div className='sidebar-options-container flex flex-col items-center justify-center gap-1 mt-5' >
                <SidebarOption icon={ <FaRegEnvelope/>} text='My Blogs' number='12'/>
                <SidebarOption icon={ <FaRegClipboard/>} text='Drafts' number='1'/>
                <SidebarOption icon={ <FaRegTrashCan/>} text='Trash' number='3'/>
                <SidebarOption icon={ <FaPalette/>} text='Personalize'/>
            </div>

            <NightMode />
            

        </div>
    )
}

// const SidebarIcon = ({ icon }) => (
//     <div className='sidebar-icon'>
//         {icon}
//     </div>
// )


//<SidebarIcon icon={ <FaNoteSticky size="28" /> } />

const SidebarOption = ({ icon, text, number = "" }) => (
    <div className='sidebar-option group'>
        <div className='sidebar-icon flex content-center text-black group-hover:rotate-12 group-hover:translate-x-1 group-hover:text-primaryStrong duration-100 mr-5'   >
            {icon}
        </div>
        <div className='font-semibold'>
            {text}
        </div>
        <div className=' text-slate-500 ml-auto mr-4'>
            {number}
        </div>
    </div>
)

const NightMode = () => (
    <div className='mt-auto bg-slate-200 p-4 flex items-center justify-center cursor-pointer hover:bg-slate-800 group'>
                <i className='text-black group-hover:text-white duration-300'>
                    <FaMoon size='24'/>
                </i>
                <p className=' text-lg ml-4 group-hover:text-white duration-300'>Night Mode</p>
            </div>
)

export default Sidebar;