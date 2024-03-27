import { FaMagnifyingGlass, FaMusic } from "react-icons/fa6";
import anya from "../assets/anya.jpg"

const Navbar = () => {
    return(
        <div className="wrapper ml-60 w-full h-20 shadow-sm flex items-center justify-between px-16">
                
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

const Profile = () => (
    <div>
        <img className="rounded-full w-14 h-14" src={anya}/>
    </div>
)