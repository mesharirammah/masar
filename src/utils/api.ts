// API Service for contact form
const WEBHOOK_URL = 'https://cloud.activepieces.com/api/v1/webhooks/cuOWhBfzs3X5tOVWPvtCX';

export const submitContactForm = async (formData: any) => {
  console.log('🚀 Attempting to submit form data:', formData);
  
  try {
    console.log('📡 Sending request to webhook:', WEBHOOK_URL);
    
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Cache-Control': 'no-cache'
      },
      body: JSON.stringify(formData)
    });

    console.log('📥 Response received:', {
      status: response.status,
      statusText: response.statusText,
      headers: Object.fromEntries(response.headers.entries())
    });

    if (!response.ok) {
      // محاولة قراءة رسالة الخطأ من الاستجابة
      let errorMessage;
      try {
        const errorData = await response.json();
        errorMessage = errorData.message || errorData.error || response.statusText;
      } catch (e) {
        errorMessage = `HTTP error! status: ${response.status}`;
      }
      
      throw new Error(`Webhook error: ${errorMessage}`);
    }

    const responseData = await response.json();
    console.log('✅ Success! Response data:', responseData);
    
    return responseData;
  } catch (error: any) {
    console.error('❌ Error submitting form:', {
      message: error.message,
      stack: error.stack,
      cause: error.cause
    });
    
    // إعادة رمي الخطأ مع رسالة أكثر وضوحاً
    throw new Error(`فشل في إرسال النموذج: ${error.message}`);
  }
};
