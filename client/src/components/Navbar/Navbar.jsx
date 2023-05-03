import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/stackoverflow.svg';
import SearchIcon from '../../assets/search.svg';
import Avatar from '../Avatar/Avatar';
import '../Navbar/Navbar.css'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentUser } from '../../actions/currentUser';
import decode from 'jwt-decode'
function Navbar() {
    const dispatch = useDispatch()
    var User = useSelector((state) => (state.currentUserReducer));
    const navigate = useNavigate()
    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' });
        navigate('/')
        dispatch(setCurrentUser(null))
    }
    useEffect(() => {
        const token = User?.token
        if (token) {
            const decodedToken = decode(token)
            if (decodedToken.exp * 1000 < new Date().getTime()) {
                handleLogout();
            }
        }
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
    }, [User?.token, dispatch])
    return (
        <nav className='main-nav'>
            <div className='navbar'>
                <Link to='/' className='nav-item nav-logo'>
                    <img src={logo} width=' 150px ' height='30px' alt='logo' />
                </Link>
                <Link to='/' className='nav-item nav-btn'> About </Link>
                <Link to='/' className='nav-item nav-btn'> Products </Link>
                <Link to='/' className='nav-item nav-btn'> For Teams</Link>
                <form className='nav-item'>
                    <input type='test' placeholder='Search...'></input>
                    <img className='searchIcon' src={SearchIcon} alt='search' width='18px' />
                </form>
                {
                    User === null ?
                        <Link to='/Auth' className='nav-item nav-link' >Log in</Link> :
                        <>
                            <Avatar backgroundColor='#009dff' px='10px' py='5px' color='#fff' borderRadius='100px' > <Link to='/User' style={{ color: 'white', textDecoration: "none" }}>  {User.result.name.charAt(0).toUpperCase()} </Link></Avatar>
                            <button className='nav-link nav-item' onClick={handleLogout}>Log out</button>
                        </>
                }
            </div>
        </nav>
    )
}

export default Navbar

