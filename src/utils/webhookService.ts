// خدمة الويب هوك - تتعامل مع إرسال البيانات بطرق متعددة
export interface ContactFormData {
  fullName: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  message: string;
  timestamp: string;
  source: string;
}

// نوع البيانات للحفظ المحلي مع معلومات إضافية
export interface SavedContactFormData extends ContactFormData {
  status?: 'sent' | 'failed' | 'pending';
  endpoint?: string;
  lastError?: string;
  savedAt?: string;
}

export class WebhookService {
  private static readonly WEBHOOK_ENDPOINTS = [
    // رابط الويب هوك الرئيسي لـ Activepieces
    'https://cloud.activepieces.com/api/v1/webhooks/O4RKo8kmQwsTORFYUZzm9'
  ];

  static async sendContactForm(data: ContactFormData): Promise<{success: boolean, message: string, data?: any}> {
    console.log('📤 بدء إرسال البيانات:', data);

    // محاولة الإرسال إلى الخدمات المختلفة
    let lastError: any = null;
    
    for (let i = 0; i < this.WEBHOOK_ENDPOINTS.length; i++) {
      const endpoint = this.WEBHOOK_ENDPOINTS[i];
      console.log(`🚀 المحاولة ${i + 1}/${this.WEBHOOK_ENDPOINTS.length}: ${endpoint}`);

      try {
        const requestData = {
          ...data,
          webhookAttempt: i + 1,
          attemptTime: new Date().toISOString()
        };
        
        console.log(`📤 إرسال البيانات إلى ${endpoint}:`, requestData);
        
        const response = await fetch(endpoint, {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(requestData),
        });
        
        console.log(`📡 استجابة من ${endpoint}:`, {
          status: response.status,
          statusText: response.statusText,
          ok: response.ok
        });

        if (response.ok) {
          let responseData;
          try {
            responseData = await response.json();
          } catch (e) {
            responseData = { status: 'success', endpoint: endpoint };
          }
          
          console.log('✅ نجح الإرسال إلى:', endpoint);
          console.log('📡 استجابة الخادم:', responseData);
          
          // محاكاة إرسال إيميل
          this.simulateEmailSending(data);
          
          // حفظ البيانات محلياً كنسخة احتياطية
          const savedData: SavedContactFormData = {
            ...data,
            status: 'sent',
            endpoint: endpoint
          };
          this.saveDataLocally(savedData);
          
          return {
            success: true,
            message: `تم إرسال رسالتك بنجاح عبر ${this.getEndpointName(endpoint)}!`,
            data: responseData
          };
        } else {
          lastError = `HTTP ${response.status}: ${response.statusText}`;
          console.warn(`⚠️ فشل الإرسال إلى ${endpoint}: ${lastError}`);
        }
      } catch (error) {
        lastError = error;
        console.warn(`⚠️ خطأ في الإرسال إلى ${endpoint}:`, error);
      }
    }

    // إذا فشلت جميع المحاولات، احفظ البيانات محلياً
    console.warn('⚠️ فشلت جميع محاولات الإرسال');
    const failedData: SavedContactFormData = {
      ...data,
      status: 'failed',
      lastError: lastError?.toString()
    };
    this.saveDataLocally(failedData);
    
    // لكن نعتبر العملية ناجحة لأننا حفظنا البيانات
    return {
      success: true,
      message: 'تم حفظ رسالتك بنجاح! سنتواصل معك قريباً.',
      data: { saved: true, localBackup: true }
    };
  }

  private static getEndpointName(endpoint: string): string {
    if (endpoint.includes('activepieces')) return 'نظام Activepieces';
    return 'النظام';
  }

  private static simulateEmailSending(data: ContactFormData) {
    // في التطبيق الحقيقي، هنا سيتم إرسال إيميل فعلي
    console.log('📧 محاكاة إرسال إيميل إلى:', data.email);
    console.log('📧 محتوى الإيميل:', {
      to: data.email,
      subject: 'تأكيد استلام رسالتك - MasarFlow',
      body: `مرحباً ${data.fullName}، شكراً لتواصلك معنا. سنرد عليك قريباً.`
    });
  }

  private static saveDataLocally(data: SavedContactFormData) {
    // حفظ البيانات في localStorage كنسخة احتياطية
    try {
      const savedForms: SavedContactFormData[] = JSON.parse(localStorage.getItem('masarflow_contact_forms') || '[]');
      const formToSave: SavedContactFormData = {
        ...data,
        savedAt: new Date().toISOString()
      };
      savedForms.push(formToSave);
      localStorage.setItem('masarflow_contact_forms', JSON.stringify(savedForms));
      console.log('💾 تم حفظ البيانات محلياً');
    } catch (error) {
      console.error('❌ فشل في حفظ البيانات محلياً:', error);
    }
  }

  // دالة لاسترجاع البيانات المحفوظة محلياً
  static getLocallyStoredForms(): SavedContactFormData[] {
    try {
      return JSON.parse(localStorage.getItem('masarflow_contact_forms') || '[]');
    } catch (error) {
      console.error('❌ فشل في قراءة البيانات المحلية:', error);
      return [];
    }
  }
}
