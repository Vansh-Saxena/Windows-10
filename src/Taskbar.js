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
                    <input type="search" placeholder="Type here to search" id="inp" onClick="Colorchange()"></input>
                </form>
                <button id="cortana" className="color">
                    <a href="www.youtube.com" target="_blank">
                    <img src={cortana} alt="Hello" width="19px" height="19px" alt="hey"></img>
                    </a>
                </button>
                <button id="taskview" className="color">
                    <a href="www.youtube.com" target="_blank">
                    <img src={taskviewhover} alt="Hello" width="38px" height="42px" alt="hey"></img>
                    </a>
                </button>
                <button id="file_explorer" className="color">
                    <a href="www.youtube.com" target="_blank">
                    <img src="https://img.icons8.com/fluent/48/000000/windows-explorer.png" alt="file explorer"width="32px" height="30px"></img>
                    </a>
                </button>
                <button id="store" className="color">
                    <a href="www.youtube.com" target="_blank">
                    <img src="https://img.icons8.com/fluent/48/000000/microsoft-store.png"width="32px" height="30px"/>
                    </a>
                </button>
                <button id="dropbox" className="color">
                    <a href="www.youtube.com" target="_blank">
                    <img src="https://img.icons8.com/metro/26/ffffff/dropbox.png" alt="file explorer"width="30px" height="30px"></img>
                    </a>
                </button>
                <button id="chrome" className="color">
                    <a href="www.youtube.com" target="_blank">
                    <img src="https://img.icons8.com/fluent/48/ffffff/chrome.png" alt="file explorer"width="32px" height="30px"></img>
                    </a>
                </button>
                <button id="word" className="color">
                    <a href="www.youtube.com" target="_blank">
                    <img src="https://img.icons8.com/fluent/48/ffffff/microsoft-word-2019.png" alt="file explorer"width="32px" height="30px"></img>
                    </a>
                </button>
                <button id="excel" className="color">
                    <a href="www.youtube.com" target="_blank">
                    <img src="https://img.icons8.com/fluent/48/ffffff/microsoft-excel-2019.png" alt="file explorer"width="32px" height="30px"></img>
                    </a>
                </button>
                <button id="powerpoint" className="color">
                    <a href="www.youtube.com" target="_blank">
                    <img src="https://img.icons8.com/fluent/48/ffffff/microsoft-powerpoint-2019.png" alt="file explorer"width="32px" height="30px"></img>
                    </a>
                </button>
                <button id="sublime" className="color">
                    <a href="www.youtube.com" target="_blank">
                    <img src="https://img.icons8.com/fluent/48/ffffff/sublime-text.png" alt="file explorer"width="32px" height="30px"></img>
                    </a>
                </button>
                <button id="excel" className="color">
                    <a href="www.youtube.com" target="_blank">
                    <img src="https://img.icons8.com/fluent/48/ffffff/microsoft-excel-2019.png" alt="file explorer"width="32px" height="30px"></img>
                    </a>
                </button>
                <button id="excel" className="color">
                    <a href="www.youtube.com" target="_blank">
                    <img src="https://img.icons8.com/fluent/48/ffffff/microsoft-excel-2019.png" alt="file explorer"width="32px" height="30px"></img>
                    </a>
                </button>
                
            </div>
        );
    }
}

export default Taskbar;