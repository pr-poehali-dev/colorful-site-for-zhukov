
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-600 via-purple-600 to-blue-600 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Жуков Евгений
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-violet-500 mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-purple-100 mb-4">
              Веб-разработчик
            </p>
            <p className="text-lg text-purple-200 max-w-2xl mx-auto mb-8">
              Создаю современные, функциональные и красивые веб-сайты, которые работают на всех устройствах и приносят результат вашему бизнесу
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-purple-50 font-semibold px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Icon name="Rocket" size={20} />
              Обсудить проект
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-purple-600 font-semibold px-8 py-3 text-lg transition-all duration-300"
            >
              <Icon name="Eye" size={20} />
              Посмотреть работы
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-gradient-to-r from-violet-500 to-pink-500 rounded-full opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
    </section>
  );
};

export default Hero;
