import React, {Component} from 'react';
import SignIn from './sidebars/signin';
import NewPost from './sidebars/newpost';
import './css/subcribe.css';

class Sidebar extends Component {
    render() {
        return(
            <div className="Sidebar">
                <SignIn />
                <NewPost />
            </div>
        )
    }
}

export default Sidebar;