import React from 'react'
import Theme from './Theme'
export default function Nav() {
    return (
        <div className="fixed top-0 z-10 px-10 py-5 navbar glass">
            <div className="navbar-start">
                <div className='hidden nav-text md:block '>
                    <ul className='px-1 menu menu-horizontal'>
                        <li><a>Product</a></li>
                        <li>
                            <details>
                                <summary>
                                    Parent
                                </summary>
                                <ul className="p-2 rounded-t-none ">
                                    <li><a>Link 1</a></li>
                                    <li><a>Link 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>Customers</a></li>
                        <li><a>Resources</a></li>

                    </ul>
                </div>
                <div className="dropdown md:hidden ">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
                        <li><a>Homepage</a></li>
                        <li><a>Portfolio</a></li>
                        <li><a>About</a></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <img src="img/logo.svg" alt="" />
            </div>
            <div className="navbar-end">
               <Theme />
            </div>
        </div>
    )
}
