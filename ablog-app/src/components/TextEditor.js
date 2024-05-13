import React, { useState,useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill stylesheet for the "snow" theme

const TextEditor = ({ content, setContent}) => {
    
    const modules = {
        toolbar: [
          [{ 'font': ['sans-serif', 'serif', 'monospace'] }],
          [{ size: [] }],
          [{ 'color': [] }, { 'background': [] }],
          [{ 'align': [] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{'list': 'ordered'}, {'list': 'bullet'}],
          ['link', 'image'],
          ['clean']
        ]
      };
      
    useEffect(() => {
        const toolbar = document.querySelector('.ql-toolbar');
        if (toolbar) {
          toolbar.classList.add('bg-night-600', 'text-white');
        }
        const quillContainer = document.querySelector('.ql-container');
        if (quillContainer) {
          quillContainer.style.fontSize = 'large'; // Add this line to set the default font size to large
        }
      }, []);


  

  return (
    <div className='h-full flex flex-col'>
      <ReactQuill theme="snow" value={content} onChange={setContent} modules={modules} style={{ flexGrow: 1 }}/>

    </div>
  );
};

export default TextEditor;
