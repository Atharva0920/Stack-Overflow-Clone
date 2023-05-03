import React, { useState } from 'react'
import { postAnswer, deleteQuestion, voteQuestion } from '../../actions/question';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import moment from 'moment'
import { useSelector, useDispatch } from 'react-redux';
import copy from 'copy-to-clipboard'
import './Questions.css';
import Avatar from '../../components/Avatar/Avatar';
import DisplayAnswer from './DisplayAnswer';

const QuestionDetails = () => {
    const { id } = useParams();
    const questionsList = useSelector(state => state.questionsReducer)
    const [Answer, setAnswer] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const User = useSelector((state) => (state.currentUserReducer))


    const handlePostAns = (event, answerLength) => {
        event.preventDefault()
        if (User === null) {
            alert('Log in or Sign up to answer a question')
            navigate('/Auth')
        }
        else {
            if (Answer === '') {
                alert('Enter an answer before submitting')

            } else {
                dispatch(postAnswer({ id, noOfAnswers: answerLength + 1, answerBody: Answer, userAnswered: User.result.name, userId: User.result._id }))
            }
        }
    }
    const location = useLocation();
    const url = 'http://localhost:3000';

    const handleShare = () => {
        copy(url + location.pathname)
        alert('Copied url :' + url + location.pathname);
    }

    const handleDelete = () => {
        dispatch(deleteQuestion(id, navigate))

    }
    const handleUpVote = () => {
        dispatch(voteQuestion(id, 'upVote', User.result._id))
    }

    const handleDownVote = () => {
        dispatch(voteQuestion(id, 'downVote', User.result._id))
    }




    return (

        <div className='question-details-page'>

            {
                questionsList.data === null ?
                    <h1>Loading...</h1> :
                    <div>
                        {
                            questionsList.data.filter(question => question._id === id).map(question => (

                                <div key={question._id}>
                                    <section className='question-details-container'>
                                        <h1>{question.questionTitle}</h1>
                                        <div className='question-details-container-2'>
                                            <div className="question-votes">
                                                <svg aria-hidden="true" className="votes-icon iconArrowUpLg" onClick={handleUpVote} width="36" height="36" viewBox="0 0 36 36"><path d="M2 25h32L18 9 2 25Z"></path></svg>
                                                <p>{question.upVote.length - question.downVote.length}</p>
                                                <svg aria-hidden="true" className="votes-icon iconArrowDownLg" onClick={handleDownVote} width="36" height="36" viewBox="0 0 36 36"><path d="M2 11h32L18 27 2 11Z"></path></svg>

                                            </div>
                                            <div style={{ width: "100%" }}>
                                                <p className='question-body'>{question.questionBody}</p>
                                                <div className="question-details-tags">
                                                    {
                                                        question.questionTags.map((tag) => (
                                                            <p key={tag}> {tag} </p>
                                                        ))
                                                    }
                                                </div>
                                                <div className='question-action-user'>
                                                    <div>
                                                        <button type='button' onClick={handleShare}>Share</button>
                                                        {
                                                            User?.result?._id === question?.userId && (
                                                                <button type='button' onClick={handleDelete}>Delete</button>
                                                            )
                                                        }
                                                    </div>
                                                    <div>
                                                        <p> asked {moment(question.askedOn).fromNow()} </p>
                                                        <Link to={`/User/${question.userId}`} className='user-link'>
                                                            <Avatar backgroundColor='orange' px="8px" py="5px">{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                                                            <div>
                                                                {question.userPosted}
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    {
                                        question.noOfAnswers !== 0 && (
                                            <section>
                                                <h3>{question.noOfAnswers} Answers</h3>
                                                <DisplayAnswer key={question._id} handleShare={handleShare} question={question} />
                                            </section>)
                                    }
                                    <section className='post-ans-container'>
                                        <h3>Your Answer</h3>
                                        <form onSubmit={(event) => handlePostAns(event, question.answer.length)} >
                                            <textarea cols='30' rows='10' onChange={(e) => { setAnswer(e.target.value) }}></textarea>
                                            <input type='submit' className='post-ans-btn' value='Post Your Answer' />
                                        </form>
                                        <p>
                                            Browse other Question tagged

                                            {
                                                question.questionTags.map((tag) => (
                                                    <Link to='/Tags ' key={tag} className='ans-tags'>{tag} </Link>
                                                ))
                                            } or
                                            <Link to='/AskQuestion' style={{ testDecoration: 'none', color: '#009dff' }}> ask your own qwestion</Link>
                                        </p>
                                    </section>

                                </div>
                            ))
                        }
                    </div>
            }
        </div>
    )
}


export default QuestionDetails