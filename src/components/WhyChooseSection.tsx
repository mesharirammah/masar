import React from 'react';
import { Target, Zap, CheckCircle, XCircle, Clock, MessageCircle, Workflow, FileText, Users, BarChart3, UserPlus, TrendingUp } from 'lucide-react';

const WhyChooseSection: React.FC = () => {
  const comparisons = [
    {
      problem: 'المهام اليدوية تستهلك وقت الموظفين',
      solution: 'أتمتة المهام اليومية وتوفير وقت الفريق',
      problemIcon: Clock,
      solutionIcon: Zap
    },
    {
      problem: 'الرسائل تضيع والعملاء يتسربون',
      solution: 'روبوتات محادثة ذكية ترد مباشر وتتابع العملاء',
      problemIcon: MessageCircle,
      solutionIcon: MessageCircle
    },
    {
      problem: 'عمليات مشتتة ومكررة بين الفريق',
      solution: 'سير عمل ذكي ومتكامل يربط بين جميع الأدوات',
      problemIcon: Workflow,
      solutionIcon: Workflow
    },
    {
      problem: 'صعوبة في توليد محتوى تسويقي فعال',
      solution: 'إنشاء محتوى جذاب باستخدام أدوات الذكاء الاصطناعي',
      problemIcon: FileText,
      solutionIcon: FileText
    },
    {
      problem: 'مشاكل في متابعة العملاء المحتملين',
      solution: 'نظام متابعة أوتوماتيكي يرسل عروض وتنبيهات',
      problemIcon: Users,
      solutionIcon: Users
    },
    {
      problem: 'نقص في تحليل البيانات الدقيقة',
      solution: 'تقارير لحظية تساعد في اتخاذ القرارات أسرع',
      problemIcon: BarChart3,
      solutionIcon: BarChart3
    },
    {
      problem: 'حاجتك لتوظيف موظفين جدد',
      solution: 'أتمتة تغنيك عن التوسع غير الضروري للفريق',
      problemIcon: UserPlus,
      solutionIcon: UserPlus
    },
    {
      problem: 'إعلانات غير فعالة وتكاليف عالية',
      solution: 'نظام ذكي يستهدف العملاء المحتملين تلقائياً ويقلل التكاليف',
      problemIcon: TrendingUp,
      solutionIcon: TrendingUp
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto">
        {/* العنوان الرئيسي والنص التعريفي */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-800 mb-8">
            لماذا تختار مسار فلو ؟
          </h2>
          <p className="text-xl text-secondary-600 max-w-4xl mx-auto leading-relaxed">
            نحن لا نقدّم خدمات فقط، بل نبني لك مسارًا رقميًا ذكيًا يدفع عملك للنمو والتطوّر.
          </p>
        </div>

        {/* الجزء الأول: عرض الميزات بتصميم جديد */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* الميزة الأولى */}
          <div className="flex items-start space-x-6 space-x-reverse">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-secondary-800 mb-4">
                حلول مخصصة لعملك
              </h3>
              <p className="text-lg text-secondary-600 leading-relaxed">
                نحلّل احتياجاتك ونصمّم حلولًا مرنة تتناسب مع طبيعة عملك وأهدافك.
              </p>
            </div>
          </div>

          {/* الميزة الثانية */}
          <div className="flex items-start space-x-6 space-x-reverse">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-700 to-secondary-800 rounded-2xl flex items-center justify-center shadow-lg">
                <Zap className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-secondary-800 mb-4">
                أتمتة وذكاء... باحتراف
              </h3>
              <p className="text-lg text-secondary-600 leading-relaxed">
                نمزج بين الأتمتة المتقدمة والذكاء الاصطناعي لنمنحك كفاءة أعلى وتوفير في الوقت والموارد.
              </p>
            </div>
          </div>
        </div>

        {/* الجزء الثاني: قسم المقارنة الجديد "المشكلة مقابل الحل" */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-secondary-800 text-center mb-16">
            من المشاكل التقليدية إلى الحلول الذكية
          </h3>
          
          <div className="space-y-6">
            {comparisons.map((comparison, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* المشكلة */}
                  <div className="flex items-start space-x-4 space-x-reverse">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                        <comparison.problemIcon className="w-6 h-6 text-red-500" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-red-600 mb-2">المشكلة</h4>
                      <p className="text-secondary-700 leading-relaxed">{comparison.problem}</p>
                    </div>
                  </div>

                  {/* الحل */}
                  <div className="flex items-start space-x-4 space-x-reverse">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                        <comparison.solutionIcon className="w-6 h-6 text-green-500" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-green-600 mb-2">الحل مع مسار فلو</h4>
                      <p className="text-secondary-700 leading-relaxed">{comparison.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* زر الدعوة للعمل */}
        <div className="text-center mt-20">
          <button className="btn-primary text-lg px-12 py-5">
            ابدأ رحلتك الرقمية الآن
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
