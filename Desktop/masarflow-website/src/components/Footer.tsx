import React from 'react';
import { 
  Mail, 
  Phone, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  MapPin
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-secondary-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-400/20 to-transparent"></div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" style={{ alignItems: 'flex-start' }}>
          
                     {/* العمود الأول - العلامة التجارية */}
           <div className="flex flex-col items-start">
             {/* اسم الشركة */}
             <div className="mb-6">
               <h3 className="text-2xl font-bold text-white">
                 MasarFlow
               </h3>
             </div>
            
            {/* النص التعريفي */}
            <p className="text-sm text-gray-300 mb-6 leading-relaxed">
              مسار فلو (Masar Flow) هي شركة عربية تقدم خدمات الأتمتة الذكية، الذكاء الاصطناعي، تجربة المستخدم (UX/UI)، التسويق الآلي، وتصميم الأنظمة التقنية. نعمل على تحويل التحديات الرقمية إلى فرص نجاح حقيقية.
            </p>
            
                         {/* أيقونات التواصل الاجتماعي */}
                           <div className="flex space-x-4 space-x-reverse">
                <a 
                  href="https://www.youtube.com/channel/UC4Vz79S6jNzA_gZ4nMIcDBw" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20 hover:bg-primary-600 hover:scale-110 hover:border-primary-500 transition-all duration-300 shadow-lg hover:shadow-xl">
                    <Youtube className="w-4 h-4 text-white group-hover:text-primary-200 transition-colors duration-300" />
                  </div>
                </a>
                <a 
                  href="https://www.instagram.com/masarflow/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group"
                  title="MasarFlow - انستغرام"
                >
                  <div className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20 hover:bg-primary-600 hover:scale-110 hover:border-primary-500 transition-all duration-300 shadow-lg hover:shadow-xl">
                    <Instagram className="w-4 h-4 text-white group-hover:text-primary-200 transition-colors duration-300" />
                  </div>
                </a>

                <a 
                  href="https://x.com/masarflow" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20 hover:bg-primary-600 hover:scale-110 hover:border-primary-500 transition-all duration-300 shadow-lg hover:shadow-xl">
                    <Twitter className="w-4 h-4 text-white group-hover:text-white transition-colors duration-300" />
                  </div>
                </a>
                <a 
                  href="https://www.facebook.com/share/17DYPvKMej/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20 hover:bg-primary-600 hover:scale-110 hover:border-primary-500 transition-all duration-300 shadow-lg hover:shadow-xl">
                    <Facebook className="w-4 h-4 text-white group-hover:text-primary-200 transition-colors duration-300" />
                  </div>
                </a>
              </div>
          </div>

          {/* العمود الثاني - روابط سريعة */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-white mb-6">
              روابط سريعة
            </h3>
            <ul className="space-y-3">
                             <li>
                 <Link to="/" className="text-gray-300 hover:text-primary-600 transition-all duration-300 text-sm font-medium hover:translate-x-2 transform inline-block">
                   الرئيسية
                 </Link>
               </li>
               <li>
                 <Link to="/services" className="text-gray-300 hover:text-primary-600 transition-all duration-300 text-sm font-medium hover:translate-x-2 transform inline-block">
                   خدماتنا
                 </Link>
               </li>
               <li>
                 <Link to="/portfolio" className="text-gray-300 hover:text-primary-600 transition-all duration-300 text-sm font-medium hover:translate-x-2 transform inline-block">
                   أعمالنا
                 </Link>
               </li>
               <li>
                 <Link to="/about-us" className="text-gray-300 hover:text-primary-600 transition-all duration-300 text-sm font-medium hover:translate-x-2 transform inline-block">
                   من نحن
                 </Link>
               </li>
               <li>
                 <Link to="/contact-us" className="text-gray-300 hover:text-primary-600 transition-all duration-300 text-sm font-medium hover:translate-x-2 transform inline-block">
                   اتصل بنا
                 </Link>
               </li>
            </ul>
          </div>

          {/* العمود الثالث - خدماتنا */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-white mb-6">
              خدماتنا
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-primary-600 transition-all duration-300 text-sm font-medium hover:translate-x-2 transform inline-block">
                  الأتمتة الذكية
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary-600 transition-all duration-300 text-sm font-medium hover:translate-x-2 transform inline-block">
                  الذكاء الاصطناعي
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary-600 transition-all duration-300 text-sm font-medium hover:translate-x-2 transform inline-block">
                  المسار الرقمي المتكامل
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary-600 transition-all duration-300 text-sm font-medium hover:translate-x-2 transform inline-block">
                  حلول مخصصة
                </a>
              </li>
            </ul>
          </div>

          {/* العمود الرابع - اتصل بنا */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-white mb-6">
              اتصل بنا
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 space-x-reverse group">
                <div className="w-8 h-8 bg-primary-600/80 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-lg group-hover:bg-primary-500 group-hover:scale-110 transition-all duration-300">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-200 text-sm font-medium group-hover:text-primary-200 transition-colors duration-300">
                  +966 50 123 4567
                </span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse group">
                <div className="w-8 h-8 bg-primary-600/80 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-lg group-hover:bg-primary-500 group-hover:scale-110 transition-all duration-300">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-200 text-sm font-medium group-hover:text-primary-200 transition-colors duration-300">
                  info@masarflow.com
                </span>
              </div>
              
            </div>
          </div>
        </div>
      </div>

             {/* شريط حقوق النشر */}
       <div className="border-t border-white/10 bg-black/30 backdrop-blur-sm">
         <div className="container mx-auto px-6 py-6">
           <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
             <p className="text-gray-300 text-sm">
               جميع الحقوق محفوظة © 2025 <span className="text-gray-300 font-bold">MasarFlow</span>
             </p>
             <div className="flex items-center space-x-6 space-x-reverse">
               <Link 
                 to="/privacy-policy" 
                 className="text-gray-300 hover:text-primary-600 transition-colors duration-300 text-sm"
               >
                 سياسة الخصوصية
               </Link>
               <Link 
                 to="/terms" 
                 className="text-gray-300 hover:text-primary-600 transition-colors duration-300 text-sm"
               >
                 شروط الاستخدام
               </Link>
             </div>
           </div>
         </div>
       </div>
    </footer>
  );
};

export default Footer;