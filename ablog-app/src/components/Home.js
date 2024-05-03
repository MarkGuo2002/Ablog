import Sidebar from './Sidebar';
import NonSidebarContainer from './NonSidebarContainer';
import { Outlet } from 'react-router';
import { useSidebarContext } from '../utils/SidebarContext';



const Home = () => {
    const { toggleSidebar } = useSidebarContext();
    return(
        <div className='flex'>
            <Sidebar/>
            <div className={`${toggleSidebar ? "ml-60" : "ml-16"} bg-white h-screen w-screen transition-all duration-300 ease-in-out`}>
                <Outlet/>
            </div>
        </div>
    )
};
export default Home;