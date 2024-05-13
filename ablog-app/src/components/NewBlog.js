import React, { useState } from 'react';
import Profile from "./Profile";
import TextEditor from "./TextEditor";
const NewBlog = () => {
    const [title, setTitle] = useState(''); // Add this line
    const [content, setContent] = useState('');
    // Function to handle saving the content
    const saveContent = async () => {
        try {
        const response = await fetch('/api/blogs/save', { // Change the URL to your API endpoint
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, content }),
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
                <input type='text' placeholder='Untitled Blog' value={title} onChange={(e) => setTitle(e.target.value)} 
                       className='dark:bg-night-900 dark:text-white text-night-900 bg-white w-auto h-10 font-bold text-3xl dark:border-gray-600 rounded-lg'
                />
                <button onClick={saveContent} className="px-4 py-2 rounded-full bg-primaryStrong text-white hover:brightness-75 transition-all">
                    Save
                </button>    
                 
                
                <Profile />
        </div>
        <div className="dark:bg-night-800 bg-white">
            <TextEditor content={content} setContent={setContent}/>
        </div>
        
        </>
    );
    }


export default NewBlog;