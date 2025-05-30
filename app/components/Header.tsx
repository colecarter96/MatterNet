'use client';

import Link from 'next/link';
import { useState } from 'react';

function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [contactCopied, setContactCopied] = useState(false);
    const email = 'matter.global.cl@gmail.com';

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setContactCopied(true);
            setTimeout(() => {
                setContactCopied(false);
            }, 2000);
        } catch (err) {
            console.error('Failed to copy email: ', err);
        }
    };

    return(
        <>
            <header className='fixed left-1/2 -translate-x-1/2 top-[85%] md:top-4 w-[90%] bg-black/90 text-white py-4 px-6 rounded-lg flex justify-between items-center drop-shadow-xl z-200'>
                {/* Menu Button */}
                <button 
                    onClick={toggleMenu}
                    className='flex items-center gap-2 font-roboto-mono text-xs md:text-xl hover:text-gray-300 transition-colors'
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    MENU
                </button>
                
                {/* Centered Logo - Clickable */}
                <Link 
                    href="/" 
                    className='text-xl md:text-2xl font-bold font-jetbrains-mono absolute left-1/2 -translate-x-1/2 hover:text-gray-300 transition-colors'
                >
                    matter net
                </Link>
                
                {/* Call to Action Button - Desktop */}
                <Link 
                    href="/Packages" 
                    className='hidden md:block bg-[#CA0000] hover:bg-[#ff0000] transition-colors px-6 py-2 rounded-lg font-roboto-mono text-xl font-bold'
                >
                    GET STARTED
                </Link>
     
                {/* Call to Action Button - Mobile */}
                <Link 
                    href="/Contact" 
                    className='block md:hidden bg-[#CA0000] hover:bg-[#ff0000] transition-colors px-2 md:px-6 py-2 rounded-lg font-roboto-mono text-md md:text-xl font-bold'
                >
                    START
                </Link>
            </header>

            {/* Full Screen Menu Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-100 bg-black/90 backdrop-blur-sm" onClick={closeMenu}>
                    <div className="flex items-center justify-center min-h-screen">
                        <nav className="flex flex-col items-center space-y-8 md:space-y-12">
                            <Link 
                                href="/" 
                                onClick={closeMenu}
                                className="font-roboto-mono text-4xl md:text-6xl font-bold text-white hover:text-[#CA0000] transition-colors duration-300"
                            >
                                HOME
                            </Link>
                            <Link 
                                href="/Portfolio" 
                                onClick={closeMenu}
                                className="font-roboto-mono text-4xl md:text-6xl font-bold text-white hover:text-[#CA0000] transition-colors duration-300"
                            >
                                PORTFOLIO
                            </Link>
                            <Link 
                                href="/Packages" 
                                onClick={closeMenu}
                                className="font-roboto-mono text-4xl md:text-6xl font-bold text-white hover:text-[#CA0000] transition-colors duration-300"
                            >
                                PACKAGES
                            </Link>
                            <button 
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleCopyEmail();
                                }}
                                className="font-roboto-mono text-4xl md:text-6xl font-bold text-white hover:text-[#CA0000] transition-colors duration-300"
                            >
                                {contactCopied ? 'COPIED' : 'CONTACT'}
                            </button>
                        </nav>
                    </div>
                </div>
            )}
        </>
    )
}

export default Header;