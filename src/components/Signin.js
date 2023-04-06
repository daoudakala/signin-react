
import React from "react";
import { useState, useEffect } from "react";
import logo from "../assets/logo/logo-alaxione.png";
import iconPlus from"../assets/images/plusicon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function Signin(){

  const [changePassword, setChangePassword] = useState(true);
  const changeIcon = changePassword === true ? false : true;  
  const [changeColor, setChangeColor] = useState(false);

  const handleClick = () =>{
    setChangeColor(!changeColor);
  }
  const handleLoad = () =>{
    const  el = document.getElementById('form')
  }
  useEffect(()=>{
    
  }
  )
  return(
    <div className="hello">
        <div className="iconplus">
          <img  src={iconPlus} onClick={handleLoad} alt="plus icon" width="50px"/>
        </div>
        <h1 className="titre">Bienvenue</h1>
        <div className="form" >
          <form onClick={handleClick} id="form" className={`bg-white ${(changeColor === true)? 'bg-green': 'bg-blue'}`}>
          <br/>
            <div className="form-elem">
            <div className="email">
              <input
                type="email"
                placeholder="Adresse e-mail"
                className="input-form"
              />
            </div>
            <br/>
            <div className="password">
              <input
                type={changePassword ? "password" : "text"}
                name="password"
                placeholder="Mot de passe"
                className="input-form pass"
              />
              <span onClick={() => {
                    setChangePassword(changeIcon);
                 }}>{changeIcon ? <FontAwesomeIcon icon={faEyeSlash} className="iconEye"/>: <FontAwesomeIcon icon={faEye} className="iconEye"/>}</span>
            </div>
            <div className="forget">
              <a href="?">Mot de passe oublié</a>
            </div>
            <br/><br/><br/>
            <div className="submit">
              <input
                type="submit"
                value="Se connecter"
                className="input-btn"
              />
            </div>
            </div>
          </form>
          <div className="logo-footer">
          <img src={logo} alt="logo footer"  width='200px'/>
        </div>
        </div>
    </div>
  )
}

export default Signin