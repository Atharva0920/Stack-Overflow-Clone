import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import icon from '../../assets/icon.svg'
import AboutAuth from './AboutAuth'
import './Auth.css'
import { signup, login } from '../../actions/auth'


const Auth = () => {

    const [isSignup, setIsSignup] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSwitch = () => {
        setIsSignup(!isSignup);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!email && !password) {
            alert("Enter email and password")
        }
        if (isSignup) {
            if (!name) {
                alert("Enter a name to continue")
            }
            dispatch(signup({ name, email, password }, navigate))
        } else {
            dispatch(login({ email, password }, navigate))
        }


    }
    return (
        <section className='auth-section'>
            {isSignup && <AboutAuth />}
            <div className='auth-container'>
                {!isSignup && <img src={icon} width='32px' height='37px' alt='stack overflow' className='login-logo'></img>}

                <form onSubmit={handleSubmit}>
                    {
                        isSignup && (
                            <label htmlFor='name'>
                                <h4 className='display'>Display Name</h4>
                                <input type='text' id='name' onChange={(e) => { setName(e.target.value) }}></input>
                            </label>)
                    }
                    <label htmlFor='email'>
                        <h4 className='display'>Email</h4>
                        <input type='email' id='email' onChange={(e) => { setEmail(e.target.value) }}></input>
                    </label>

                    <label htmlFor='password' >
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <h4 className='display'>Password</h4>
                            <p style={{ fontSize: '12px', color: 'hsl(206,100%,52%)' }}>{!isSignup && 'Forgot password?'}</p>
                        </div>
                        <input type='password' id='password' onChange={(e) => { setPassword(e.target.value) }}></input>
                    </label>


                    {
                        isSignup && <p className='caption' style={{ color: 'hsl(210,8%,45%)', display: 'flex' }}>
                            Passwords must contain at least eight <br /> characters,including at least 1 letter and <br /> 1 number.
                        </p>
                    }

                    {
                        isSignup && (
                            <label htmlFor='check' style={{ display: 'flex' }}>
                                <input style={{ marginBottom: '28px' }} type='checkbox' id='check' />
                                <p className='caption'>Opt-in to receive occasional product <br />updates, user research invitations, <br />company announcements, and digests.</p>
                            </label>
                        )


                    }

                    <button type='submit' className='auth-btn'>{isSignup ? "Sign up" : "Log in"}</button>


                    {
                        isSignup && (
                            <p className='caption' style={{ color: 'hsl(210,8%,45%)' }}>By clicking “Sign up”, you agree to our
                                <a href='https://stackoverflow.com/legal/terms-of-service/public' target='_blank' rel="noreferrer" > terms of <br />service</a>,
                                <a href='https://stackoverflow.com/legal/privacy-policy' target='_blank' rel="noreferrer" > privacy policy</a> and
                                <a href='https://stackoverflow.com/legal/privacy-policy' target='_blank' rel="noreferrer" > cookie policy</a></p>
                        )
                    }
                </form>
                <p style={{ fontSize: '12px' }}>
                    {isSignup ? 'Already have an account?' : "Don't have an account?"}
                    <button type='button' className='handle-switch-btn' onClick={handleSwitch}>{isSignup ? "Log in" : "Sign up"}</button>
                </p>

            </div>
        </section>
    )
}

export default Auth