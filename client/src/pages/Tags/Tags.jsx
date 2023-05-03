import React from 'react'
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar'
import TagList from './TagList'
import './Tags.css'
const Tags = () => {
    const tagsList = [
        {   
            id: 1, 
            tagName: 'javascript', 
            tagDesc: 'A high-level programming language used mainly for web development.' },
        {
            id: 2, 
            tagName: 'java', 
            tagDesc: 'A popular, general-purpose programming language used for building enterprise-scale applications.' },
        {
            id: 3, 
            tagName: 'python', 
            tagDesc: 'A high-level, interpreted programming language used for a wide range of purposes, including web development, scientific computing, and artificial intelligence.' },
        { 
            id: 4, 
            tagName: 'c#', 
            tagDesc: 'A multi-paradigm programming language that runs on the .NET Framework and is commonly used for building Windows desktop applications and games.' },
        { 
            id: 5,
            tagName: 'php', 
            tagDesc: 'A server-side scripting language commonly used for web development.' },
        { 
            id: 6, 
            tagName: 'android', 
            tagDesc: 'An open-source mobile operating system based on the Linux kernel and developed by Google.' },
        { 
            id: 7, 
            tagName: 'jquery', 
            tagDesc: 'A fast, small, and feature-rich JavaScript library designed to simplify HTML DOM traversal and manipulation, as well as event handling, animation, and Ajax.' },
        { 
            id: 8, 
            tagName: 'html', 
            tagDesc: 'The standard markup language used to create web pages.' },
        { 
            id: 9, 
            tagName: 'css', 
            tagDesc: 'A style sheet language used for describing the look and formatting of a document written in HTML or XML.' },
        { 
            id: 10, 
            tagName: 'ios', 
            tagDesc: 'A mobile operating system created and developed by Apple Inc. exclusively for its hardware.' },
        // additional tags...
      ];
      
    return (
        <div className='home-container-1'>
            <LeftSideBar />
            <div className="home-container-2">
                <h1 className='tag-h1'>Tags</h1>
                <p className='tag-p'>A tag is a keyword or label that categorizes ypur question with other, similar questions. </p>
                <p className='tag-p'>Using the right tags makes it easier to find and answer your question.</p>
                <div className="tags-list-container">
                   { 
                        tagsList.map((tag) => (
                        <TagList tag ={tag} key={tagsList.id}/>
                        ))
                    }
                </div>
            </div>
        </div>


    )
                }

export default Tags