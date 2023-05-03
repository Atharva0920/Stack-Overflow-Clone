import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'
import Questions from '././pages/Questions/Questions'
import AskQuestion from './pages/AskQuestion/AskQuestion';
import DisplayQuestion from './pages/Questions/DisplayQuestion';
import Tags from './pages/Tags/Tags';
import Users from './pages/Users/Users'
import UserProfile from './pages/UserProfile/UserProfile'
import PayGate from './pages/AskQuestion/PayGate';

export const AllRoutes = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/Auth' element={<Auth />} />
            <Route exact path='/Questions' element={<Questions />} />
            <Route exact path='/AskQuestion' element={<AskQuestion />} />
            <Route exact path='/Questions/:id' element={<DisplayQuestion />} />
            <Route exact path='/Tags' element={<Tags />} />
            <Route path='/Users' element={<Users />} />
            <Route path='/Users/:id' element={<UserProfile />} />
            <Route path='/Payment' element={<PayGate />} />

        </Routes>

    )
}
