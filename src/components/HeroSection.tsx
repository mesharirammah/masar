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

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* العنوان الرئيسي المحسن - متجاوب للهواتف */}
          <h1 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-normal text-white mb-8 md:mb-16 leading-[1.5] md:leading-[1.8] max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto mt-16 md:mt-24">
            مسار فلو | Masar Flow
          </h1>
          
          {/* النص الفرعي */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 md:mb-16 leading-[1.5] md:leading-[1.8] max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto">
            شركة تقنية متخصصة بتقديم حلول الأتمتة والذكاء الاصطناعي، وتصميم أنظمة مبتكرة تدعم التحول الرقمي وتُحسّن كفاءة الأعمال.
          </p>

          {/* الأزرار الجديدة مع هامش علوي - متجاوبة للهواتف */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mb-12 md:mb-16 mt-4 md:mt-8">
            <button 
              onClick={handleServicesClick}
              className="btn-primary text-sm md:text-lg px-4 md:px-8 py-2 md:py-4 flex items-center justify-center gap-2 md:gap-3 group w-full sm:w-auto"
            >
              تعرف على الخدمات
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-outline text-sm md:text-lg px-4 md:px-8 py-2 md:py-4 flex items-center justify-center gap-2 md:gap-3 group text-white border-white hover:bg-white hover:text-primary-600 w-full sm:w-auto">
              الانضمام إلى المجتمع
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Trust Indicators - محسن للهواتف مع تباعد أفضل */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 text-white/80 mt-12 md:mt-16 mb-20 md:mb-24">
            {/* قسم التقييم */}
            <div className="flex items-center gap-2 mb-3 sm:mb-0">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-xs sm:text-sm md:text-base font-medium">4.9/5 تقييم</span>
            </div>
            
            {/* فاصل - يظهر فقط على الشاشات المتوسطة والكبيرة */}
            <div className="hidden sm:block w-px h-4 md:h-6 bg-white/30"></div>
            
            {/* قسم الموثوقية */}
            <div className="text-center sm:text-right mb-3 sm:mb-0">
              <span className="text-xs sm:text-sm md:text-base font-medium">موثوق من قبل 1000+ شركة</span>
            </div>
            
            {/* فاصل - يظهر فقط على الشاشات المتوسطة والكبيرة */}
            <div className="hidden sm:block w-px h-4 md:h-6 bg-white/30"></div>
            
            {/* قسم الدعم الفني */}
            <div className="text-center sm:text-right">
              <span className="text-xs sm:text-sm md:text-base font-medium">دعم فني 24/7</span>
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
