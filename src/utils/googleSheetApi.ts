// نوع البيانات للنموذج
export interface ContactFormData {
  fullName: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  message: string;
}

// استبدل الرابط بالرابط الخاص بك من Google Apps Script
const GOOGLE_SHEET_API = 'https://script.google.com/macros/s/AKfycbzZ7H1CWSrh4G-7HSX4awoBhl26dBEseDzNOXiCXDYW-bwUcAXBxrJXsBCC8svmNvb48w/exec';

export async function submitToGoogleSheet(data: ContactFormData): Promise<{ success: boolean; message: string }> {
  try {
    // استخدام طريقة FormData لحل مشكلة CORS
    const formData = new FormData();
    
    // إضافة البيانات كحقول
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value || '');
    });
    
    // إضافة timestamp
    formData.append('timestamp', new Date().toISOString());
    
    const response = await fetch(GOOGLE_SHEET_API, {
      method: 'POST',
      body: formData,
      mode: 'no-cors', // تجنب مشكلة CORS
    });

    // مع no-cors، لا يمكننا قراءة response
    // لذلك نفترض النجاح إذا وصلنا إلى هنا
    return {
      success: true,
      message: 'تم إرسال البيانات بنجاح'
    };
    
  } catch (error) {
    console.error('خطأ في إرسال البيانات:', error);
    
    // محاولة استخدام طريقة بديلة
    try {
      return await submitUsingAlternativeMethod(data);
    } catch (altError) {
      console.error('فشلت الطريقة البديلة:', altError);
      return {
        success: false,
        message: 'حدث خطأ في إرسال البيانات. الرجاء المحاولة مرة أخرى'
      };
    }
  }
}

// طريقة بديلة باستخدام iframe
async function submitUsingAlternativeMethod(data: ContactFormData): Promise<{ success: boolean; message: string }> {
  return new Promise((resolve) => {
    // إنشاء iframe مخفي
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.name = 'hidden-iframe';
    
    // إنشاء form
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = GOOGLE_SHEET_API;
    form.target = 'hidden-iframe';
    
    // إضافة البيانات
    Object.entries(data).forEach(([key, value]) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = value || '';
      form.appendChild(input);
    });
    
    // إضافة timestamp
    const timestampInput = document.createElement('input');
    timestampInput.type = 'hidden';
    timestampInput.name = 'timestamp';
    timestampInput.value = new Date().toISOString();
    form.appendChild(timestampInput);
    
    // إضافة form و iframe للصفحة
    document.body.appendChild(iframe);
    document.body.appendChild(form);
    
    // إرسال النموذج
    form.submit();
    
    // تنظيف بعد فترة
    setTimeout(() => {
      document.body.removeChild(iframe);
      document.body.removeChild(form);
      resolve({
        success: true,
        message: 'تم إرسال البيانات بنجاح'
      });
    }, 2000);
  });
}
