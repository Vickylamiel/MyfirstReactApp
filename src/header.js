import React from 'react';

function Header() {
    let portfolio = 'GitHub';
    return (
        <div>
            <header>
                <h1>Welcome to my website!</h1>
                <nav>
                <ul>
                    <li><a href="/#">Home</a></li>
                    <li><a href="/#">About</a></li>
                    <li><a href="/#">{portfolio}</a></li>
                    <li><a href="/#">Contact</a></li>
                </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header;