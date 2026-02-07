'use client';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">🧭</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">ELAND</h1>
              <p className="text-xs text-gray-500 leading-none">IT & MAP Шийдлүүд</p>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8">
            <li><a href="#services" className="text-gray-700 hover:text-blue-600 font-medium">Үйлчилгээ</a></li>
            <li><a href="#approach" className="text-gray-700 hover:text-blue-600 font-medium">Хандлага</a></li>
            <li><a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">Бидний Тухай</a></li>
            <li><a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">Холбоо</a></li>
            <li><a href="http://map.eland.mn/geoserver" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 font-medium">Газрын Зураг</a></li>
            <li><a href="http://gps.eland.mn/track/Track" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 font-medium">GPS Хяналтын систем</a></li>
          </ul>

          {/* Desktop Button + Mobile Menu Button */}
          <div className="flex gap-4 items-center">
            <button className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-medium">
              Эхлүүлэх
            </button>
            
            {/* Mobile Menu Hamburger */}
            <button 
              onClick={toggleMenu}
              className="md:hidden flex flex-col gap-1.5 p-1"
            >
              <span className={`block w-6 h-0.5 bg-gray-700 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-700 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-700 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
            <ul className="flex flex-col gap-3 pt-4">
              <li><a href="#services" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-blue-600 font-medium block">Үйлчилгээ</a></li>
              <li><a href="#approach" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-blue-600 font-medium block">Хандлага</a></li>
              <li><a href="#about" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-blue-600 font-medium block">Бидний Тухай</a></li>
              <li><a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-blue-600 font-medium block">Холбоо</a></li>
              <li><a href="http://map.eland.mn/geoserver" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 font-medium block">Газрын Зураг</a></li>
              <li><a href="http://gps.eland.mn/track/Track" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 font-medium block">GPS Хяналтын систем</a></li>
              <li className="pt-2"><button className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-medium">
                Эхлүүлэх
              </button></li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
