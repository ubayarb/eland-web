'use client';

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@material-tailwind/react";

export default function Header() {
  return (
    <Navbar className="sticky top-0 z-50 bg-white shadow-lg border-b border-blue-gray-100">
      <NavbarBrand>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">🧭</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">ELAND</h1>
            <p className="text-xs text-gray-500 leading-none">IT & MAP Шийдлүүд</p>
          </div>
        </div>
      </NavbarBrand>
      
      <NavbarContent className="hidden md:flex gap-8" justify="center">
        <NavbarItem>
          <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium">
            Үйлчилгээ
          </a>
        </NavbarItem>
        <NavbarItem>
          <a href="#approach" className="text-gray-700 hover:text-blue-600 font-medium">
            Хандлага
          </a>
        </NavbarItem>
        <NavbarItem>
          <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">
            Бидний Тухай
          </a>
        </NavbarItem>
        <NavbarItem>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">
            Холбоо
          </a>
        </NavbarItem>
        <NavbarItem>
          <a href="http://map.eland.mn/geoserver" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 font-medium">
            Газрын Зураг
          </a>
        </NavbarItem>
        <NavbarItem>
          <a href="http://gps.eland.mn/track/Track" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 font-medium">
            GPS Хяналтын систем
          </a>
        </NavbarItem>
      </NavbarContent>
      
      <NavbarContent justify="end">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium capitalize">
          Эхлүүлэх
        </Button>
      </NavbarContent>
    </Navbar>
  );
}
