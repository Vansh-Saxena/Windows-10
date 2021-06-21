import './App.css';
import React, {Component} from 'react';
import Taskbar from './Taskbar';
import Wallpaper from './Wallpaper';

class App extends Component {
  render() {
    return(
      <div>
        <Wallpaper />
        <Taskbar />
      </div>
    );
  }
}

export default App;
