'use client';

import { useEffect, useState } from 'react';

export default function MapSection() {
  const [geoserverStatus, setGeoserverStatus] = useState<'loading' | 'connected' | 'error'>('loading');

  useEffect(() => {
    // Check Geoserver connection
    const checkGeoserver = async () => {
      try {
        // This would be your Geoserver URL
        await fetch('http://localhost:8080/geoserver/web/', {
          method: 'HEAD',
          mode: 'no-cors'
        });
        setGeoserverStatus('connected');
      } catch (error) {
        setGeoserverStatus('error');
      }
    };

    checkGeoserver();
  }, []);

  return (
    <section id="map" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4">🗺️ OpenSource Geoserver Интеграци</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            ELAND нь Open-source Geoserver-тэйгээ холбогдон, чадварлаг газрын зураг үйлчилгээ үзүүлдэг
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border-2 border-blue-200">
            <p className="text-3xl mb-3">📡</p>
            <h3 className="font-bold text-lg mb-2">WMS (Вэб Карт Үйлчилгээ)</h3>
            <p className="text-gray-700 text-sm">Газрын зурагуудыг web-ээр үзүүлэх</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border-2 border-green-200">
            <p className="text-3xl mb-3">🔗</p>
            <h3 className="font-bold text-lg mb-2">WFS (Вэб Объект Үйлчилгээ)</h3>
            <p className="text-gray-700 text-sm">Орон зайн өгөгдлүүдийг асуух сэрвис</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border-2 border-purple-200">
            <p className="text-3xl mb-3">📊</p>
            <h3 className="font-bold text-lg mb-2">REST API (Амар Холбыг)</h3>
            <p className="text-gray-700 text-sm">Гуулын дата үйлдэлт хийх API</p>
          </div>
        </div>

        <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center border-2 border-gray-300">
          <div className="text-center">
            <p className="text-6xl mb-4">🗺️</p>
            <p className="text-gray-600 mb-2 text-xl font-semibold">Интерактив Газрын Зураг</p>
            <p className="text-sm text-gray-500 mb-4">Leaflet болон Geoserver WMS/WFS үйлчилгээтэй холбогдсон</p>
            <p className={`text-sm font-semibold ${
              geoserverStatus === 'connected'
                ? 'text-green-600'
                : 'text-red-600'
            }`}>
              {geoserverStatus === 'loading' && '⏳ Гэосервер шалгаж байна...'}
              {geoserverStatus === 'connected' && '✅ Гэосервер холбогдсон'}
              {geoserverStatus === 'error' && '❌ Гэосервер холбогдоогүй'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
