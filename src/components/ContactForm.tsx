import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Формируем тему и тело письма
    const subject = `Новая заявка: ${formData.service || "Консультация"}`;
    const body = `
Имя: ${formData.name}
Email: ${formData.email}
Телефон: ${formData.phone}
Услуга: ${formData.service}

Сообщение:
${formData.message}
    `.trim();

    // Создаем mailto ссылку
    const mailtoLink = `mailto:ewgenchik@mail.ru?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Открываем почтовый клиент
    window.location.href = mailtoLink;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Обсудим ваш проект?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Оставьте заявку, и я свяжусь с вами в течение часа
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-gray-800 flex items-center justify-center gap-2">
                <Icon name="Mail" size={24} className="text-purple-600" />
                Форма обратной связи
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Ваше имя *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Введите ваше имя"
                      required
                      className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      required
                      className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Телефон
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+7 (999) 123-45-67"
                      className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Тип услуги
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md bg-background focus:border-purple-500 focus:ring-purple-500 focus:ring-2 focus:ring-offset-2"
                    >
                      <option value="">Выберите услугу</option>
                      <option value="Сайт-визитка">Сайт-визитка</option>
                      <option value="Одностраничный сайт">
                        Одностраничный сайт
                      </option>
                      <option value="Многостраничный сайт">
                        Многостраничный сайт
                      </option>
                      <option value="Консультация">Консультация</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Расскажите о проекте *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Опишите ваши задачи, цели, пожелания к дизайну..."
                    rows={5}
                    required
                    className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-semibold py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Icon name="Send" size={20} />
                  Отправить заявку
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  Нажимая кнопку, вы соглашаетесь на обработку персональных
                  данных
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
