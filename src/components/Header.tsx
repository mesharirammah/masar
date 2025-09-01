import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Briefcase, Code, Users, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

// WhatsApp SVG Icon Component
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"
      fill="#25D366"
    />
  </svg>
);

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'الرئيسية', href: '/', icon: Home },
    { name: 'خدماتنا', href: '/services', icon: Briefcase },
    { name: 'أعمالنا', href: '/our-work', icon: Code },
    { name: 'من نحن', href: '/about-us', icon: Users },
    { name: 'اتصل بنا', href: '/contact-us', icon: Phone },
  ];

  const handleWhatsAppClick = () => {
    const phoneNumber = '+966501234567'; // استبدل برقمك الصحيح
    const message = 'مرحباً، أود الاستفسار عن خدماتكم';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // منع التمرير عند فتح القائمة
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // إغلاق القائمة عند الضغط على ESC
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="mx-auto px-4 w-full max-w-5xl">
          <div className="flex items-center justify-between h-12 md:h-14">
            {/* Logo - في اليسار مع زيادة الحجم 40% - متجاوب للهواتف */}
            <div className="flex items-center">
              <div className="header-logo-container">
                <img
                  src="/images/masarflowloogo.png"
                  alt="MasarFlow Logo"
                  loading="eager"
                />
              </div>
            </div>

            {/* القائمة - في الوسط */}
            <nav className="hidden lg:flex items-center space-x-8 space-x-reverse">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-secondary-700 hover:text-primary-600 font-medium transition-colors duration-300 relative group text-base"
                >
                  {item.name}
                  <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            {/* معلومات الاتصال عبر واتساب - في اليمين */}
            <div className="hidden lg:flex items-center">
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center space-x-2 space-x-reverse transition-all duration-300 hover:opacity-80 hover:scale-105"
              >
                <WhatsAppIcon className="w-6 h-6 text-green-500" />
                <span className="font-semibold text-gray-900 text-base">+966 50 123 4567</span>
              </button>
            </div>

                      {/* زر القائمة للموبايل - همبرغر */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 hamburger-button"
            onClick={() => setIsMenuOpen(true)}
            aria-label="فتح قائمة التنقل"
          >
            <Menu className="w-6 h-6 text-secondary-800" />
          </button>
          </div>
        </div>
      </header>

      {/* قائمة الموبايل الجديدة */}
      <div className={`lg:hidden fixed inset-0 z-50 ${isMenuOpen ? 'visible' : 'invisible'}`}>
        {/* خلفية شفافة */}
        <div 
          className={`absolute inset-0 bg-black/30 backdrop-blur-[2px] transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={closeMenu}
        />
        
        {/* القائمة من الأسفل */}
        <div 
          className={`absolute bottom-0 left-0 right-0 bg-white rounded-t-[20px] transform transition-transform duration-300 ease-out-expo shadow-lg ${isMenuOpen ? 'translate-y-0' : 'translate-y-full'}`}
          style={{ maxHeight: '90vh' }}
        >
          {/* مقبض السحب */}
          <div className="flex justify-center pt-3">
            <div className="w-12 h-1 bg-gray-200 rounded-full"></div>
          </div>

          {/* روابط التنقل */}
          <div className="px-4 pt-4 pb-safe">
            <nav className="space-y-1.5">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="flex items-center px-4 py-3.5 text-[15px] font-medium text-gray-700 hover:text-primary-600 bg-gray-50/80 hover:bg-primary-50/80 rounded-xl transition-all duration-200"
                    onClick={closeMenu}
                  >
                    <Icon className="w-[18px] h-[18px] ml-3 text-gray-400" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* زر واتساب */}
          <div className="p-4 mt-2 border-t border-gray-100/80">
            <button
              onClick={() => {
                handleWhatsAppClick();
                closeMenu();
              }}
              className="w-full flex items-center justify-center gap-2 bg-primary-600 text-white font-medium py-3.5 px-4 rounded-xl active:scale-[0.98] transition-all duration-200"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>تواصل معنا عبر واتساب</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
