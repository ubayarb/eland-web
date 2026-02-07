'use client';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-blue-200 text-lg mb-2">🧭 ГИС & ИТ ШИЙДЛҮҮД</p>
          <h1 className="text-6xl font-bold mb-6 leading-tight">
            Газрын Зураг Дээр Суурилсан Ухаалаг Шийдвэр
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            ELAND нь байгууллагын өгөгдлийг орон зайн мэдээлэл <span className="font-semibold">(MAP / GIS)</span> болон мэдээллийн технологитой <span className="font-semibold">(IT)</span> нэгтгэн, шийдвэр гаргалтыг илүү нарийвчлалтай, бодитой болгодог технологийн компани юм.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
            <p className="text-3xl mb-3">📊</p>
            <h3 className="font-bold text-lg mb-2">Өгөгдөл</h3>
            <p className="text-blue-100 text-sm">Бодит мэдээлэл цуглуулалт</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
            <p className="text-3xl mb-3">🗺️</p>
            <h3 className="font-bold text-lg mb-2">Газрын Зураг</h3>
            <p className="text-blue-100 text-sm">Орон зайн дүрслэл ба анализ</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
            <p className="text-3xl mb-3">💡</p>
            <h3 className="font-bold text-lg mb-2">Шийдвэр</h3>
            <p className="text-blue-100 text-sm">Үр дүнтэй удирдлага болон төлөвлөлт</p>
          </div>
        </div>
        
        <div className="text-center">
          <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 text-lg">
            Манай Үйлчилгээтэй Танилцуулах
          </button>
        </div>
      </div>
    </section>
  );
}
