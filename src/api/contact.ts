import axios from 'axios';

interface ContactFormData {
  fullName: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  message: string;
}

export async function submitContactForm(data: ContactFormData) {
  try {
    // استخدام FormData بدلاً من JSON
    const formData = new FormData();
    
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value || '');
    });
    
    // إضافة timestamp
    formData.append('timestamp', new Date().toISOString());
    
    const response = await axios.post(
      'https://script.google.com/macros/s/AKfycbzZ7H1CWSrh4G-7HSX4awoBhl26dBEseDzNOXiCXDYW-bwUcAXBxrJXsBCC8svmNvb48w/exec',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        // تجنب مشكلة CORS
        withCredentials: false
      }
    );
    
    return response.data;
  } catch (error) {
    console.error('Error submitting form:', error);
    
    // محاولة استخدام طريقة بديلة
    try {
      return await submitUsingAlternativeMethod(data);
    } catch (altError) {
      console.error('Alternative method also failed:', altError);
      throw error;
    }
  }
}

// طريقة بديلة باستخدام iframe
async function submitUsingAlternativeMethod(data: ContactFormData) {
  return new Promise((resolve, reject) => {
    try {
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.name = 'hidden-iframe';
      
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = 'https://script.google.com/macros/s/AKfycbzYZviLk_JfqyCIeRTg10vkCWGCeqSALknjby0JtvxcLwNL7XdyIjESaID600nUEapoMw/exec';
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
      
      document.body.appendChild(iframe);
      document.body.appendChild(form);
      
      form.submit();
      
      setTimeout(() => {
        document.body.removeChild(iframe);
        document.body.removeChild(form);
        resolve({ status: 'success', message: 'تم إرسال البيانات بنجاح' });
      }, 2000);
      
    } catch (error) {
      reject(error);
    }
  });
}
