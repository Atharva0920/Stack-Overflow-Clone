import React from 'react'
import './AskQuestion.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { askQuestion } from '../../actions/question'
const AskQuestion = () => {
    const [questionTitle, setQuestionTitle] = useState('');
    const [questionBody, setQuestionBody] = useState('');
    const [questionTags, setQuestionTags] = useState('');

    const dispatch = useDispatch()
    const User = useSelector((state) => (state.currentUserReducer))
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(askQuestion({ questionTitle, questionBody, questionTags, userPosted: User.result.name, userId: User?.result?._id }, navigate))
    }
    const handleEnter = (e) => {
        if (e.keyCode === 13) {
            setQuestionBody(questionBody + "\n")
        }
    }
    return (
        <div className='ask-question'>
            <div className='ask-question-container'>

                <h1 style={{ margin: 'auto' }}>
                    Ask a Public Question
                </h1>
                <div>
                    <div className='que-format'>

                        <h2>Writing a good question</h2>
                        <p>You're ready to ask a programming-related question and this form will help guide you through the process.
                            <br />Looking to ask a non-programming question? See the topics here to find a relevant site.</p>
                        <h5>Steps</h5>
                        <ul>
                            <li>Summarize your problem in a one-line title.</li>
                            <li>Describe your problem in more detail.</li>
                            <li>Describe what you tried and what you expected to happen.</li>
                            <li>Add “tags” which help surface your question to members of the community.</li>
                            <li>Review your question and post it to the site.</li>
                        </ul>
                    </div>
                    <div className='title-format'>

                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='ask-form-container'>
                        <label htmlFor="ask-question-title">
                            <h4>Title</h4>
                            <p>Be specific and imagine you're asking a question to another person.</p>
                            <input type="text" id='ask-question-title' onChange={(e) => setQuestionTitle(e.target.value)} placeholder='e.g. Is there an R function for finding the index of an element in a vector?' />
                        </label>

                        <label htmlFor="ask-question-body">
                            <h4>Body</h4>
                            <p>Include all the information someone would need to answer your question</p>
                            <textarea id='ask-question-body' onChange={(e) => { setQuestionBody(e.target.value) }} onKeyDown={handleEnter}></textarea>
                        </label>

                        <label htmlFor="ask-question-tags">
                            <h4>Tags</h4>
                            <p>Be specific and imagine you're asking a question to another person.</p>
                            <input type="text" id='ask-question-tags' onChange={(e) => { setQuestionTags(e.target.value.split(" ")) }} />
                        </label>

                    </div>
                    <input type="submit" value="Review your question" className='review-btn' />
                </form>
            </div>

        </div>
    )
}

export default AskQuestion