import React, { useEffect } from 'react';
import SEOHead from './SEOHead';

const AboutUsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <SEOHead 
        title="من نحن"
        description="تعرف على مسار فلو وفريق العمل. نحن شركة تقنية متخصصة في حلول الأتمتة والذكاء الاصطناعي، نساعد الشركات على التحول الرقمي وتحسين كفاءة الأعمال."
        keywords="من نحن MasarFlow، مشاري الرماح، شركة تقنية، فريق العمل، رؤية الشركة، رسالة الشركة، خبرة تقنية"
      />
      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 pt-24 md:pt-32 pb-12 md:pb-16">
        {/* Page Title */}
        <div className="text-center mb-12 md:mb-20">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 px-4">
            من نحن
          </h1>
          <p className="text-base md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            الرؤية تبدأ بفكرة… والتقنية تحققها
          </p>
        </div>

        {/* Section 1: Introduction */}
        <section className="mb-16 md:mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Column - Text */}
                         <div className="order-2 lg:order-1 text-center lg:text-right">
               <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                 
               </h2>
                             <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8">
                 مرحبا انا مشاري الرماح. رائد أعمال رقمي متخصص في الأتمتة والذكاء الاصطناعي، أبتكر حلول تقنية تُسهّل الأعمال وتزيد الكفاءة
               </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8">
                أسست هذه الشركة لأقدم ما كنت أبحث عنه دائمًا: حلول تقنية ذكية وبسيطة تجعل العمل أكثر كفاءة وفعالية.
              </p>
            </div>

            {/* Right Column - YouTube Video */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                {/* Responsive Video Container with 16:9 aspect ratio */}
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <div className="absolute inset-0 rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl overflow-hidden border-4 border-blue-500">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/DIf47dAokgk?si=4YZwkK0SSfLTj4z6"
                      title="فيديو مشاري الرماح - MasarFlow"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: لماذا MasarFlow */}
        <section className="mb-16 md:mb-32">
          <div className="text-center mb-12 md:mb-16">
                         <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
               لماذا MasarFlow؟
             </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              نتميز بأربع ركائز أساسية تجعلنا الخيار الأمثل لحلولك التقنية
            </p>
          </div>

                     <div className="max-w-6xl mx-auto">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
               <div className="flex items-start space-x-6 space-x-reverse">
                 <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                   <div className="text-2xl">🎯</div>
                 </div>
                 <div>
                   <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">فهم دقيق للاحتياجات</h3>
                   <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                     أعمل بتركيز عالي على فهم احتياجك بدقة، لأقدم لك الحل الأمثل الذي يناسب مشروعك.
                   </p>
                 </div>
               </div>
               
               <div className="flex items-start space-x-6 space-x-reverse">
                 <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                   <div className="text-2xl">🤖</div>
                 </div>
                 <div>
                   <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">دمج الأتمتة والذكاء الاصطناعي</h3>
                   <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                     أدمج بين الأتمتة والذكاء الاصطناعي لإنشاء حلول ذكية تتكيف مع احتياجاتك.
                   </p>
                 </div>
               </div>
               
               <div className="flex items-start space-x-6 space-x-reverse">
                 <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                   <div className="text-2xl">✨</div>
                 </div>
                 <div>
                   <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">تجربة رقمية سهلة</h3>
                   <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                     أحرص على تقديم تجربة رقمية سهلة وممتعة، تجعل استخدام التكنولوجيا أمرًا بسيطًا.
                   </p>
                 </div>
               </div>
               
               <div className="flex items-start space-x-6 space-x-reverse">
                 <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                   <div className="text-2xl">🚀</div>
                 </div>
                 <div>
                   <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">مواكبة التطورات</h3>
                   <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                     أواكب تطورات السوق لأبقي عملائي دائمًا في الطليعة مع أحدث التقنيات.
                   </p>
                 </div>
               </div>
             </div>
           </div>
        </section>

        {/* Section 3: الخدمات */}
        <section className="mb-16 md:mb-32">
          <div className="text-center mb-12 md:mb-16">
                         <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
               ما أقدمه من خدمات
             </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              مجموعة شاملة من الحلول التقنية المتقدمة لتحقيق أهدافك
            </p>
          </div>

                     <div className="max-w-6xl mx-auto">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                               <div className="flex items-start space-x-6 space-x-reverse">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="text-2xl text-blue-600"></div>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">أنظمة أتمتة مخصصة</h3>
                    <p className="text-base md:text-lg text-gray-600">تصميم أنظمة أتمتة مخصصة باستخدام n8n.</p>
                  </div>
                </div>
               
               <div className="flex items-start space-x-6 space-x-reverse">
                 <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                   <div className="text-2xl text-green-600">🤖</div>
                 </div>
                 <div>
                   <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">روبوتات ذكية</h3>
                   <p className="text-base md:text-lg text-gray-600">إنشاء روبوتات ذكية تعمل نيابةً عنك على مدار الساعة.</p>
                 </div>
               </div>
               
               <div className="flex items-start space-x-6 space-x-reverse">
                 <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                   <div className="text-2xl text-purple-600">🧠</div>
                 </div>
                 <div>
                   <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">حلول الذكاء الاصطناعي</h3>
                   <p className="text-base md:text-lg text-gray-600">تطوير حلول ذكاء اصطناعي لتسريع العمل وتحسين النتائج.</p>
                 </div>
               </div>
               
               <div className="flex items-start space-x-6 space-x-reverse">
                 <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                   <div className="text-2xl text-orange-600">📈</div>
                 </div>
                 <div>
                   <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">أنظمة تسويق مؤتمتة</h3>
                   <p className="text-base md:text-lg text-gray-600">صناعة أنظمة تسويق مؤتمتة لجلب عملاء محتملين دون مجهود.</p>
                 </div>
               </div>
               
               <div className="flex items-start space-x-6 space-x-reverse">
                 <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                   <div className="text-2xl text-pink-600">🎨</div>
                 </div>
                 <div>
                   <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">تصميم UI/UX</h3>
                   <p className="text-base md:text-lg text-gray-600">تصميم واجهات مستخدم وتجربة استخدام ترفع من احترافية مشروعك.</p>
                 </div>
               </div>
               
               <div className="flex items-start space-x-6 space-x-reverse">
                 <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                   <div className="text-2xl text-indigo-600">💻</div>
                 </div>
                 <div>
                   <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">حلول برمجية ذكية</h3>
                   <p className="text-base md:text-lg text-gray-600">تطوير حلول برمجية ذكية حسب احتياجك الدقيق.</p>
                 </div>
               </div>
             </div>
           </div>
        </section>

        {/* Section 4: الرسالة والرؤية */}
        <section className="mb-16 md:mb-32">
          <div className="text-center mb-12 md:mb-16">
                         <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
               رسالتي ورؤيتي
             </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              نؤمن بقوة التكنولوجيا في تغيير العالم للأفضل
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8 md:space-y-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8">
                  <div className="text-4xl md:text-5xl">🎯</div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">رسالتي</h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
                  أن أجعل التكنولوجيا أداة بسيطة بين يديك، تساعدك على تحقيق أهدافك بسهولة وكفاءة عالية.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8">
                  <div className="text-4xl md:text-5xl">🤝</div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">رؤيتي</h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
                  أن أكون مرجعًا في تقديم الحلول التقنية الذكية، وأساعد الشركات على النمو والتطور في العصر الرقمي.
                </p>
              </div>
            </div>
          </div>
        </section>

                 {/* Section 5: المؤسس */}
         <section className="text-center">
           <div className="max-w-2xl mx-auto">
             <div className="w-32 h-32 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full mx-auto mb-6 md:mb-8 flex items-center justify-center">
               <div className="text-5xl md:text-6xl text-white font-bold">م</div>
             </div>
                          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-4">مشاري الرماح</h3>
             <p className="text-lg md:text-xl text-primary-600 font-semibold mb-4 md:mb-6">مؤسس MasarFlow</p>
             
             {/* Social Media Section */}
             <div className="mb-6 md:mb-8">
               <p className="text-lg md:text-xl font-semibold text-gray-700 mb-4 md:mb-6">تابعني</p>
               
               <div className="flex items-center justify-center space-x-4 space-x-reverse">
                 {/* LinkedIn */}
                 <a 
                   href="https://www.linkedin.com/in/meshari-al-ramah-%D9%85%D8%B4%D8%A7%D8%B1%D9%8A-%D8%A7%D9%84%D8%B1%D9%85%D8%A7%D8%AD-78a25337b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                   title="مشاري الرماح - لينكد إن"
                 >
                   <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                   </svg>
                 </a>
                 
                                   {/* Instagram */}
                  <a 
                    href="https://www.instagram.com/meshari.alrammah?igsh=eG9sc3dqMndxbTk2" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                    title="مشاري الرماح - انستغرام"
                  >
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.649-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                 
                 {/* Facebook */}
                 <a 
                   href="https://www.facebook.com/YOUR_FACEBOOK_USERNAME" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                 >
                   <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                   </svg>
                 </a>
               </div>
             </div>
           </div>
         </section>
      </div>
    </div>
  );
};

export default AboutUsPage;
