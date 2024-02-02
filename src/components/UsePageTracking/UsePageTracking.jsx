import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const UsePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if gtag is defined
    if (typeof window.gtag === 'function') {
      const currentPath = location.pathname + location.search;
      window.gtag('config', 'G-6Q0MQFW054', {
        page_path: currentPath,
      });
    }
  }, [location]);
};