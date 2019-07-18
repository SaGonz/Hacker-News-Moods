import React from 'react';
import '../css/header.css';

class Header extends React.Component{
    render(){
        return(
            <div>
                <nav>
                    <h1>Hacker News</h1>
                </nav>
            </div>
        );
    }
}

export default Header;