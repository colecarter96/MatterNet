'use client';

import Link from 'next/link';
import { useState } from 'react';

function Footer() {
    const [copied, setCopied] = useState(false);
    const email = 'contact@matternet.com';

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    return (
        <footer className="mx-auto mt-20 mb-5 py-8 px-6 text-left font-roboto-mono border-t border-gray-900">
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Internal Links */}
                <div className="space-y-4 ml-[10%]">
                    <h3 className="text-xl font-bold mb-4">PORTFOLIO</h3>
                    <div className="flex flex-col space-y-2">
                        <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
                        <Link href="/Portfolio" className="hover:text-gray-300 transition-colors">Portfolio</Link>
                        <Link href="/Packages" className="hover:text-gray-300 transition-colors">Packages</Link>
                        <Link href="/Contact" className="hover:text-gray-300 transition-colors">Contact</Link>
                    </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-4 pl-10">
                    <h3 className="text-xl font-bold mb-4">PACKAGES</h3>
                    <div className="flex flex-col space-y-2">
                        <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
                        <Link href="/Portfolio" className="hover:text-gray-300 transition-colors">Portfolio</Link>
                        <Link href="/Packages" className="hover:text-gray-300 transition-colors">Packages</Link>
                        <Link href="/Contact" className="hover:text-gray-300 transition-colors">Contact</Link>
                    </div>
                </div>

                {/* Social Links */}
                <div className="space-y-4 pl-10">
                    <h3 className="text-xl font-bold mb-4">CONTACT</h3>
                    <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                            <span>{email}</span>
                            <button 
                                onClick={handleCopyEmail}
                                className="text-sm px-2 py-1 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
                            >
                                {copied ? 'Copied!' : 'Copy'}
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <a 
                            href="https://instagram.com/matter.img" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-gray-300 transition-colors"
                        >
                            Instagram
                        </a>
                    </div>
                </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-900 text-center text-sm text-gray-400">
                © {new Date().getFullYear()} Matter Net. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer; 