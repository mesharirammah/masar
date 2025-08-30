import React, { useEffect, useState } from 'react';
import SEOHead from './SEOHead';
import { Send } from 'lucide-react';
import { WebhookService, ContactFormData } from '../utils/webhookService';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submission started');
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage('');

    // Validation
    if (!formData.fullName || !formData.email || !formData.service || !formData.message) {
      setSubmitStatus('error');
      setSubmitMessage('يرجى ملء جميع الحقول المطلوبة (*)');
      setIsSubmitting(false);
      return;
    }

    const webhookData: ContactFormData = {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      service: formData.service,
      message: formData.message,
      timestamp: new Date().toISOString(),
      source: 'contact-form'
    };

    console.log('📤 إرسال البيانات إلى الويب هوك:', webhookData);

    try {
      // استخدام الخدمة الجديدة لإرسال البيانات
      const result = await WebhookService.sendContactForm(webhookData);
      
      if (result.success) {
        // نجح الإرسال
        console.log('✅ تم إرسال النموذج بنجاح إلى Activepieces');
        setSubmitStatus('success');
        setSubmitMessage(`شكرًا لك ${formData.fullName}! تم إرسال رسالتك بنجاح إلى نظام MasarFlow وسنتواصل معك قريباً على ${formData.email}`);
        
        // مسح بيانات النموذج
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: ''
        });

        // إخفاء رسالة النجاح بعد 7 ثوانِ
        setTimeout(() => {
          setSubmitStatus('idle');
          setSubmitMessage('');
        }, 7000);
      } else {
        // فشل الإرسال لكن تم حفظ البيانات محلياً
        console.warn('⚠️ فشل إرسال النموذج لكن تم حفظ البيانات');
        setSubmitStatus('error');
        setSubmitMessage('حدث خطأ في الإرسال، لكن تم حفظ بياناتك. سنتواصل معك قريباً.');
        
        // إخفاء رسالة الخطأ بعد 8 ثوانِ
        setTimeout(() => {
          setSubmitStatus('idle');
          setSubmitMessage('');
        }, 8000);
      }
    } catch (error) {
      console.error('❌ خطأ في إرسال النموذج:', error);
      setSubmitStatus('error');
      setSubmitMessage('حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى أو التواصل معنا مباشرة.');
      
      // إخفاء رسالة الخطأ بعد 8 ثوانِ
      setTimeout(() => {
        setSubmitStatus('idle');
        setSubmitMessage('');
      }, 8000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <SEOHead 
        title="اتصل بنا"
        description="تواصل مع فريق مسار فلو للحصول على استشارة مجانية حول حلول الأتمتة والذكاء الاصطناعي. نحن هنا لمساعدتك في تحقيق التحول الرقمي لأعمالك."
        keywords="تواصل MasarFlow، استشارة مجانية، خدمة العملاء، دعم تقني، اتصل بنا، مسار فلو"
      />
      <div className="container mx-auto px-6 pt-32 pb-16">
        {/* Page Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            تواصل معنا
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          املأ النموذج أدناه أو تواصل مباشرة عبر البريد أو الهاتف، وسنكون بخدمتك.          </p>
        </div>

        {/* Contact Form - Full Width */}
        <div className="mb-20">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">أرسل لنا رسالة</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: Full Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                    الاسم الكامل *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all text-sm"
                    placeholder="أدخل اسمك الكامل"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    البريد الإلكتروني *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all text-sm"
                    placeholder="أدخل بريدك الإلكتروني"
                  />
                </div>
              </div>

              {/* Row 2: Phone and Company */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    رقم الهاتف
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all text-sm"
                    placeholder="أدخل رقم هاتفك (اختياري)"
                  />
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    اسم الشركة
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all text-sm"
                    placeholder="أدخل اسم شركتك (اختياري)"
                  />
                </div>
              </div>

              {/* Service Required - Full Width */}
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  الخدمة المطلوبة *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-white text-sm"
                >
                  <option value="">اختر الخدمة المطلوبة</option>
                  <option value="smart-automation">الأتمتة الذكية</option>
                  <option value="ai-solutions">حلول الذكاء الاصطناعي</option>
                  <option value="uiux-design">التصميم وتجربة المستخدم</option>
                  <option value="general-consultation">استشارة عامة</option>
                </select>
              </div>

              {/* Message - Full Width */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  رسالتك *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none text-sm"
                  placeholder="اكتب رسالتك هنا..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-4 px-8 rounded-lg font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-300 flex items-center justify-center space-x-2 space-x-reverse disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 text-base"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>جاري الإرسال...</span>
                  </>
                ) : (
                  <>
                    <span>إرسال الرسالة</span>
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>

            {/* Success/Error Message - رسالة النجاح/الخطأ */}
            {submitStatus !== 'idle' && (
              <div className={`mt-6 p-8 rounded-2xl text-center shadow-2xl transform transition-all duration-700 ease-in-out animate-bounce ${
                submitStatus === 'success' 
                  ? 'bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white border-2 border-green-300' 
                  : 'bg-gradient-to-r from-red-400 via-red-500 to-red-600 text-white border-2 border-red-300'
              }`}>
                <div className="flex flex-col items-center justify-center space-y-4">
                  {submitStatus === 'success' ? (
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg animate-pulse">
                      <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  ) : (
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                  <div className="space-y-2">
                    <h3 className="font-bold text-2xl">
                      {submitStatus === 'success' ? '🎉 تم بنجاح!' : '❌ حدث خطأ'}
                    </h3>
                    <p className="font-semibold text-lg leading-relaxed">{submitMessage}</p>
                    {submitStatus === 'success' && (
                      <p className="text-sm opacity-90 mt-3">
                        ✨ تم إرسال بياناتك إلى فريق MasarFlow بنجاح
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-12">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">الأسئلة الشائعة</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base px-4">
              إجابات على أكثر الأسئلة شيوعاً حول خدماتنا وعملية التعاون معنا
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-4 md:space-y-6">
            {/* FAQ Item 1 */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-xl md:rounded-2xl p-4 md:p-8 hover:shadow-lg transition-all duration-300 hover:scale-[1.01] md:hover:scale-[1.02]">
              <div className="flex flex-col md:flex-row md:items-start space-y-3 md:space-y-0 md:space-x-4 md:space-x-reverse">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-lg md:text-xl font-bold shadow-lg mx-auto md:mx-0">
                  ❓
                </div>
                <div className="flex-1 text-center md:text-right">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-4 leading-tight">
                    ما هي الخدمات التي تقدمها MasarFlow؟
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-lg">
                    نحن نوفر حلولاً احترافية تشمل تصميم واجهات المستخدم وتجربة المستخدم (UI/UX)، أتمتة الأعمال باستخدام n8n، تطوير حلول ذكاء اصطناعي، إنشاء أنظمة تسويق مؤتمتة، وتصميم حلول رقمية مخصصة.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100 rounded-xl md:rounded-2xl p-4 md:p-8 hover:shadow-lg transition-all duration-300 hover:scale-[1.01] md:hover:scale-[1.02]">
              <div className="flex flex-col md:flex-row md:items-start space-y-3 md:space-y-0 md:space-x-4 md:space-x-reverse">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-lg md:text-xl font-bold shadow-lg mx-auto md:mx-0">
                  ❓
                </div>
                <div className="flex-1 text-center md:text-right">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-4 leading-tight">
                    كيف يمكنني البدء في مشروع معكم؟
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-lg">
                    بكل بساطة! املأ نموذج التواصل في هذه الصفحة، أو تواصل معنا عبر البريد أو الهاتف، وسنرتب معك اجتماع مبدئي لفهم احتياجاتك واقتراح أنسب الحلول لك.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100 rounded-xl md:rounded-2xl p-4 md:p-8 hover:shadow-lg transition-all duration-300 hover:scale-[1.01] md:hover:scale-[1.02]">
              <div className="flex flex-col md:flex-row md:items-start space-y-3 md:space-y-0 md:space-x-4 md:space-x-reverse">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white text-lg md:text-xl font-bold shadow-lg mx-auto md:mx-0">
                  ❓
                </div>
                <div className="flex-1 text-center md:text-right">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-4 leading-tight">
                    هل تقدمون استشارات مجانية؟
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-lg">
                    نعم، أول جلسة استشارية مجانية بالكامل لنعرف أكثر عن مشروعك ونرسم لك مسار العمل الأمثل.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-100 rounded-xl md:rounded-2xl p-4 md:p-8 hover:shadow-lg transition-all duration-300 hover:scale-[1.01] md:hover:scale-[1.02]">
              <div className="flex flex-col md:flex-row md:items-start space-y-3 md:space-y-0 md:space-x-4 md:space-x-reverse">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white text-lg md:text-xl font-bold shadow-lg mx-auto md:mx-0">
                  ❓
                </div>
                <div className="flex-1 text-center md:text-right">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-4 leading-tight">
                    هل يمكن تخصيص الحلول حسب احتياجي؟
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-lg">
                    طبعًا! جميع حلولنا مصممة خصيصًا لتلائم احتياج كل عميل، سواء كنت شركة ناشئة أو مؤسسة كبيرة.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Item 5 */}
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-100 rounded-xl md:rounded-2xl p-4 md:p-8 hover:shadow-lg transition-all duration-300 hover:scale-[1.01] md:hover:scale-[1.02]">
              <div className="flex flex-col md:flex-row md:items-start space-y-3 md:space-y-0 md:space-x-4 md:space-x-reverse">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center text-white text-lg md:text-xl font-bold shadow-lg mx-auto md:mx-0">
                  ❓
                </div>
                <div className="flex-1 text-center md:text-right">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-4 leading-tight">
                    كم تستغرق مدة تنفيذ المشاريع؟
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-lg">
                    مدة التنفيذ تختلف حسب نوع المشروع وتعقيده، لكننا دائمًا نضع جدولًا زمنيًا واضحًا لك من البداية.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Item 6 */}
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-100 rounded-xl md:rounded-2xl p-4 md:p-8 hover:shadow-lg transition-all duration-300 hover:scale-[1.01] md:hover:scale-[1.02]">
              <div className="flex flex-col md:flex-row md:items-start space-y-3 md:space-y-0 md:space-x-4 md:space-x-reverse">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full flex items-center justify-center text-white text-lg md:text-xl font-bold shadow-lg mx-auto md:mx-0">
                  ❓
                </div>
                <div className="flex-1 text-center md:text-right">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-4 leading-tight">
                    كيف يمكنني متابعة تقدم المشروع؟
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-lg">
                    نوفر لك لوحة متابعة (Dashboard) خاصة بك، وتحديثات أسبوعية لضمان الشفافية وسير العمل بسلاسة.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Item 7 */}
            <div className="bg-gradient-to-r from-rose-50 to-pink-50 border border-rose-100 rounded-xl md:rounded-2xl p-4 md:p-8 hover:shadow-lg transition-all duration-300 hover:scale-[1.01] md:hover:scale-[1.02]">
              <div className="flex flex-col md:flex-row md:items-start space-y-3 md:space-y-0 md:space-x-4 md:space-x-reverse">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full flex items-center justify-center text-white text-lg md:text-xl font-bold shadow-lg mx-auto md:mx-0">
                  ❓
                </div>
                <div className="flex-1 text-center md:text-right">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-4 leading-tight">
                    هل يمكنني تجربة بعض من خدماتكم قبل الشراء؟
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-lg">
                    بعض خدماتنا تشمل نماذج تجريبية أو نسخ عرض (Demo). تواصل معنا لمعرفة التفاصيل حسب نوع الخدمة التي تهمك.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
