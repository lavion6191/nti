import React, { useEffect } from 'react';
import { ReCAPTCHA } from 'react-google-recaptcha';
import Cookies from 'js-cookie';

const ReCaptchaButton = ({ onChange }) => {
    useEffect(() => {
        const themeCookie = Cookies.get('the');
        let theme = 'light'; // Default theme
        if (themeCookie === 'dark') {
            theme = 'dark';
        } else if (themeCookie === 'light') {
            theme = 'light';
        } else if (themeCookie === 'system') {
            // Check if system prefers dark mode
            const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
            theme = prefersDarkMode ? 'dark' : 'light';
        } else {
            // Fallback to default theme
            theme = 'light';
        }
        
        // Use the retrieved theme directly in the ReCAPTCHA component
        document.documentElement.setAttribute('data-theme', theme);
    }, []);

    return (
        <ReCAPTCHA
            ref={recaptchaRef}
            sitekey="6LcYuG0pAAAAAIy8Z2xv7W5ECDwUyD_ILDmSnp3D"
            onChange={onChange}
            theme={theme}
        />
    );
};

export default ReCaptchaButton;
