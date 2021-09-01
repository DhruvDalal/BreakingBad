import React from 'react'
import "../App.css";
import logo from '../img/logo.png';
import Loader from 'react-loader-spinner';


const LoadingScreen = () => {
    return (
        <div className="screen">
            <img src={logo} alt="logo" className="logo"/>
            <Loader type="Bars" color="red" height={80} width={80} />
        </div>
    )
}

export default LoadingScreen
