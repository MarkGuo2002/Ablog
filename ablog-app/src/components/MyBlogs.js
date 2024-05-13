import Navbar from "./Navbar";

const MyBlogs = () => {
    //use useEffect to fetch data from the server, 
    return (
        <div>
            <Navbar />
            <h1>My Blogs</h1>
            <div className="grid grid-cols-3 gap-4">
                <div className="blog-card flex flex-col justify-center items-center">
                    <div className=" w-72 h-48 bg-slate-300 rounded flex justify-center items-center text-black">

                    </div>
                    <p className="flex justify-center">hello</p>
                </div>
            </div>
        </div>
    );
};

const blog = ( {title, date} ) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{date}</p>
        </div>
    );
}




export default MyBlogs;