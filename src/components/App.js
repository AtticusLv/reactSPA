import React from 'react';
import styles from './App.css';
import Sidebar from './Sidebar'

class App extends React.Component {
  render() {
    return (
      <div>
        <Sidebar />
        <div className="main-content">
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default App;
