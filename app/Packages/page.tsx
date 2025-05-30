'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Packages() {
  const [copiedStates, setCopiedStates] = useState<{[key: number]: boolean}>({});
  const email = 'matter.global.cl@gmail.com';

  const handleCopyEmail = async (packageIndex: number) => {
    try {
      await navigator.clipboard.writeText(email);
      setCopiedStates(prev => ({ ...prev, [packageIndex]: true }));
      setTimeout(() => {
        setCopiedStates(prev => ({ ...prev, [packageIndex]: false }));
      }, 2000);
    } catch (err) {
      console.error('Failed to copy email: ', err);
    }
  };

  const packages = [
    {
      name: "LAUNCH",
      tagline: "Perfect for getting started",
      price: "Starting at $500",
      description: "A professional static website that gets your business online with style and reliability.",
      features: [
        "Custom responsive design",
        "Up to 5 pages",
        "Contact form integration",
        "Basic SEO optimization",
        "6 months hosting included",
        "Social media integration",
        "Analytics setup",
        "Professional email setup",
        "Basic performance optimization",
        "One revision round"
      ],
      highlight: false,
      buttonText: "GET LAUNCHED"
    },
    {
      name: "GROWTH",
      tagline: "Built for businesses ready to scale",
      price: "Starting at $700",
      description: "Dynamic websites with database functionality and content management for growing businesses.",
      features: [
        "Everything in Launch",
        "Database integration",
        "Content management system",
        "Image gallery management",
        "Menu/inventory system",
        "Email automation",
        "Advanced analytics dashboard",
        "Search functionality",
        "Form builder",
        "Social media feeds",
        "Newsletter integration",
        "Two revision rounds"
      ],
      highlight: true,
      buttonText: "START GROWING"
    },
    {
      name: "PREMIUM",
      tagline: "Enterprise-level solutions",
      price: "Starting at $800",
      description: "Complete digital ecosystem with full admin control and unlimited customization possibilities.",
      features: [
        "Everything in Growth",
        "Full admin dashboard",
        "Multi-user permissions",
        "Custom domain selection",
        "E-commerce capabilities",
        "Advanced integrations",
        "Custom development",
        "Priority support",
        "Performance optimization",
        "SEO automation",
        "Custom API development",
        "Unlimited revisions",
        "Ongoing maintenance included"
      ],
      highlight: false,
      buttonText: "GO PREMIUM"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="font-roboto-mono text-6xl md:text-8xl font-bold text-right pr-32 mb-8">
            PACKAGES
          </h1>
          <p className="font-rubik text-xl md:text-2xl ml-32 mr-[40%] text-gray-700">
            Choose the perfect website package for your business needs. 
            From simple launches to complex enterprise solutions.
          </p>
        </div>
      </div>

      <div className="h-[1px] bg-black w-[98%] mx-auto mb-20"></div>

      {/* Packages Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div key={index} className={`relative ${pkg.highlight ? 'scale-105 z-10' : ''}`}>
              {pkg.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#CA0000] text-white px-6 py-2 rounded-full font-roboto-mono text-sm font-bold">
                  MOST POPULAR
                </div>
              )}
              
              {/* Package Card */}
              <div className={`h-full flex flex-col transition-all duration-300 rounded-lg overflow-hidden ${
                pkg.highlight 
                  ? 'bg-black text-white shadow-2xl' 
                  : 'bg-black/90 text-white hover:bg-black'
              }`}>
                
                {/* Header */}
                <div className="p-8 pb-6">
                  <h2 className="font-roboto-mono text-3xl font-bold mb-2 text-[#CA0000]">
                    {pkg.name}
                  </h2>
                  <p className="font-rubik text-sm text-gray-300 mb-4">
                    {pkg.tagline}
                  </p>
                  <div className="font-roboto-mono text-2xl font-bold mb-4">
                    {pkg.price}
                  </div>
                  <p className="font-rubik text-base text-gray-300">
                    {pkg.description}
                  </p>
                </div>

                {/* Features */}
                <div className="px-8 pb-8 flex-grow">
                  <h3 className="font-roboto-mono text-sm font-bold mb-4 text-gray-400 uppercase">
                    What's Included
                  </h3>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="font-rubik text-sm text-gray-300 flex items-start">
                        <svg 
                          className="w-4 h-4 text-[#CA0000] mr-3 mt-0.5 flex-shrink-0" 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path 
                            fillRule="evenodd" 
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                            clipRule="evenodd" 
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button */}
                <div className="p-8 pt-0">
                  <button 
                    onClick={() => handleCopyEmail(index)}
                    className={`w-full py-4 px-6 rounded-lg font-roboto-mono font-bold transition-colors ${
                      pkg.highlight
                        ? 'bg-[#CA0000] hover:bg-[#ff0000] text-white'
                        : 'bg-transparent border-2 border-[#CA0000] text-[#CA0000] hover:bg-[#CA0000] hover:text-white'
                    }`}
                  >
                    {copiedStates[index] ? 'EMAIL COPIED!' : pkg.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-black/5 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-roboto-mono text-4xl md:text-5xl font-bold text-center mb-16">
            COMMON QUESTIONS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-roboto-mono text-xl font-bold mb-3 text-[#CA0000]">
                  How long does development take?
                </h3>
                <p className="font-rubik text-gray-700">
                  Launch packages typically take 2-3 weeks, Growth packages 3-4 weeks, 
                  and Premium packages 5-6 weeks depending on complexity.
                </p>
              </div>
              
              <div>
                <h3 className="font-roboto-mono text-xl font-bold mb-3 text-[#CA0000]">
                  What's included in hosting?
                </h3>
                <p className="font-rubik text-gray-700">
                  All packages include reliable hosting and basic security. 
                  Premium packages include enhanced performance and priority support.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-roboto-mono text-xl font-bold mb-3 text-[#CA0000]">
                  Can I upgrade later?
                </h3>
                <p className="font-rubik text-gray-700">
                  Absolutely! You can upgrade your package at any time. We'll credit 
                  your previous investment toward the upgraded package.
                </p>
              </div>
              
              <div>
                <h3 className="font-roboto-mono text-xl font-bold mb-3 text-[#CA0000]">
                  Do you provide ongoing support?
                </h3>
                <p className="font-rubik text-gray-700">
                  Yes! All packages include initial support, with Premium packages 
                  receiving ongoing maintenance and priority assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-roboto-mono text-4xl md:text-6xl font-bold mb-8">
            READY TO GET STARTED?
          </h2>
          <p className="font-rubik text-xl mb-12 text-gray-700 max-w-2xl mx-auto">
            Let's discuss your project and find the perfect package for your needs. 
            Get in touch for a free consultation.
          </p>
          <Link 
            href="/Contact"
            className="inline-block bg-[#CA0000] hover:bg-[#ff0000] transition-colors px-8 py-4 rounded-lg font-roboto-mono text-xl font-bold text-white"
          >
            START YOUR PROJECT
          </Link>
        </div>
      </div>
    </div>
  );
} 