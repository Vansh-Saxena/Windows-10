import React, {Component} from 'react';
import './Taskbar.css';
import desktop from './desktop.png'
import cortana from './cortana.png'
import taskview from './task-view.png'
import taskviewhover from './Task view hover.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Taskbar extends Component {
    
    render() {
        return(
            <div>
                <button id="windows"><img src={desktop} alt="Hello" width="34px" height="36px"></img></button>
                <form>
                    <input type="search" placeholder="Type To Search" id="inp" onClick="Colorchange()"></input>
                </form>
                <button id="cortana" className="color">
                    <a href="www.youtube.com" target="_blank">
                    <img src={cortana} alt="Hello" width="30px" height="30px" alt="hey"></img>
                    </a>
                </button>
                <button id="taskview" className="color">
                    <a href="www.youtube.com" target="_blank">
                    <img src={taskviewhover} alt="Hello" width="34px" height="36px" alt="hey"></img>
                    </a>
                </button>
            </div>
        );
    }
}

export default Taskbar;