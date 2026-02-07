'use client';

export default function Approach() {
  return (
    <section id="approach" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">🧠 Бидний Хандлага</h2>
          <p className="text-xl text-gray-600">Өгөгдөл → Газрын зураг → Шийдвэр</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Байршилд Суурилсан Анализ</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Газрын зураг дээр өгөгдөл харуулах нь зүгээр нэг дүрслэл биш юм. Энэ нь байршилтай холбоотой хүссэн мэдээллийг олох хэрэгсэл юм.
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span className="text-gray-700">Байршилтай холбоотой асуулгыг хариулах</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span className="text-gray-700">Өгөгдлийн ерөнхий байдлыг нэг харахад ойлгох</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span className="text-gray-700">Түл хүлээтэй түүхүүд нээлт хийх</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg border-2 border-blue-200">
            <h3 className="text-2xl font-bold mb-4 text-blue-900">Бизнес Болон Төрийн Байгууллагын Хэрэгцээ</h3>
            <p className="text-blue-800 leading-relaxed">
              Бизнес, төрийн байгууллага, засгийн газрын бодит хэрэгцээ ойлгон, өгөгдөл болон технологийг тэдэнд хэрэгтэй үнэ цэнэ өгөх хэлбэрээр ашиглуулдаг.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-12 rounded-lg text-center">
          <h3 className="text-3xl font-bold mb-4">Гол Үзэл Баримтлал</h3>
          <p className="text-2xl font-semibold leading-relaxed">
            &quot;Газрын зураг бол зүгээр нэг зураг биш — шийдвэр гаргах хэрэгсэл юм.&quot;
          </p>
          <p className="text-blue-100 mt-4 text-lg">
            Орон зайн мэдээлэл нь удирдлагын шийдвэрийг илүү нарийвчлалтай, үндэстэй болгоно.
          </p>
        </div>
      </div>
    </section>
  );
}
