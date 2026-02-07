'use client';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">🏢 Бидний Тухай</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-bold mb-3 text-gray-900">ELAND Нь Хэн Вэ?</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                ELAND нь GIS ба IT-ийг хамтад нь ойлгодог компани юм. Нээлттэй лицензтэй болон Дотоод ашигтэй технологийг хослуулан, үйлдвэрлэлийн орчинд ажиллах бодит шийдлүүд хэрэгжүүлдэг.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-lg font-bold text-gray-900">Бидний Давуу Талууд:</h4>
              <ul className="space-y-2">
                <li className="flex gap-3">
                  <span className="text-2xl">✓</span>
                  <span className="text-gray-700"><strong>GIS & IT Интеграци:</strong> Хоёр технологийг нэг системээр хамтруулдаг</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-2xl">✓</span>
                  <span className="text-gray-700"><strong>Open-source Мэргэжлэл:</strong> PostGIS, Geoserver, QGIS ашиглалт</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-2xl">✓</span>
                  <span className="text-gray-700"><strong>Production-ready:</strong> Үйлдвэрлэлийн орчинд шалгагдсан шийдлүүд</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-2xl">✓</span>
                  <span className="text-gray-700"><strong>Урт хугацаанд:</strong> Масштаб өргөтгөх боломжтой архитектур</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {/* Vision */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                <span>🚀</span> Алсын Хараа
              </h3>
              <p className="text-lg leading-relaxed">
                Газрын зураг ба технологиор шийдвэрийг ухаалжуулах.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                <span>🎯</span> Эрхэм Зорилго
              </h3>
              <p className="text-lg leading-relaxed">
                Найдвартай, өргөтгөх боломжтой, урт хугацаанд ашиглагдах систем бүтээх.
              </p>
            </div>

            {/* Values */}
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                <span>💎</span> Үзэл Баримтлал
              </h3>
              <ul className="space-y-2 text-sm">
                <li>✓ Бодит асуудлос шийдвэр</li>
                <li>✓ Уншигдсан дүрслэл</li>
                <li>✓ Үйл ажиллагаа нэмэгдүүлэх</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div className="bg-white p-8 rounded-lg border-2 border-gray-200">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">⚙️ Технологийн Стек</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-lg font-semibold text-gray-900 mb-2">Ачааллын Эхэнд</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• PostGIS</li>
                <li>• Geoserver</li>
                <li>• QGIS</li>
              </ul>
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold text-gray-900 mb-2">Мэдээлэлийн Санд</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• PostgreSQL</li>
                <li>• Oracle</li>
                <li>• SQL Server</li>
              </ul>
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold text-gray-900 mb-2">Номын Сан</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Leaflet</li>
                <li>• Mapbox</li>
                <li>• Cesium.js</li>
              </ul>
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold text-gray-900 mb-2">Үйлчилгээ</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Azure</li>
                <li>• AWS</li>
                <li>• Газар Сууриллаа</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
