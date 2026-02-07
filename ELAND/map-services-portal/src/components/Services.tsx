'use client';

export default function Services() {
  const mapServices = [
    {
      title: 'GIS Серверийн Архитектур',
      description: 'GIS серверийн суурилуулалт, тохируулалт, удирдлага',
      icon: '🏗️'
    },
    {
      title: 'Орон Зайн Өгөгдлийн Сан',
      description: 'PostGIS, Oracle Spatial дээр суурилсан БД шийдэл',
      icon: '💾'
    },
    {
      title: 'Вэб Карт & Уналтын Самбар',
      description: 'Интерактив газрын зураг, Бизнес Интеллижнесс мониторинг',
      icon: '📊'
    }
  ];

  const itServices = [
    {
      title: 'Системийн Архитектур',
      description: 'Байгууллагын системийн үндсэн чиглэл болон дизайн',
      icon: '🏛️'
    },
    {
      title: 'Үй / Газар Сууриллаа Дэд Бүтэц',
      description: 'Azure, AWS, эсвэл Газар Сууриллаа шийдлүүд',
      icon: '☁️'
    },
    {
      title: 'Системийн Интеграци',
      description: 'ERP, CRM, GIS систем хоёрын холбоо, API хөгжүүлэлт',
      icon: '🔗'
    }
  ];

  const infrastructure = [
    {
      title: 'Кадастр & Газар Зохион Байгуулалт',
      description: 'Газар ашиглалтын GIS систем, цахим кадастр',
      icon: '🏞️'
    },
    {
      title: 'Инженерийн Шугам Сүлжээ',
      description: 'Цахилгаан, ус, хий, телеком сүлжээний GIS',
      icon: '⚡'
    },
    {
      title: 'Үл Хөдлөх Хөрөнгө & Үйлчилгээний Удирдлага',
      description: 'Үл хөдлөх хөрөнгө, найдвартай байдлын удирдлага',
      icon: '🏢'
    },
    {
      title: 'Хот Төлөвлөлт & Ухаалаг Хот',
      description: 'Ухаалаг хотын системүүд, төлөвлөлтийн хэрэгсэл',
      icon: '🌆'
    },
    {
      title: 'Байгаль Орчин & Эрсдэлийн Зураглал',
      description: 'Экологийн ажиглалт, аюулын нутаг зураглал',
      icon: '🌱'
    },
    {
      title: 'Техник дэмжлэг & Зөвлөгөө',
      description: '24/7 техникийн тусламж болон мэргэжлийн зөвлөгөө',
      icon: '👨‍💼'
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-gray-900">Манай Үйлчилгээ</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            GIS ба IT-ийг хамтад нь ойлгодог бүрэн шийдлүүд
          </p>
        </div>

        {/* MAP/GIS Services */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-gray-900 flex items-center gap-3">
            <span className="text-4xl">🗺️</span> MAP / GIS Үйлчилгээ
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {mapServices.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition border-t-4 border-blue-500"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h4 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h4>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* IT Services */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-gray-900 flex items-center gap-3">
            <span className="text-4xl">💻</span> IT Үйлчилгээ
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {itServices.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition border-t-4 border-green-500"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h4 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h4>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Infrastructure Solutions */}
        <div>
          <h3 className="text-3xl font-bold mb-8 text-gray-900 flex items-center gap-3">
            <span className="text-4xl">🏗️</span> Дэд Бүтцэд Суурилсан Шийдлүүд
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {infrastructure.map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h4 className="text-lg font-semibold mb-2 text-gray-900">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
