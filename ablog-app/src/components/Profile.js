import anya from "../assets/anya.jpg"
import { FaRightToBracket, FaRegCircleUser} from "react-icons/fa6";
import {useState} from 'react';

const Profile = () => {
    const  [displayDropdown, setDisplayDropdown] = useState(false);

    const handleDropdown = () => {
        setDisplayDropdown(!displayDropdown);
    }

    const handleSignOut = () => {
        localStorage.removeItem('token');
        window.location.href = '/authentication';
    }

    return(
    <div className="relative group">
        <img onClick={handleDropdown} className="rounded-full w-14 h-14 hover:scale-110 hover:brightness-90 transition-all duration-300" src={anya}/>
        <div className={`dark:bg-gray-300 dark:border-0 z-50 flex-col gap-2 absolute bg-white border border-gray-200 rounded-xl shadow-lg p-2 w-40 right-0 ${displayDropdown ? "opacity-100 translate-y-3 pointer-events-auto" : "opacity-0 pointer-events-none"} transition-all duration-200 ease-in-out`}>
            <div className="flex items-center justify-center gap-2 my-2 cursor-pointer text-black hover:text-primaryStrong transition-all ">
                <FaRegCircleUser size='20' />
                <a href="/account" className=" font-medium">Account</a>
            </div>

            <div className="flex items-center rounded justify-center gap-2 cursor-pointer text-primaryStrong hover:text-white hover:bg-primaryStrong hover:scale-105 transition-all durantion-200">
                <FaRightToBracket size='20'/>
                <a onClick={handleSignOut} className="font-medium cursor-pointer block p-2 py-2  ">Sign out</a>
            </div>

        </div>
    </div>
    );
}
export default Profile;