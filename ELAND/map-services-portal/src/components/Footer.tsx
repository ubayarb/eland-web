'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded flex items-center justify-center">
                <span className="text-white font-bold">🧭</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-0">ELAND</h3>
            </div>
            <p className="text-gray-400 mb-2">IT & MAP (GIS) Solutions</p>
            <p className="text-gray-400 text-sm">Газрын зураг дээр суурилсан ухаалаг шийдвэр</p>
          </div>
          <div>
            <h4 className="font-bold text-lg text-white mb-4">Холбоосууд</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-white transition">Үйлчилгээ</a></li>
              <li><a href="#approach" className="hover:text-white transition">Хандлага</a></li>
              <li><a href="#about" className="hover:text-white transition">Бидний Тухай</a></li>
              <li><a href="#contact" className="hover:text-white transition">Холбоо</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg text-white mb-4">Холбоо Мэдээлэл</h4>
            <p className="text-gray-400 mb-2">📧 info@eland.mn</p>
            <p className="text-gray-400 mb-2">📞 +976 (XX) XXXX-XXXX</p>
            <p className="text-gray-400">📍 Улаанбаатар, Монгол</p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p className="text-gray-400">&copy; 2026 ELAND. Бүх эрх хуучиндаа байна.</p>
          <p className="text-gray-400 text-sm mt-2">IT & MAP (GIS) Solutions Компани</p>
        </div>
      </div>
    </footer>
  );
}
