import Link from 'next/link';

function Header(){
    return(
        <header className='fixed left-1/2 -translate-x-1/2 top-[90%] md:top-4 w-[95%] bg-black/90 text-white py-4 px-6 rounded-lg flex justify-between items-center drop-shadow-xl z-200'>
            {/* Menu Button */}
            <button className='flex items-center gap-2 font-roboto-mono text-xs md:text-xl hover:text-gray-300 transition-colors'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                MENU
            </button>
            
            {/* Centered Logo */}
            <div className='text-xl md:text-2xl font-bold font-jetbrains-mono absolute left-1/2 -translate-x-1/2'>
                matter net
            </div>
            
            {/* Call to Action Button */}
            <Link 
                href="/Contact" 
                className='hidden md:block bg-[#CA0000] hover:bg-[#ff0000] transition-colors px-6 py-2 rounded-lg font-roboto-mono text-xl font-bold'
            >
                GET STARTED
            </Link>

            <Link 
                href="/Contact" 
                className='block md:hidden bg-[#CA0000] hover:bg-[#ff0000] transition-colors px-2 md:px-6 py-2 rounded-lg font-roboto-mono text-md md:text-xl font-bold'
            >
                START
            </Link>
        </header>
    )
}

export default Header;