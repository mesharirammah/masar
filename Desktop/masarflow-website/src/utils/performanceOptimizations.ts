// تحسينات الأداء للموقع

// تحميل الصور بشكل مؤجل (Lazy Loading)
export const lazyLoadImages = () => {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
};

// تحسين الخطوط
export const optimizeFonts = () => {
  // إضافة font-display: swap للخطوط
  const style = document.createElement('style');
  style.textContent = `
    @font-face {
      font-family: 'Cairo';
      font-display: swap;
    }
    @font-face {
      font-family: 'Tajawal';
      font-display: swap;
    }
  `;
  document.head.appendChild(style);
};

// تحسين التمرير
export const optimizeScrolling = () => {
  // إضافة smooth scrolling
  document.documentElement.style.scrollBehavior = 'smooth';
  
  // تحسين الأداء عند التمرير
  let ticking = false;
  const updateScrollPosition = () => {
    // تحديث موقع التمرير
    ticking = false;
  };
  
  const onScroll = () => {
    if (!ticking) {
      requestAnimationFrame(updateScrollPosition);
      ticking = true;
    }
  };
  
  window.addEventListener('scroll', onScroll, { passive: true });
};

// ضغط وتحسين الصور
export const optimizeImages = () => {
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    // إضافة loading="lazy" للصور
    img.setAttribute('loading', 'lazy');
    
    // إضافة decoding="async" للصور
    img.setAttribute('decoding', 'async');
  });
};

// تحسين الأداء العام
export const initPerformanceOptimizations = () => {
  // تشغيل التحسينات عند تحميل الصفحة
  window.addEventListener('load', () => {
    lazyLoadImages();
    optimizeFonts();
    optimizeScrolling();
    optimizeImages();
  });
  
  // تحسين الأداء عند تغيير حجم الشاشة
  window.addEventListener('resize', () => {
    // إعادة حساب الأحجام بشكل مؤجل
    setTimeout(() => {
      optimizeImages();
    }, 100);
  }, { passive: true });
};

