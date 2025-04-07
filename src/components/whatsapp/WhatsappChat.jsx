// components/WhatsAppWidget.js
'use client'; // if using app directory

import { useEffect } from 'react';

const WhatsAppWidget = () => {
  useEffect(() => {
    // Load the external script
    const script = document.createElement('script');
    script.src = 'https://d2mpatx37cqexb.cloudfront.net/delightchat-whatsapp-widget/embeds/embed.min.js';
    script.async = true;

    script.onload = () => {
      const wa_btnSetting = {
        btnColor: "#16BE45",
        ctaText: "WhatsApp Us",
        cornerRadius: 40,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
        btnPosition: "left",
        whatsAppNumber: "9354382988",
        welcomeMessage: "Hello",
        zIndex: 999999,
        btnColorScheme: "light",
      };

      if (typeof window._waEmbed === 'function') {
        window._waEmbed(wa_btnSetting);
      }
    };

    document.body.appendChild(script);

    // Cleanup
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // No visual component
};

export default WhatsAppWidget;
