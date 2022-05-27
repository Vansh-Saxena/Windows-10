import React, {Component} from 'react';
import './Taskbar.css';
import cortana from './cortana.png'
import taskview from './task-view.png'
import taskviewhover from './Task view hover.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Popup from './Component/Popup'
import {useState} from 'react';
import {
    Menu,
    MenuList,
    MenuButton,
    MenuItem,
    MenuItems,
    MenuPopover,
    MenuLink,
  } from "@reach/menu-button";
  import "@reach/menu-button/styles.css";
const Taskbar = () => {
    const [buttonPopup, setButtonPopup] = useState(false);

        return(
            <div id="taskbarmain">
            {/*Popup*/}
            <Popup trigger={buttonPopup} className="popup" setTrigger={setButtonPopup}>
            <Menu>
                <MenuButton>    
                    Actions <span aria-hidden>▾</span>
                </MenuButton>
                <MenuList>
                    <MenuItem onSelect={() => alert("Download")}>Download</MenuItem>
                    <MenuItem onSelect={() => alert("Copy")}>Create a Copy</MenuItem>
                    <MenuItem onSelect={() => alert("Mark as Draft")}>
                    Mark as Draft
                    </MenuItem>
                    <MenuItem onSelect={() => alert("Delete")}>Delete</MenuItem>
                    <MenuLink as="a" href="https://reacttraining.com/workshops/">
                    Attend a Workshop
                    </MenuLink>
                </MenuList>
            </Menu>
                </Popup>
                <div id="taskbar">
                <button className="hey">Hello</button>
                    <button id="windows" onClick={() => setButtonPopup(true)}>
                    {/* <a href="www.youtube.com" target="_blank"> */}
                    <img src="https://img.icons8.com/ios-glyphs/30/ffffff/windows-10.png" alt="Hello" width="21px" height="21px"></img>
                    {/* </a> */}
                    </button>


                
                
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
                    <img src="https://img.icons8.com/metro/26/ffffff/dropbox.png" alt="file explorer"width="30px" height="25px"></img>
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
                <button id="vsc" className="color">
                    <a href="www.youtube.com" target="_blank">
                    <img src="https://img.icons8.com/fluent/48/000000/visual-studio-code-2019.png" alt="file explorer"width="32px" height="30px"></img>
                    </a>
                </button>
            </div>
            </div>
        );
}

export default Taskbar;