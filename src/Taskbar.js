import React, {Component} from 'react';
import './Taskbar.css';
import desktop from './desktop.png'
import cortana from './cortana.png'
import taskview from './task-view.png'

class Taskbar extends Component {
    render() {
        return(
            <div>
                <button><img src={desktop} alt="Hello" width="34px" height="36px"></img></button>
                <form>
                    <input type="search" placeholder="Type To Search" id="inp"></input>
                </form>
                <button><img src={cortana} alt="Hello" width="34px" height="36px"></img></button>
                <button><img src={taskview} alt="Hello" width="34px" height="36px"></img></button>
            </div>
        );
    }
}

export default Taskbar;