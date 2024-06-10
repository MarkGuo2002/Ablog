import Navbar from "./Navbar";
import bg from "../assets/bg.jpg"
import bg2 from "../assets/bg2.jpg"
import envelope from "../assets/envelope.png"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaPen, FaRegTrashCan } from "react-icons/fa6";
const MyBlogs = () => {
    //use useEffect to fetch blog data, title,, datem emoji... from the server,
    //then map through the data to display the blogs, pass the data as props to the Blog component
    //use the Blog component to display the blogs
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch('/api/blogs/retrieve', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const data = await response.json();
                console.log('data:', data);
                setBlogs(data);
            } catch (error) {
                console.error('Fetching failed:', error);
            }
        };
        fetchBlogs();

    }
    , [])

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`/api/blogs/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            console.log('data:', data);
            if (response.ok) {
                alert('Blog deleted successfully!');
                setBlogs(blogs.filter((blog) => blog.id !== id));
                window.location.href = '/my-blogs';
            } else {
                throw new Error('Failed to delete blog');
            }
        } catch (error) {
            console.error('Deleting failed:', error);
            alert('Error deleting blog');
        }
    }
    

    return (
        <div className="bg-white dark:bg-night-800">
            <Navbar />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10 overflow-auto scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-100">
                {
                blogs.map((blog) =>(
                <div key={blog.blog_id} className="blog-card-container relative group">
                    <Blog 
                        key={blog.blog_id}
                        title={blog.title}
                        date={blog.created_at.split('T')[0]}
                        emoji={decodeURI(blog.title_emoji)}
                        portrait={blog.portrait || bg2} 
                    />
                    <div className="opacity-0 group-hover:opacity-100 flex-col absolute top-1 right-32 space-y-2 p-2 transition-all">
                        <Link to={`/edit-blog/${blog.blog_id}`} className="shadow-md hover:brightness-100 brightness-75 flex items-center justify-center bg-night-800 text-white p-1 rounded-full">
                            <FaEye size='10' />
                            <p className=" font-semibold italic px-[2px]"> / </p>
                            <FaPen size='10'/>
                        </Link>
                        <button className="shadow-md bg-red-500 text-white p-2 rounded-full hover:brightness-100 brightness-75" onClick={() => handleDelete(blog.blog_id)}>
                            <FaRegTrashCan size='15'/>
                        </button>
                    </div>
                </div>
                ))
                }
                
                
                
            </div>
        </div>
    );
};

 







const Blog = ( {title, date, emoji, portrait} ) => {
    return (
        <div className="blog-card-container">
            <div className="relative blog-card flex flex-col justify-center items-center group">
                <div className=" w-72 h-48 overflow-hidden bg-transparent rounded-2xl flex justify-center items-center text-black dark:text-white">
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