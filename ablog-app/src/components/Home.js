import Sidebar from './Sidebar';
import NonSidebarContainer from './NonSidebarContainer';



const Home = () => {
    return(
        <div className='flex'>
            <Sidebar/>
            <NonSidebarContainer/>
        </div>
    )
};
export default Home;