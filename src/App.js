import React, { Component } from 'react';
import logo from './logo.svg';
import Main from './components/main';
import Sidebar from './components/sidebar';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="container">
                <Main />
                <Sidebar />
            </div>
        );
    }
}

export default App;
