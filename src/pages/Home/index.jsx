import React,{useState,useCallback} from "react";
import { useNavigate } from "react-router-dom";
import textboxbut from "./textboxbut.css";
import logo from './forze3.png';


const HomePage =()=>{
    
    const [value, setValue]=useState('');

    const navigate=useNavigate()

    const handleJoinRoom = useCallback(()=>{
        navigate(`/room/${value}`);
    },[navigate,value]);

    const handleChange = (e) => {
        setValue(e.target.value);
      };


    return(
        
        <div class="containerarp">
            <img class="logobro" src={logo} alt="Logo" />
            <form onSubmit={handleJoinRoom}>
            <input type="text" class="input-boxarp" placeholder="Enter roomcode" value={value}
        onChange={handleChange}></input>
            <button class="submit-buttonarp" onClick={handleJoinRoom}>Join</button>
            </form>
        </div>
    )
}


export default HomePage;
