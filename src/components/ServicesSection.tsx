import React from 'react';
import { Bot, Brain, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Bot,
      title: 'الأتمتة الذكية',
      description: 'نطور حلول أتمتة متقدمة لتبسيط العمليات وزيادة الكفاءة',
      features: ['روبوتات المحادثة', 'أتمتة المهام', 'سير العمل الذكي'],
      link: '/services#smart-automation'
    },
    {
      icon: Brain,
      title: 'الذكاء الاصطناعي',
      description: 'نطبّق أحدث تقنيات الذكاء الاصطناعي لخدمة أعمالك بشكل مبتكر.',
      features: ['صناعة المحتوى', 'التسويق الذكي', 'إنجاز المهام المعقّدة'],
      link: '/services#ai-solutions'
    },
    {
      icon: Palette,
      title: 'التصميم وتجربة المستخدم',
      description: 'نصمم لك رحلة رقمية مترابطة تجمع بين التقنية، البيانات، والكفاءة.',
      features: ['ربط الأدوات والأنظمة', 'تصميم واجهات ذكية', 'لوحات تحكم تفاعلية'],
      link: '/services#uiux-design'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-6">
            خدماتنا المتقدمة
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            نقدم مجموعة شاملة من الخدمات التقنية المتقدمة لمساعدة شركتك على النمو والابتكار
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="card group hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-secondary-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-secondary-800 mb-4">
                {service.title}
              </h3>
              
              <p className="text-secondary-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-secondary-600">
                    <div className="w-2 h-2 bg-primary-600 rounded-full ml-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link 
                to={service.link}
                className="mt-6 text-primary-600 font-medium hover:text-primary-700 transition-colors duration-300 group-hover:translate-x-2 transform inline-block"
              >
                تعرف على المزيد →
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link to="/services" className="btn-primary text-lg px-8 py-4">
            عرض جميع الخدمات
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
