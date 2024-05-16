import React, { useState } from 'react';
import Profile from "./Profile";
import TextEditor from "./TextEditor";

const MAX_FILE_SIZE = 30000; // 30KB

const NewBlog = () => {
    const [title, setTitle] = useState(''); // Add this line
    const [content, setContent] = useState('');
    const [emoji, setEmoji] = useState('👀'); // Add this line
    const [portrait, setPortrait] = useState('');
    const [fileName, setFileName] = useState('No image chosen'); // Add this line for the portrait status

    // Function to handle saving the content
    const saveContent = async () => {
        try {
        const response = await fetch('/api/blogs/save', { // Change the URL to your API endpoint
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, content, portrait, emoji }),
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

    // Function to handle file input
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && file.size < 20000) { // Check if the file is less than 20KB
            const reader = new FileReader();
            reader.onloadend = () => {
                setPortrait(reader.result); // Store the Base64 encoded string in state
                setFileName(file.name); // Update the portrait status
            };
            reader.readAsDataURL(file);
        } else {
            alert('File is too large. Please select a file less than 30KB.');
            setFileName('empty'); // Reset the portrait status if file is too large
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
                    <input type='text' placeholder='😊' maxLength={5} value={emoji} onChange={(e) => setEmoji(e.target.value)} 
                            className='dark:bg-night-900 p-2 dark:text-white text-night-900 bg-white border-2 w-12 h-10 font-bold text-xl  dark:border-gray-600 rounded-full'
                    />
                    <div className="ml-8 flex items-center space-x-2">
                        <label className="dark:text-white text-night-900 font-bold text-lg">Portrait:</label>
                        <label className="flex items-center bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-1 px-2 rounded-lg cursor-pointer">
                            <input 
                                type="file" 
                                accept="image/*" 
                                onChange={handleFileChange} 
                                className="hidden"
                            />
                            <span className="mr-2 overflow-hidden text-ellipsis whitespace-nowrap w-32">{fileName}</span>
                            <span className="bg-primaryStrong text-white py-1 px-2 rounded-lg">Choose File</span>
                        </label>
                    </div>
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