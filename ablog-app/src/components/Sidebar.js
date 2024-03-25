import Logo from '../assets/logo.png';
import { FaNoteSticky } from "react-icons/fa6";

const Sidebar = () =>{
    return(
        <div className="fixed top-0 left-0 h-screen w-60 flex flex-col bg-white border-r-slate-200 border-r-2 shadow-lg">
            <img src={Logo} alt="Logo" className="w-10 h-10 m-4" />
            <SidebarIcon icon={ <FaNoteSticky size="28" /> } />

        </div>
    )
}

const SidebarIcon = ({ icon }) => (
    <div className='sidebar-icon'>
        {icon}
    </div>
)


export default Sidebar;