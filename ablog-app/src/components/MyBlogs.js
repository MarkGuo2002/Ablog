import Navbar from "./Navbar";
import bg from "../assets/bg.jpg"
import envelope from "../assets/envelope.png"
const MyBlogs = () => {
    //use useEffect to fetch data from the server, 
    return (
        <div className="bg-white dark:bg-night-800">
            <Navbar />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10 overflow-auto scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-100">
                <Blog title={"Ling"} date={"2004-12-12"} emoji={"💕"} portrait={bg} />
                
                
            </div>
        </div>
    );
};










const Blog = ( {title, date, emoji, portrait} ) => {
    return (
        <div>
            <div className="relative blog-card flex flex-col justify-center items-center group">
                    <div className=" w-72 h-48 overflow-hidden bg-transparent rounded-2xl flex justify-center items-center text-black">
                    <img src={portrait} alt="Card Image" className="w-full h-full object-cover brightness-75 rounded-xl size blur group-hover:blur-none group-hover:scale-110 group-hover:brightness-100 transition-all duration-300 ease-in-out" />
                        <p className=" absolute flex items-center justify-center bg-white p-2 rounded-full shadow-md group-hover:opacity-0 transition-all duration-300 ease-in-out">{emoji}</p>
                        <p className=" italic font-medium absolute mt-20 flex items-center justify-center group-hover:opacity-0 transition-all duration-300 ease-in-out">{date}</p>

                    </div>
                    <p className="flex justify-center opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 italic ">{title}</p>
                </div>
        </div>
    );
}




export default MyBlogs;