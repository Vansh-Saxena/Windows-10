import React, {Component} from 'react';
import './RemainTaskbar.css';
import {useState} from 'react';
import { render } from '@testing-library/react';
import DatePicker from 'react-datepicker';  
import 'react-datepicker/dist/react-datepicker.css'

const RemainTaskbar = () => {
        let time = new Date().toLocaleTimeString();
        const UpdateTime = () => {
            time = new Date().toLocaleTimeString();
            setCtime(time);
        }
        setInterval(UpdateTime, 1000)
        const [ctime, setCtime] = useState(time);

        const [selectedDate, setSelectedDate] = useState(null);  

        let d = new Date(); 
        return(
            <div>
                <div id="bspace" className="color">
                </div>
                <div id="remain">
                <button id="Moreicon" className="color2">
                    <a href="www.youtube.com" target="_blank">
                    <img src="https://img.icons8.com/small/16/ffffff/long-arrow-up.png" alt="file explorer"width="22px" height="20px"></img>
                    </a>
                </button>
                <button id="Meet" className="color2">
                    <a href="www.youtube.com" target="_blank">
                    <img src="https://img.icons8.com/plasticine/100/ffffff/google-meet.png" alt="file explorer"width="25px" height="24px"></img>
                    </a>
                </button>
                <button id="drive" className="color2">
                    <a href="www.youtube.com" target="_blank">
                    <img src="https://img.icons8.com/pastel-glyph/64/ffffff/cloud--v2.png" alt="file explorer"width="20px" height="19x"></img>
                    </a>
                </button>
                <button id="wifi" className="color2">
                    <a href="www.youtube.com" target="_blank">
                    <img src="https://img.icons8.com/officexs/16/ffffff/wifi.png" alt="file explorer"width="20px" height="22px"></img>
                    </a>
                </button>
                <button id="speaker" className="color">
                    <a href="www.youtube.com" target="_blank">
                    <img src="https://img.icons8.com/material-outlined/24/ffffff/speaker.png" alt="file explorer"width="23px" height="23px"></img>
                    </a>
                </button>
                <button id="Lang" className="color">
                    <a href="www.youtube.com" target="_blank">
                        <p>ENG</p>
                    </a>
                </button>
                </div>
                <button id="Time" className="color">
                    <a href="www.youtube.com" target="_blank">
                        <p>{ctime} <br></br><span id="date">{d.getDay()}-{d.getMonth()}-{d.getFullYear()}</span></p>
                        
                    </a>
                </button>
                <div id="reaminleft">
                <button id="ActionCenter" className="color">
                    <a href="www.youtube.com" target="_blank">
                        <img src="https://img.icons8.com/ios-filled/50/ffffff/filled-chat.png" alt="file explorer"width="32px" height="30px"></img>
                    </a>
                </button>
                </div>
                </div>
        );
}

export default RemainTaskbar;