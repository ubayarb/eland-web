'use client';

import { Typography } from "@material-tailwind/react";

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
              <Typography variant="h6" className="text-white mb-0">ELAND</Typography>
            </div>
            <Typography variant="paragraph" className="text-gray-400 mb-2">IT & MAP (GIS) Solutions</Typography>
            <Typography variant="small" className="text-gray-400">Газрын зураг дээр суурилсан ухаалаг шийдвэр</Typography>
          </div>
          <div>
            <Typography variant="h6" className="text-white mb-4">Холбоосууд</Typography>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-white transition">Үйлчилгээ</a></li>
              <li><a href="#approach" className="hover:text-white transition">Хандлага</a></li>
              <li><a href="#about" className="hover:text-white transition">Бидний Тухай</a></li>
              <li><a href="#contact" className="hover:text-white transition">Холбоо</a></li>
            </ul>
          </div>
          <div>
            <Typography variant="h6" className="text-white mb-4">Холбоо Мэдээлэл</Typography>
            <Typography variant="paragraph" className="text-gray-400 mb-2">📧 info@eland.mn</Typography>
            <Typography variant="paragraph" className="text-gray-400 mb-2">📞 +976 (XX) XXXX-XXXX</Typography>
            <Typography variant="paragraph" className="text-gray-400">📍 Улаанбаатар, Монгол</Typography>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <Typography variant="paragraph" className="text-gray-400">&copy; 2026 ELAND. Бүх эрх хуучиндаа байна.</Typography>
          <Typography variant="small" className="text-gray-400 mt-2">IT & MAP (GIS) Solutions Компани</Typography>
        </div>
      </div>
    </footer>
  );
}
