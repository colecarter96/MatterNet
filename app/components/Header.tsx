import Link from 'next/link';

function Header(){
    return(
        <header className='fixed left-1/2 -translate-x-1/2 top-4 w-[95%] bg-black/90 text-white py-4 px-6 rounded-lg flex justify-between items-center drop-shadow-xl z-1000'>
            <div className='text-2xl font-bold font-jetbrains-mono'>
                matter net
            </div>
            
            <nav className='flex gap-8 font-roboto-mono text-xl'>
                <Link href="/" className='hover:text-gray-300 transition-colors font-bold'>HOME</Link>
                <Link href="/Portfolio" className='hover:text-gray-300 transition-colors font-bold'>PORTFOLIO</Link>
                <Link href="/Packages" className='hover:text-gray-300 transition-colors font-bold'>PACKAGES</Link>
                <Link href="/Contact" className='text-[#CA0000] hover:text-gray-300 transition-colors font-bold'>CONTACT</Link>
            </nav>    
        </header>
    )
}

export default Header;