import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Profile from "./Profile";
import TextEditor from "./TextEditor";
import { FaImage, FaMusic, FaCaretDown, FaFileImport, FaF } from 'react-icons/fa6';
const MAX_FILE_SIZE = 30000; // 30KB

const NewBlog = ({ pTitle, pContent, pEmoji }) => {
    const { blogId } = useParams();
    const [title, setTitle] = useState(''); // Add this line
    const [content, setContent] = useState('');
    const [emoji, setEmoji] = useState('👀'); // Add this line
    const [displayDropdown, setDisplayDropdown] = useState(false);
    // const [portrait, setPortrait] = useState('');
    // const [fileName, setFileName] = useState('Choose Portrait'); // Add this line for the portrait status
    // const [music, setMusic] = useState('');
    // const [musicName, setMusicName] = useState('Choose MP3'); // Add this line for the portrait status

    useEffect(() => {
        if (blogId) {
            // Realiza la solicitud para obtener los datos del blog a editar
            const fetchBlogDetails = async () => {
                try {
                    const response = await fetch(`/api/blogs/${blogId}`);
                    const data = await response.json();
                    console.log('data:', data);
                    setTitle(data.title);
                    setContent(data.content);
                    setEmoji(decodeURI(data.title_emoji));
                } catch (error) {
                    console.error('Error fetching blog details:', error);
                }
            };

            fetchBlogDetails();
        }
    }, [blogId]);

    const handleDropdown = () => {
        setDisplayDropdown(!displayDropdown);
    }

    // Function to handle saving the content
    const saveContent = async () => {
        try {
        const encodedEmoji = encodeURI(emoji);
        console.log('encodedEmoji:', encodedEmoji);
        
        const response = await fetch('/api/blogs/save', { // Change the URL to your API endpoint
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, content, emoji: encodedEmoji}),
        });
        const data = await response.json();
        console.log('data:', data);
        if (response.ok) {
            alert('Blog saved successfully!');
            console.log('Saved data:', data);
            window.location.href = '/my-blogs';
        } else {
            throw new Error('Failed to save blog');
        }
        } catch (error) {
        console.error('Saving failed:', error);
        alert('Error saving blog');
        }
    };


    // api call to save the blog, infos are Title, Body, Tags, Images, Music
    return (
        <>
        <div className="dark:bg-night-900 bg-white wrapper w-full h-20 shadow-sm flex items-center justify-between pl-12 pr-36">
                {/* Blog title input */}
                {/* <input type='text' placeholder='Untitled Blog' className='dark:bg-night-900 dark:text-white text-night-900 bg-white w-auto h-10 font-bold text-3xl dark:border-gray-600 rounded-lg'/> */}
                <div className='input-container flex gap-4'>
                    <input type='text' placeholder='Untitled Blog' value={title} onChange={(e) => setTitle(e.target.value)} 
                        className='dark:bg-night-900 dark:text-white text-night-900 bg-white max-w-40 h-10 font-bold text-2xl dark:border-gray-600 rounded-lg'
                    />
                    <input type='text' placeholder='😊' maxLength={8} value={emoji} onChange={(e) => setEmoji(e.target.value)} 
                            className='dark:bg-night-900 p-2 dark:text-white text-night-900 bg-white border-2 w-12 h-10 font-bold text-xl  dark:border-gray-600 rounded-full'
                    />

                    {/* <div className="relative group">
                        <div onClick={handleDropdown} className="flex gap-2 items-center justify-center font-semibold bg-primaryStrong rounded px-4 py-2 hover:scale-110 hover:brightness-90 transition-all duration-300">
                            <FaFileImport size='20'/>
                            <p>Media</p>
                            <FaCaretDown size='20' className={`${displayDropdown ? 'rotate-0' : '-rotate-90' } transition-all`} />
                        </div>

                        <div className={`dark:bg-gray-300 dark:border-0 z-50 flex-col gap-2 absolute bg-white border border-gray-200 rounded-xl shadow-lg p-2 left-0 ${displayDropdown ? "opacity-100 translate-y-3 pointer-events-auto" : "opacity-0 pointer-events-none"} transition-all duration-200 ease-in-out`}>
    

                        </div>
                    </div> */}



                    
                    <button onClick={saveContent} className="px-4 py-2 rounded-full bg-primaryStrong font-bold text-white hover:brightness-75 transition-all">
                        Save
                    </button>    
                </div>
                 
                
                <Profile />
        </div>
        <div className="dark:bg-night-800 bg-white">
            <TextEditor content={content} setContent={setContent}/>
        </div>
        
        </>
    );
    }


export default NewBlog;