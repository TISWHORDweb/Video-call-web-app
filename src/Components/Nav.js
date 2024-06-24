import React from 'react'
import Logo from '../Assets/Images/xo-bridge-white-v3.06930df362d43e4345ce.png'

function Nav() {
    return (
        <div>
            <nav class="navbar ">
                <div class="container">
                    <a class="navbar-brand" href="https://xolanibridge.com/">
                        <img src={Logo} alt="Logo" class="" />
                    </a>
                </div>
            </nav>
        </div>
    )
}

export default Nav