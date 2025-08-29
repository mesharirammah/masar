import React, { useEffect } from 'react';
import { Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
  useEffect(() => {
    // التمرير إلى أعلى الصفحة عند تحميل المكون
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Main Content */}
      <div className="container mx-auto px-6 pt-32 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              شروط الاستخدام
            </h1>
            <p className="text-lg text-gray-600">
              آخر تحديث: 23 أغسطس 2025
            </p>
          </div>

          {/* Introduction */}
          <div className="mb-12">
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              مرحبًا بك في موقع مسار فلو. باستخدامك لهذا الموقع أو أي من خدماتنا، فإنك توافق على الالتزام بالشروط والأحكام التالية. يُرجى قراءتها بعناية قبل استخدام الموقع.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            {/* Section 1 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. قبول الشروط
              </h2>
              <p className="text-gray-700 leading-relaxed text-justify">
                من خلال الوصول إلى الموقع أو استخدامه، فإنك تقر بأنك قرأت هذه الشروط وفهمتها وتوافق على الالتزام بها. إذا كنت لا توافق على هذه الشروط، يُرجى عدم استخدام الموقع.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. استخدام الموقع
              </h2>
              <div className="space-y-3 text-gray-700 text-justify">
                <p>يجب ألا تستخدم الموقع لأي غرض غير قانوني أو غير مصرح به.</p>
                <p>يمنع إرسال أي محتوى يحتوي على فيروسات أو تعليمات برمجية ضارة.</p>
                <p>يمنع استخدام الموقع لانتحال شخصية أو للتلاعب بالخدمات أو زوار الموقع.</p>
              </div>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. الملكية الفكرية
              </h2>
              <p className="text-gray-700 leading-relaxed text-justify mb-4">
                جميع الحقوق محفوظة لـ مسار فلو. يشمل ذلك:
              </p>
              <div className="space-y-3 text-gray-700 text-justify">
                <p>المحتوى، التصميم، النصوص، الشعارات، الرسومات، البرمجيات، وأي مواد أخرى.</p>
                <p>لا يُسمح بإعادة إنتاج أو توزيع أي جزء من الموقع دون إذن كتابي مسبق.</p>
              </div>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. الخدمات الرقمية
              </h2>
              <p className="text-gray-700 leading-relaxed text-justify">
                بعض خدماتنا قد تتطلب تسجيل دخول أو اشتراك مدفوع. عند استخدامك أي من هذه الخدمات، فأنت توافق على شروط الاستخدام الخاصة بها، والتي قد يتم توضيحها بشكل منفصل.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. المحتوى المُنشأ بواسطة المستخدم
              </h2>
              <p className="text-gray-700 leading-relaxed text-justify">
                إذا قمت بإرسال أو تحميل أي محتوى على الموقع (مثل تعليقات أو نماذج تواصل)، فإنك تمنحنا حقًا غير حصري لاستخدامه أو نشره ضمن أنشطتنا التسويقية أو التشغيلية، ما لم تطلب خلاف ذلك.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. حدود المسؤولية
              </h2>
              <div className="space-y-3 text-gray-700 text-justify">
                <p>نحن نبذل جهدًا كبيرًا لضمان دقة المعلومات، ولكن لا نضمن أن الموقع أو الخدمات خالية من الأخطاء أو الانقطاعات.</p>
                <p>مسار فلو غير مسؤولة عن أي خسائر ناتجة عن استخدام الموقع أو الاعتماد على محتواه.</p>
              </div>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. الروابط الخارجية
              </h2>
              <p className="text-gray-700 leading-relaxed text-justify">
                قد يحتوي الموقع على روابط لمواقع خارجية. نحن غير مسؤولين عن محتوى أو سياسات الخصوصية لتلك المواقع.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. التعديلات على الشروط
              </h2>
              <p className="text-gray-700 leading-relaxed text-justify">
                نحتفظ بالحق في تعديل شروط الاستخدام في أي وقت. سيتم نشر التحديثات على هذه الصفحة مع تاريخ آخر تعديل. استمرارك في استخدام الموقع بعد التعديلات يُعد موافقة على الشروط الجديدة.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                9. القانون الواجب التطبيق
              </h2>
              <p className="text-gray-700 leading-relaxed text-justify">
                تخضع هذه الشروط وتُفسر وفقًا للقوانين المعمول بها في الجمهورية التركية.
              </p>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                10. التواصل معنا
              </h2>
              <p className="text-gray-700 mb-4 text-justify">
                للاستفسارات حول شروط الاستخدام، يُرجى التواصل عبر:
              </p>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-center space-x-3 space-x-reverse">
                  <Mail className="w-5 h-5 text-primary-600" />
                  <span><strong>البريد الإلكتروني:</strong> info@masarflow.com</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <MapPin className="w-5 h-5 text-primary-600" />
                  <span><strong>أو من خلال</strong> <Link to="/contact" className="text-primary-600 hover:text-primary-700 underline">صفحة اتصل بنا</Link></span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-center text-white mt-12">
            <h3 className="text-2xl font-bold mb-4">هل لديك أسئلة حول شروط الاستخدام؟</h3>
            <p className="text-blue-100 mb-6">
              نحن هنا لمساعدتك في فهم شروط استخدام موقعنا
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center space-x-2 space-x-reverse bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              <span>تواصل معنا</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
