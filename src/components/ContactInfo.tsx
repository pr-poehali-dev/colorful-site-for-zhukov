import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ContactInfo = () => {
  const handlePhoneCall = () => {
    window.open("tel:+79111634312", "_self");
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/79111634312", "_blank");
  };

  const handleTelegram = () => {
    window.open("https://t.me/+79111634312", "_blank");
  };

  return (
    <section className="py-20 bg-gradient-to-r from-slate-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Свяжитесь со мной
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Готов обсудить ваш проект и ответить на все вопросы
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full flex items-center justify-center">
                      <Icon name="Phone" size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Телефон</h3>
                      <p className="text-gray-600">+7 (911) 163-43-12</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full flex items-center justify-center">
                      <Icon name="Mail" size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Email</h3>
                      <p className="text-gray-600">ewgenchik@mail.ru</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Быстрая связь
                  </h3>

                  <Button
                    onClick={handlePhoneCall}
                    className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Icon name="Phone" size={20} />
                    Позвонить
                  </Button>

                  <Button
                    onClick={handleWhatsApp}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Icon name="MessageSquare" size={20} />
                    WhatsApp
                  </Button>

                  <Button
                    onClick={handleTelegram}
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Icon name="Send" size={20} />
                    Telegram
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
