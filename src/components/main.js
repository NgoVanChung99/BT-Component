import React, {Component} from 'react';
import './css/main.css';
class Main extends Component {
    render() {
        return(
            <div className="Main">
                <li className="grid-style">
                	<article id="post-01" className="item hentry">
                		<div className="thumbnail">
                			<a className="image-holder"></a>
                		</div>
                		<div className="grid-header-box">
                			<h2 className="entry-title grid-title">
                				<a>Hướng dẫn học React JS</a>
                			</h2>
                		</div>
                	</article>
                </li>
            </div>
        )
    }
}

export default Main;