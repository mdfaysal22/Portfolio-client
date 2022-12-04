import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Toggler from '../../../Utilities/Toggler';
import { AiOutlineDownload } from 'react-icons/ai';

const Header = () => {
    const [state, setState] = useState(false)
    const navigation = [
        { title: "Home", path: "/home" },
        { title: "About", path: "/about" },
        { title: "Portfolio", path: "/portfolio" },
        { title: "Blog", path: "/blog" },
        { title: "Contact", path: "/contact" }
    ]
    return (
        <nav className="bg-white dark:bg-info w-full duration-500 sticky top-0 z-50">
            <div className="items-center px-4   max-w-screen-xl mx-auto md:flex md:px-8">
                <div className="flex items-center  justify-between py-3 md:py-5 md:block">
                    <Link to="/">
                        <img
                            src="https://www.floatui.com/logo.svg"
                            width={120}
                            height={50}
                            alt="Float UI logo"
                        />
                    </Link>
                    <div className="md:hidden flex justify-center items-center">
                        <button className="text-gray-700 dark:text-white outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                            onClick={() => setState(!state)}
                        >
                            {
                                state ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                    </svg>
                                )
                            }
                        </button>
                        <div className=' ml-4 '>
                            <Toggler></Toggler>
                        </div>
                    </div>
                </div>
                <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>
                    <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                        {
                            navigation.map((item, idx) => {
                                return (
                                    <li key={idx} className="text-secondary font-normal hover:text-primary dark:text-white dark:hover:text-primary ">
                                        <Link to={item.path}>
                                            {item.title}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="hidden md:inline-block">
                    <Link to="/" className="py-3 px-4 text-white btn-primary rounded-md shadow">
                        <span>Download Resume <AiOutlineDownload className='inline'></AiOutlineDownload></span>
                    </Link>
                </div>
                <div className='hidden ml-4 md:flex'>
                    <Toggler></Toggler>
                </div>
            </div>
        </nav>
    );
};

export default Header;