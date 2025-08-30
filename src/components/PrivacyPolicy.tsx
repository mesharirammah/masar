import React, { useEffect } from 'react';
import { Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
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
              سياسة الخصوصية
            </h1>
            <p className="text-lg text-gray-600">
              آخر تحديث: 23 أغسطس 2025
            </p>
          </div>

          {/* Introduction */}
          <div className="mb-12">
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              في مسار فلو، نولي أهمية كبيرة لحماية خصوصية مستخدمينا وزوار موقعنا. توضح سياسة الخصوصية هذه كيف نجمع المعلومات ونستخدمها ونحميها عند استخدامك لموقعنا وخدماتنا الرقمية.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            {/* Section 1 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. المعلومات التي نقوم بجمعها
              </h2>
              <div className="space-y-3 text-gray-700 text-justify">
                <p><strong>معلومات الاتصال:</strong> مثل الاسم، البريد الإلكتروني، رقم الهاتف، عند تعبئة النماذج أو التواصل معنا.</p>
                <p><strong>البيانات التقنية:</strong> مثل عنوان IP، نوع الجهاز، نظام التشغيل، الصفحات التي تزورها، ومدة التصفح.</p>
                <p><strong>المراسلات:</strong> أي محتوى ترسله لنا عبر البريد الإلكتروني أو نموذج الاتصال.</p>
                <p><strong>معلومات الاستخدام:</strong> حول كيفية استخدامك لخدماتنا، وذلك بهدف تحسين تجربة المستخدم.</p>
              </div>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. كيف نستخدم المعلومات
              </h2>
              <div className="space-y-3 text-gray-700 text-justify">
                <p>تحسين موقعنا وخدماتنا.</p>
                <p>الرد على استفساراتك وتقديم الدعم الفني.</p>
                <p>إرسال تحديثات أو عروض ذات صلة (فقط إذا وافقت).</p>
                <p>تحليل البيانات لفهم سلوك الزوار وتحسين الأداء.</p>
                <p>ضمان الأمان والامتثال للأنظمة والقوانين.</p>
              </div>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. مشاركة المعلومات
              </h2>
              <p className="text-gray-700 leading-relaxed text-justify">
                نحن لا نبيع أو نؤجر بياناتك الشخصية لأي طرف ثالث. قد نشارك بعض المعلومات مع شركائنا أو مزودي الخدمة (مثل خدمات التحليلات أو البريد الإلكتروني) ولكن فقط بما يتوافق مع هذه السياسة.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. ملفات تعريف الارتباط (Cookies)
              </h2>
              <p className="text-gray-700 leading-relaxed text-justify">
                نستخدم "الكوكيز" لتحسين تجربة التصفح، وتوفير محتوى مخصص، وتحليل أداء الموقع. يمكنك التحكم في إعدادات الكوكيز من خلال متصفحك.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. الأمان
              </h2>
              <p className="text-gray-700 leading-relaxed text-justify">
                نستخدم أحدث بروتوكولات الحماية والتشفير لضمان أمان بياناتك. ومع ذلك، لا يمكن ضمان أمان البيانات بنسبة 100% عبر الإنترنت.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. حقوقك
              </h2>
              <div className="space-y-3 text-gray-700 text-justify">
                <p>يمكنك طلب الاطلاع على بياناتك الشخصية أو تعديلها أو حذفها.</p>
                <p>يمكنك الانسحاب من أي مراسلات تسويقية في أي وقت.</p>
              </div>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. التغييرات على السياسة
              </h2>
              <p className="text-gray-700 leading-relaxed text-justify">
                قد نقوم بتحديث هذه السياسة من وقت لآخر. سيتم نشر أي تغييرات هنا مع تاريخ التحديث. ننصحك بمراجعتها دورياً.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. التواصل معنا
              </h2>
              <p className="text-gray-700 mb-4 text-justify">
                إذا كان لديك أي أسئلة أو استفسارات بخصوص سياسة الخصوصية، يرجى التواصل معنا عبر:
              </p>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-center space-x-3 space-x-reverse">
                  <Mail className="w-5 h-5 text-primary-600" />
                  <span><strong>البريد الإلكتروني:</strong> support@masarflow.com</span>
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
            <h3 className="text-2xl font-bold mb-4">هل لديك أسئلة حول سياسة الخصوصية؟</h3>
            <p className="text-primary-100 mb-6">
              نحن هنا لمساعدتك في فهم كيفية حماية بياناتك
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

export default PrivacyPolicy;
