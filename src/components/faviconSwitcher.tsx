// components/FaviconSwitcher.tsx
'use client';

import { useEffect } from 'react';

const FaviconSwitcher = () => {
  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const favicon = document.querySelector("link[rel='icon']") as HTMLLinkElement;

    if (favicon) {
      favicon.href = isDark ? '/favicon-dark.ico' : '/favicon-light.ico';
    }

    // Optional: update on theme change (live)
    const listener = (e: MediaQueryListEvent) => {
      favicon.href = e.matches ? '/favicon-dark.ico' : '/favicon-light.ico';
    };

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', listener);

    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', listener);
    };
  }, []);

  return null;
};

export default FaviconSwitcher;
