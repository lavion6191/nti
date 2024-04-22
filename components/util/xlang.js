// util/xlang.js

import { useEffect } from 'react';
import { i18n } from 'next-i18next';
import cookies from 'js-cookie';

export const XLangManager = () => {
    useEffect(() => {
        const updateLanguage = () => {
            const lang = cookies.get('lang');
            if (isValidLanguage(lang)) {
                i18n.changeLanguage(lang);
            } else {
                i18n.changeLanguage('en');
            }
        };

        const isValidLanguage = (lang) => {
            return ['en', 'de', 'fr'].includes(lang);
        };

        // Read language preference from cookies initially
        updateLanguage();

        // Set up interval to check for language changes every second
        const interval = setInterval(() => {
            updateLanguage();
        }, 1000);

        // Clean up interval on component unmount
        return () => clearInterval(interval);
    }, []);
};