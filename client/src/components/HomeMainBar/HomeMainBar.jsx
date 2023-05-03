// import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import './HomeMainBar.css'
import QuestionList from './QuestionList'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
// import { useEffect } from 'react'
// import axios from 'axios'
const HomeMainBar = () => {
    // const questionList = [{
    //     _id: 1,
    //     upVotes: 3,
    //     downVotes: 2,
    //     noOfAnswers: 0,
    //     questionTitle: "What is a function?",
    //     questionBody: "This is New Question",
    //     questionTags: ["Java", "node js", " c++ "],
    //     userPosted: "atha",
    //     userId: 1,
    //     askedOn: "jav 1",
    //     answer: [{
    //         answerBody: "answer",
    //         userAnswered: " kumar",
    //         answeredOn: "jan 2",
    //         userId: 2,

    //     }]
    // },
    // {
    //     _id: 1,
    //     upVotes: 3,
    //     downVotes: 2,
    //     noOfAnswers: 0,
    //     questionTitle: "What is a function?",
    //     questionBody: "This is New Question",
    //     questionTags: ["Java", "node js", " c++ "],
    //     userPosted: "atha",
    //     userId: 1,
    //     askedOn: "jav 1",
    //     answer: [{
    //         answerBody: "answer",
    //         userAnswered: " kumar",
    //         answeredOn: "jan 2",
    //         userId: 2,
    //     }]
    // }]
    const user = 1;
    const navigate = useNavigate();
    const location = useLocation()
    const questionsList = useSelector(state => state.questionsReducer)

    console.log(questionsList)



    const handleClick = () => {
        if (user === null) {
            alert('Log in or Sign up to ask a question.');
            navigate("/Auth");
        }

        else {
            navigate("/AskQuestion")
        }
        navigate('/Payment')
    }


    return (
        <div className='main-bar'>
            <div className='main-bar-header'>
                {
                    location.pathname === '/' ? <h1>Top Questions</h1> :
                        <h1>All Questions</h1>
                }

                <button className='ask-btn' onClick={handleClick}>Ask Question</button>
            </div>
            <div>
                {questionsList.data == null ?
                    <h1>Loading...</h1> :
                    <> <p>{questionsList.data.length} questions </p>
                        <QuestionList questionsList={questionsList.data} />
                    </>

                }
            </div>

        </div>
    )
}

export default HomeMainBar