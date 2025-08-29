import React, { useEffect } from 'react';
import SEOHead from './SEOHead';

const OurWorkPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <SEOHead 
        title="أعمالنا"
        description="اطلع على مشاريعنا وأعمالنا المتميزة في مجال الأتمتة والذكاء الاصطناعي. شاهد كيف ساعدنا عملاءنا على تحقيق التحول الرقمي وتحسين كفاءة أعمالهم."
        keywords="أعمال MasarFlow، مشاريع الأتمتة، حلول الذكاء الاصطناعي، دراسات الحالة، التحول الرقمي، مشاريع تقنية"
      />
      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 pt-24 md:pt-32 pb-12 md:pb-16">
        {/* Page Title */}
        <div className="text-center mb-12 md:mb-20">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 px-4">
            منصة أعمالنا: حلول حقيقية لنتائج ملموسة
          </h1>
          <p className="text-base md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            اكتشف مجموعة من مشاريعنا المتميزة والحلول التقنية المبتكرة التي قدمناها لعملائنا
          </p>
        </div>

        {/* First Project Section - Redesigned */}
        <section className="mb-16 md:mb-32">
          <div className="max-w-6xl mx-auto">
            {/* Project Container with Professional Background */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              {/* Project Header */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-4 md:px-8 py-6 md:py-8 text-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
                  نظام البحث الذكي عن العملاء المحتملين
                </h2>
                <div className="w-20 h-1 bg-white mx-auto rounded-full"></div>
              </div>

              {/* Main Content Area */}
              <div className="p-4 md:p-8">
                {/* Image Section - Full Width with Professional Styling */}
                <div className="mb-8 md:mb-12">
                  <div className="relative max-w-3xl mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl transform rotate-1"></div>
                    <div className="relative bg-white rounded-xl shadow-lg border-2 border-gray-100 overflow-hidden">
                      <img
                        src="/images/Pictureofourworkers.png"
                        alt="نظام البحث الذكي عن العملاء المحتملين"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                  {/* Left Column - Challenge & Solution */}
                  <div className="space-y-6">
                    {/* The Challenge */}
                    <div className="bg-red-50 rounded-xl p-4 md:p-6 border-r-4 border-red-500">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center ml-3">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                          </svg>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-red-700">
                          التحدي
                        </h3>
                      </div>
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed text-right">
                        البحث اليدوي عن عملاء جدد عملية مرهقة وتستهلك وقتًا ثمينًا يمكن استثماره في إغلاق الصفقات وتحليل السوق. غالبًا ما تكون البيانات المجمّعة غير مكتملة وتحتاج إلى جهد إضافي لإثرائها.
                      </p>
                    </div>

                    {/* Our Solution */}
                    <div className="bg-green-50 rounded-xl p-4 md:p-6 border-r-4 border-green-500">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center ml-3">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-green-700">
                          الحل الذي قدمناه
                        </h3>
                      </div>
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed text-right">
                        قمنا بتصميم وتطوير مسار عمل مؤتمت بالكامل على منصة n8n يقوم بتحويل هذه العملية المعقدة إلى مهمة تلقائية. يبحث النظام بذكاء عن عملاء محتملين من مصادر متعددة (مثل خرائط جوجل وبحث جوجل)، ويقوم تلقائيًا بإثراء بياناتهم بمعلومات تسويقية قيمة، ثم يحفظها بشكل منظم وجاهز للاستخدام في Google Sheets.
                      </p>
                    </div>
                  </div>

                  {/* Right Column - Key Features */}
                  <div>
                    <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-4 md:p-6">
                      <div className="flex items-center mb-6">
                        <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center ml-3">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-purple-700">
                          أبرز الميزات
                        </h3>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-start space-x-4 space-x-reverse bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                          <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                          </div>
                          <div className="text-right">
                            <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2">بحث متعدد المصادر</h4>
                            <p className="text-base text-gray-600 leading-relaxed">القدرة على اختيار البحث في خرائط جوجل أو بحث جوجل.</p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-4 space-x-reverse bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                          <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                          </div>
                          <div className="text-right">
                            <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2">إثراء تلقائي للبيانات</h4>
                            <p className="text-base text-gray-600 leading-relaxed">استخلاص معلومات إضافية من مواقع الشركات المستهدفة تلقائيًا.</p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-4 space-x-reverse bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                          <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                          </div>
                          <div className="text-right">
                            <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2">تنظيم وحفظ مركزي</h4>
                            <p className="text-base text-gray-600 leading-relaxed">حفظ جميع البيانات النظيفة والمنظمة في Google Sheets.</p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-4 space-x-reverse bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                          <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </div>
                          <div className="text-right">
                            <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2">مرونة وتحكم كامل</h4>
                            <p className="text-base text-gray-600 leading-relaxed">تصميم مرن يسمح للمستخدم بتحديد معايير البحث والتحليل.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="text-center bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
            هل لديك مشروع مماثل؟
          </h3>
          <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto">
            نحن هنا لمساعدتك في تحويل أفكارك إلى حلول تقنية متقدمة تحقق أهدافك
          </p>
          <a
            href="/contact-us"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            تواصل معنا الآن
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </a>
        </section>
      </div>
    </div>
  );
};

export default OurWorkPage;
