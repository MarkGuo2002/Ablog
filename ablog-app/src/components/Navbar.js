import Profile from "./Profile";
import { FaMagnifyingGlass, FaMusic } from "react-icons/fa6";


const Navbar = () => {
    return(
        <div className="wrapper w-full h-20 shadow-sm flex items-center justify-between px-36">           
                <SearchBar />
                <Profile />
        </div>
            
    )
}

export default Navbar;

const SearchBar = () => (
    <div className='searchbar-container flex items-center  justify-center w-5/12'>
        <input type='text' placeholder='Search Blogs' className='  w-full searchbar-input border-2 p-2 rounded-l-lg'/>
        <i className='bg-slate-200  p-3 rounded-r-lg  hover:text-primaryStrong duration-150 cursor-pointer'><FaMagnifyingGlass size='20' /></i>
    </div>
)

