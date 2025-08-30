import React, { useEffect } from 'react';
import SEOHead from './SEOHead';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Check, Brain, Palette } from 'lucide-react';

const ServicesPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // التمرير إلى أعلى الصفحة عند تحميل المكون
    window.scrollTo(0, 0);
  }, []);

  const handleContactClick = () => {
    // الانتقال إلى صفحة اتصل بنا
    navigate('/contact-us');
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100">
      <SEOHead 
        title="خدماتنا"
        description="اكتشف خدماتنا المتقدمة في الأتمتة الذكية، حلول الذكاء الاصطناعي، تصميم واجهات المستخدم، والتسويق المؤتمت. نقدم حلول تقنية مبتكرة لتطوير أعمالك."
        keywords="خدمات MasarFlow، الأتمتة الذكية، الذكاء الاصطناعي، تصميم واجهات، التسويق المؤتمت، حلول تقنية، تطوير الأعمال"
      />
      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 pt-24 md:pt-32 pb-12 md:pb-16">
        {/* Page Title */}
        <div className="text-center mb-12 md:mb-20">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 px-4">
            خدماتنا: جوهر مسارك الرقمي
          </h1>
          <p className="text-base md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            ابدأ رحلتك نحو التميز مع حلول مدروسة في الأتمتة،و الذكاء الاصطناعي، وتجارب المستخدم العصرية
          </p>
        </div>

        {/* Section 1: Smart Automation - Image Left, Text Right */}
        <section id="smart-automation" className="mb-16 md:mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Column - Image */}
            <div className="order-1 lg:order-1">
              <div className="relative">
                <img
                  src="/images/smart_automation.png"
                  alt="الأتمتة الذكية"
                  className="w-full h-auto rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl"
                />
              </div>
            </div>

            {/* Right Column - Text */}
            <div className="order-2 lg:order-2 text-center lg:text-right">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                الأتمتة الذكية لتوفير الوقت وزيادة الإنتاجية
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8">
                وفّر ساعات من العمل اليدوي عبر أنظمة أتمتة متقدمة. نساعدك تبني سير عمل ذكي يُنجز المهام أوتوماتيكياً، يربط الأدوات ببعضها، ويمنحك وقتك للتركيز على ما يهم.
              </p>
              
              <div className="mb-6 md:mb-8">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3 md:mb-4">
                  تشمل خدماتنا:
                </h3>
                <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
                  <li className="flex items-start space-x-2 md:space-x-3 space-x-reverse">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">إنشاء روبوتات محادثة ذكية لخدمة العملاء</span>
                  </li>
                  <li className="flex items-start space-x-2 md:space-x-3 space-x-reverse">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">أتمتة المهام المتكررة (مثل إرسال الإيميلات، جدولة الاجتماعات، تحديث البيانات)</span>
                  </li>
                  <li className="flex items-start space-x-2 md:space-x-3 space-x-reverse">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">ربط الأنظمة والأدوات (CRM, Google Sheets, Notion, وغيرها)</span>
                  </li>
                  <li className="flex items-start space-x-2 md:space-x-3 space-x-reverse">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">مراقبة الأداء والتنبيهات الذكية</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={handleContactClick}
                className="w-full md:w-auto bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-300 flex items-center justify-center space-x-2 space-x-reverse group"
              >
                <span>تواصل معنا الآن</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </section>

        {/* Section 2: AI Solutions - Text Left, Image Right */}
        <section id="ai-solutions" className="mb-16 md:mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Column - Text */}
            <div className="order-2 lg:order-1 text-center lg:text-right">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                الذكاء الاصطناعي في خدمتك... من أول عميل لآخر منشور
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8">
                استثمر قوة الذكاء الاصطناعي لصناعة محتوى، جذب عملاء، وإنجاز مهامك بكفاءة عالية. نحن لا نبيع أدوات، بل نبني لك أنظمة تفكر معك وتشتغل عنك.
              </p>
              
              <div className="mb-6 md:mb-8">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3 md:mb-4">
                  تشمل خدماتنا:
                </h3>
                <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
                  <li className="flex items-start space-x-2 md:space-x-3 space-x-reverse">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">نظام ذكي للعثور على العملاء المحتملين وتحليلهم</span>
                  </li>
                  <li className="flex items-start space-x-2 md:space-x-3 space-x-reverse">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">توليد محتوى تسويقي (نصوص، صور، فيديو) احترافي وبسرعة</span>
                  </li>
                  <li className="flex items-start space-x-2 md:space-x-3 space-x-reverse">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">إدارة الحملات التسويقية وتحليل نتائجها باستخدام الذكاء الاصطناعي</span>
                  </li>
                  <li className="flex items-start space-x-2 md:space-x-3 space-x-reverse">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">دعم روبوتات محادثة تحاكي البشر وتتفاعل مع جمهورك</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={handleContactClick}
                className="w-full md:w-auto bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-300 flex items-center justify-center space-x-2 space-x-reverse group"
              >
                <span>تواصل معنا الآن</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

            {/* Right Column - Image */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img
                  src="/images/ai_solutions.png"
                  alt="حلول الذكاء الاصطناعي"
                  className="w-full h-auto rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: UI/UX Design - Image Left, Text Right */}
        <section id="uiux-design" className="mb-16 md:mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Column - Image */}
            <div className="order-1 lg:order-1">
              <div className="relative">
                <img
                  src="/images/uiux_design.png"
                  alt="تصميم واجهات المستخدم وتجربة المستخدم"
                  className="w-full h-auto rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl"
                />
              </div>
            </div>

            {/* Right Column - Text */}
            <div className="order-2 lg:order-2 text-center lg:text-right">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                واجهات تبهر، وتجارب تبقى في الذاكرة
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8">
                صمّمنا لكل من جرّب خدماتنا واجهة ذكية، مرنة، وسهلة الاستخدام. تصاميمنا لا تُجمّل فقط، بل تبني تجربة عميل ناجحة تزيد من تفاعله وثقته بك.
              </p>
              
              <div className="mb-6 md:mb-8">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3 md:mb-4">
                  تشمل خدماتنا:
                </h3>
                <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
                  <li className="flex items-start space-x-2 md:space-x-3 space-x-reverse">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">تصميم واجهات تطبيقات ومواقع احترافية</span>
                  </li>
                  <li className="flex items-start space-x-2 md:space-x-3 space-x-reverse">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">تحليل تجربة المستخدم وتقديم تحسينات حقيقية</span>
                  </li>
                  <li className="flex items-start space-x-2 md:space-x-3 space-x-reverse">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">بناء هُوية بصرية كاملة متوافقة مع البراند الخاص بك</span>
                  </li>
                  <li className="flex items-start space-x-2 md:space-x-3 space-x-reverse">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">تصاميم تفاعلية (Prototypes) لأخذ القرار بسهولة</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={handleContactClick}
                className="w-full md:w-auto bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-300 flex items-center justify-center space-x-2 space-x-reverse group"
              >
                <span>تواصل معنا الآن</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl md:rounded-2xl p-6 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">هل تحتاج إلى خدمة مخصصة؟</h3>
            <p className="text-blue-100 mb-6 md:mb-8 text-base md:text-lg px-4">
              نحن هنا لمساعدتك في تحديد أفضل الحلول لاحتياجات عملك
            </p>
            <button
              onClick={handleContactClick}
              className="w-full md:w-auto inline-flex items-center justify-center space-x-2 space-x-reverse bg-white text-primary-600 px-6 md:px-10 py-4 md:py-5 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 text-base md:text-lg"
            >
              <span>تواصل معنا الآن</span>
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
