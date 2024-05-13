import Profile from "./Profile";
import { FaMagnifyingGlass, FaMusic } from "react-icons/fa6";


const Navbar = () => {
    return(
        <div className="dark:bg-night-900 bg-white wrapper w-full h-20 shadow-sm flex items-center justify-between px-36">           
                <SearchBar />
                <Profile />
        </div>
            
    )
}


const SearchBar = () => (
    <div className='searchbar-container flex items-center  justify-center w-5/12'>
        <input type='text' placeholder='Search Blogs' className='dark:bg-night-100 dark:text-black bg-white w-full searchbar-input dark:border-night-600 border-night-400 border-2 p-2 rounded-l-lg'/>
        <i className='dark:bg-night-600 bg-slate-400  p-3 rounded-r-lg  hover:text-primaryStrong duration-150 cursor-pointer'><FaMagnifyingGlass size='20' /></i>
    </div>
)


export default Navbar;