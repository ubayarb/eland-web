'use client';

export default function Header() {
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
          <ul className="hidden md:flex gap-8">
            <li><a href="#services" className="text-gray-700 hover:text-blue-600 font-medium">Үйлчилгээ</a></li>
            <li><a href="#approach" className="text-gray-700 hover:text-blue-600 font-medium">Хандлага</a></li>
            <li><a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">Бидний Тухай</a></li>
            <li><a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">Холбоо</a></li>
            <li><a href="https://map.eland.mn" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 font-medium">MAP</a></li>
            <li><a href="http://gps.eland.mn/track/Track" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 font-medium">GPS Хяналтын систем</a></li>
          </ul>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-medium">
            Эхлүүлэх
          </button>
        </div>
      </nav>
    </header>
  );
}
