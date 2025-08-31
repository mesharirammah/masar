import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  const handleServicesClick = () => {
    // الانتقال إلى صفحة الخدمات
    navigate('/services');
  };

  return (
    <section className="hero-gradient min-h-screen flex items-center relative overflow-hidden pt-16 md:pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 md:px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* العنوان الرئيسي المحسن - مكبر جداً للهواتف */}
          <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-10 leading-[1.2] md:leading-[1.4] mx-auto mt-16 md:mt-24">
            مسار فلو | Masar Flow
          </h1>
          
          {/* النص الفرعي */}
          <p className="text-2xl sm:text-xl md:text-2xl lg:text-3xl text-white/95 mb-10 md:mb-16 leading-[1.3] md:leading-[1.6] max-w-4xl mx-auto px-2">
            شركة تقنية متخصصة بتقديم حلول الأتمتة والذكاء الاصطناعي، وتصميم أنظمة مبتكرة تدعم التحول الرقمي وتُحسّن كفاءة الأعمال.
          </p>

          {/* الأزرار المحسنة والمكبرة جداً للهواتف */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 md:gap-6 mb-12 md:mb-16 mt-6 md:mt-8 px-4 md:px-0">
            <button 
              onClick={handleServicesClick}
              className="bg-blue-800 hover:bg-blue-900 text-white font-bold text-xl md:text-lg px-12 md:px-10 py-6 md:py-5 rounded-xl flex items-center justify-center gap-4 group w-full sm:w-auto transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              تعرف على الخدمات
              <ArrowRight className="w-7 h-7 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-transparent border-2 border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white font-bold text-xl md:text-lg px-12 md:px-10 py-6 md:py-5 rounded-xl flex items-center justify-center gap-4 group w-full sm:w-auto transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl bg-white/95">
              الانضمام إلى المجتمع
              <ArrowRight className="w-7 h-7 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Trust Indicators - محسن للهواتف مع تباعد أفضل */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-10 text-white/90 mt-12 md:mt-16 mb-20 md:mb-24 px-4">
            {/* قسم التقييم */}
            <div className="flex items-center gap-3 text-center">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm sm:text-base md:text-lg font-semibold">4.9/5 تقييم</span>
            </div>
            
            {/* فاصل - يظهر فقط على الشاشات المتوسطة والكبيرة */}
            <div className="hidden sm:block w-px h-6 md:h-8 bg-white/40"></div>
            
            {/* قسم الموثوقية */}
            <div className="text-center">
              <span className="text-sm sm:text-base md:text-lg font-semibold">موثوق من قبل 1000+ شركة</span>
            </div>
            
            {/* فاصل - يظهر فقط على الشاشات المتوسطة والكبيرة */}
            <div className="hidden sm:block w-px h-6 md:h-8 bg-white/40"></div>
            
            {/* قسم الدعم الفني */}
            <div className="text-center">
              <span className="text-sm sm:text-base md:text-lg font-semibold">دعم فني 24/7</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 md:h-3 bg-white/60 rounded-full mt-1 md:mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
