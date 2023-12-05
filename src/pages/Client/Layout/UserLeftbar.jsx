import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function GameNav() {
    const [isLoggedIn, setIsLoggedIn] = useState(Cookies.get('isLoggedIn') === 'true');
    const navigate = useNavigate();


    const userlogout = () => {
        Cookies.remove('isLoggedIn');
        setIsLoggedIn(false);
        navigate('/login');
    };

    const routegame = () => {
        navigate('/dashboard/games');
    };
    const routeadd = () => {
        navigate('/dashboard/games/add')
    }
    return (
        <>
            <div className='game-sidenav'>
                <div className='game-nav-container'>
                    <button className="button-m-x mb-1 layout-nav" onClick={routegame}>
                        <span>View Games</span>
                        <div className="top green"></div>
                        <div className="left green"></div>
                        <div className="bottom green"></div>
                        <div className="right green"></div>
                    </button>
                    <button className="button-m-x mb-1 layout-nav" onClick={routeadd}>
                        <span>Add Game</span>
                        <div className="top green"></div>
                        <div className="left green"></div>
                        <div className="bottom green"></div>
                        <div className="right green"></div>
                    </button>
                </div>
                <button className="button-m-x game-nav-logout-button  layout-nav" onClick={userlogout}>
                    <span>Logout</span>
                    <div className="top red"></div>
                    <div className="left red"></div>
                    <div className="bottom red"></div>
                    <div className="right red"></div>
                </button>
            </div>
        </>
    );
}