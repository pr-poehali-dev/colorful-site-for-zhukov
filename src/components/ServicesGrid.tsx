import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ServicesGrid = () => {
  const services = [
    {
      title: "Сайт-визитка",
      price: "от 15 000 ₽",
      description: "Стильная презентация вашего бизнеса с основной информацией",
      features: [
        "Адаптивный дизайн",
        "Контактная форма",
        "SEO-оптимизация",
        "Интеграция с соцсетями",
      ],
      icon: "User",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      title: "Одностраничный сайт",
      price: "от 25 000 ₽",
      description: "Лендинг для эффективной продажи товаров или услуг",
      features: [
        "Яркий дизайн",
        "Форма заказа",
        "Аналитика",
        "Интеграция с CRM",
      ],
      icon: "FileText",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      title: "Многостраничный сайт",
      price: "от 35 000 ₽",
      description: "Полноценный корпоративный сайт с расширенным функционалом",
      features: [
        "Каталог товаров",
        "Система управления",
        "Многоуровневое меню",
        "Интеграция с платежами",
      ],
      icon: "Globe",
      gradient: "from-pink-500 to-red-600",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Мои услуги</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Создаю сайты любой сложности — от простой визитки до корпоративного
            портала
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="relative group hover:shadow-2xl transition-all duration-500 border-0 bg-white overflow-hidden hover:scale-105"
            >
              {/* Gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              ></div>

              <CardHeader className="text-center pb-4 relative z-10">
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon
                    name={service.icon as any}
                    size={28}
                    className="text-white"
                  />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800 mb-2">
                  {service.title}
                </CardTitle>
                <div className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                  {service.price}
                </div>
              </CardHeader>

              <CardContent className="relative z-10">
                <p className="text-gray-600 mb-6 text-center">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-gray-700"
                    >
                      <Icon
                        name="Check"
                        size={16}
                        className="text-green-500 mr-3 flex-shrink-0"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full bg-gradient-to-r ${service.gradient} hover:shadow-lg transition-all duration-300 text-white font-semibold py-3`}
                >
                  <Icon name="MessageSquare" size={20} />
                  Заказать
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
