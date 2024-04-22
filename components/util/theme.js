import React, { useEffect, useCallback, useState } from 'react';
import Cookies from 'js-cookie';
import api from 'util/api';
import deleteCookies from 'util/deleteCookies'
import styles from 'css/invalsia.module.css';

export async function ThemeManager() {
    // Get the 'reft' cookie
    const REFT = Cookies.get('reft');

    // Function to set the theme class on the body element
    const setThemeInBody = (theme) => {
        document.body.className = styles[theme];
    };

    // Apply custom theme styles if available
    const applyCustomTheme = () => {
        const parsedCustomTheme = JSON.parse(Cookies.get('cth'));
        if (parsedCustomTheme) {
            Object.entries(parsedCustomTheme).forEach(([key, value]) => {
                document.body.style.setProperty(key, value);
            });
        }
    };

    // Set the theme based on the system's color scheme
    const setSystemTheme = () => {
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light';
        setThemeInBody(systemTheme);
    };

    // Function to fetch and set the user's theme
    const fetchUserTheme = useCallback(async () => {
        try {
            const themeCookie = Cookies.get('the');
            if (!themeCookie) {
                if (REFT) {
                    // User is logged in, get theme from the API
                    const response = await api.post('/v1/user/theme', { REFT });
                    if (response.data.theme) {
                        Cookies.set('the', response.data.theme);
                        setThemeInBody(response.data.theme);
                    } else {
                        setSystemTheme();
                    }
                } else {
                    // User is not logged in, set theme to "system"
                    Cookies.set('the', 'system');
                    setSystemTheme();
                }
            } else {
                if (themeCookie === 'custom') {
                    applyCustomTheme();
                } else if (themeCookie === 'system') {
                    setSystemTheme();
                } else {
                    setThemeInBody(themeCookie);
                }
            }
        } catch (error) {
            console.log(error.response.status)
            if (error.response === 401) {
                deleteCookies();
            } else {
                console.error('Error fetching user theme:', error);
            }
        }
    }, [REFT]);

    // Get the current theme from cookies and set it as state
    const [theme, setTheme] = useState(Cookies.get('the'));

    // Update the theme when it changes
    useEffect(() => {
        setThemeInBody(theme);
    }, [theme]);

    // Fetch user theme and check for changes periodically
    useEffect(() => {
        fetchUserTheme();
        const interval = setInterval(() => {
            const updatedTheme = Cookies.get('the');
            if (updatedTheme && updatedTheme !== theme) {
                if (updatedTheme === 'system') { setSystemTheme(); } 
                else { setTheme(updatedTheme); }
            } 
            else { fetchUserTheme(); }
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    if (!theme) {
        return <>Loading...</>;
    }

    return null;
}
