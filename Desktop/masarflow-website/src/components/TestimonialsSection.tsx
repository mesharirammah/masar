import React from 'react';
import { Quote, Star, User } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "لم نكن نتخيل أن أتمتة عملياتنا اليومية يمكن أن تحدث هذا الفارق. بفضل مسار فلو، وفرنا ساعات لا تحصى وأصبح فريقنا أكثر تركيزًا على المهام الإبداعية.",
      name: "أحمد منصور",
      position: "مدير العمليات، شركة النمو الرقمي",
      avatar: User
    },
    {
      quote: "كانت خدمة الذكاء الاصطناعي في صناعة المحتوى نقطة تحول حقيقية لاستراتيجيتنا التسويقية. الجودة والإبداع فاقا كل توقعاتنا.",
      name: "سارة كريم",
      position: "رئيسة قسم التسويق، متجر إلكتروني",
      avatar: User
    },
    {
      quote: "العمل مع فريق مسار فلو كان تجربة استثنائية. لم يقدموا لنا حلاً تقنيًا فقط، بل كانوا شركاء حقيقيين في فهم أهدافنا وتحقيقها.",
      name: "يوسف حداد",
      position: "مؤسس، شركة ناشئة في قطاع التكنولوجيا",
      avatar: User
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto">
        {/* عنوان القسم */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-800 mb-6">
            ماذا يقول شركاؤنا في النجاح ؟
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            اكتشف كيف ساعدنا عملاءنا على تحقيق النمو والابتكار من خلال حلولنا التقنية المتقدمة
          </p>
        </div>

        {/* بطاقات آراء العملاء */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-100 group cursor-pointer">
              {/* أيقونة الاقتباس */}
              <div className="flex justify-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Quote className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* نص الشهادة */}
              <div className="text-center mb-6">
                <p className="text-secondary-700 leading-relaxed text-lg italic">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* تقييم 5 نجوم */}
              <div className="flex justify-center mb-6">
                <div className="flex space-x-1 space-x-reverse">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              {/* معلومات العميل */}
              <div className="flex items-center justify-center space-x-4 space-x-reverse">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary-600 to-secondary-700 rounded-full flex items-center justify-center">
                    <testimonial.avatar className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="text-lg font-bold text-secondary-800 mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-secondary-600 text-sm">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* زر إضافي */}
        <div className="text-center mt-16">
          <button className="btn-outline text-lg px-8 py-4 border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white transition-all duration-300">
            اقرأ المزيد من الآراء
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
