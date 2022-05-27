import './App.css';
import React, {Component} from 'react';
import Taskbar from './Taskbar';
import Wallpaper from './Wallpaper';
import RemainTaskbar from "./RemainTaskbar";

class App extends Component {
  render() {
    return(
      <div>
        <Wallpaper />
        <Taskbar />
        <RemainTaskbar date2={new Date()}/>
      </div>
    );
  }
}

export default App;
