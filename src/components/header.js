import React from 'react';

class Header extends React.Component{
    render(){
        return(
            <div>
                <nav>
                    <ul>
                        <li>home</li>
                        <li>new</li>
                        <li>popular</li>
                        <li>idk</li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Header;