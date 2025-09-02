import React from 'react';
import { Send } from 'lucide-react';
import type { FC, FormEvent, ChangeEvent } from 'react';
import { submitToGoogleSheet } from '../utils/googleSheetApi';

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

const ContactPage: FC = () => {
  const [formData, setFormData] = React.useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = React.useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
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

    try {
      // استخدام الدالة الجاهزة من googleSheetApi
      const result = await submitToGoogleSheet(formData);
      
      if (result.success) {
        setSubmitStatus('success');
        setSubmitMessage('شكرًا لك، تم استلام رسالتك بنجاح. سنتواصل معك قريباً.');
        
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
        throw new Error(result.message);
      }
    } catch (error) {
      console.error('خطأ في إرسال النموذج:', error);
      setSubmitStatus('error');
      setSubmitMessage('حدث خطأ في الإرسال. يرجى المحاولة مرة أخرى لاحقاً.');
      
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
      <div className="container mx-auto px-6 pt-32 pb-16">
        {/* Page Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            تواصل معنا
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            املأ النموذج أدناه أو تواصل مباشرة عبر البريد أو الهاتف، وسنكون بخدمتك.
          </p>
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

            {/* Success/Error Message */}
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
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
