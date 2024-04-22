// Modules
import { useState, useEffect} from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

// Images
import styles from 'css/invalsia.module.css';
import account from 'icon/google/account_circle.png';
import settings from 'icon/google/settings.png';
import logout from 'icon/google/logout.png';
import Image from 'next/image';

// Logo
import Logo from 'ui/logo';

// User Interface
import { LoginButton, SignupButton } from 'ui/buttons';
import SearchBar from 'ui/searchbar';

// Components
import deleteCookies from 'util/deleteCookies';
import { avatarGET } from 'api/user/avatar';
import { usernameGET } from 'api/user/username'

export function Navigation() {
    const router = useRouter();
    const [userAvatar, setUserAvatar] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const REFT = Cookies.get('reft');
        setIsLoggedIn(!!REFT);
        if (REFT) {
            fetchAvatar();
        }
        setIsLoading(false);
    }, []);

    const fetchAvatar = async () => {
        try {
            const userID = Cookies.get('user_id');
            const response = await avatarGET(userID);
            const image = response.data.avatar;
            let avatarUrl = image
                ? `https://cdn.invalsia.com/avatars/${userID}/${image}`
                : 'https://cdn.invalsia.com/avatars/default.jpg';
            setUserAvatar(avatarUrl);
        } catch (error) {
            console.error('Error fetching user avatar:', error);
        }
    };

    if (isLoading) {
        return <></>;
    }

    const buttonToSettings = () => { router.push('/settings'); };
    const buttonToProfile = async () => {
        const ID = Cookies.get('user_id');
        console.log("Redirector ID: ", ID)
        const response = await usernameGET(ID);
        console.log("Redirecting to", response.data.username)
        router.push(`/u/${response.data.username}`);
    };

    function buttonLogout() {
        deleteCookies();
        if (window.location.pathname === '/') { window.location.reload(); }
        else { window.location.href = '/'; }
    }

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    }

    return (
        <>
            <nav className={`${styles.iaFlex} ${styles.iaGap40} ${styles.iaPaddingX24} ${styles.iaPaddingY12} ${styles.iaCustomNav}`}>
                <ul className={`${styles.iaLstyle} ${styles.iaFlex} ${styles.iaGap32} ${styles.iaP0} ${styles.iaM0}`}>
                    <li className={`${styles.iaAlignCenter} ${styles.iaH100} ${styles.iaFlex} ${styles.iaJustifyContentCenter}`}>
                        <Logo />
                    </li>
                    {/*
                    <li className={`${styles.iaFlex} ${styles.iaAlignCenter} ${styles.iaH100} ${styles.iaCustomNavHover} ${styles.iaCursorPointer} ${styles.iaPrimaryTextHover}`} onClick={buttonToStatus}>
                        <span className={`${styles.iaTdeco} ${styles.iaFontweight600} ${styles.iaFontsize16} ${styles.iaLs2}`}>Status</span>
                    </li>
                    */}
                </ul>
                <span className={`${styles.iaListStyleNone} ${styles.iaFlex} ${styles.iaM0} ${styles.iaFlexG1} ${styles.iaAlignCenter}`}>
                    <SearchBar />
                </span>
                {isLoggedIn && (
                    <span className={`${styles.iaLstyle} ${styles.iaFlex} ${styles.iaM0} ${styles.iaGap24} ${styles.iaCursorPointer} ${styles.iaAlignCenter}`} onClick={toggleDropdown}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={userAvatar} alt="avatar" className={`${styles.iaBox40} ${styles.iaRound} ${styles.iaLstyle} ${styles.iaBorder} ${styles.iaShadow}`} />

                        {isDropdownVisible && (
                            <div className={`${styles.iaCustomNavDropdown} ${styles.iaFlex} ${styles.iaShadow}`}>
                                <ul>
                                    <li onClick={buttonToProfile} className={`${styles.iaFlex} ${styles.iaGap16}}`}>
                                        <Image
                                            src={account}
                                            alt="account"
                                            width={48}
                                            height={48}
                                            className={`${styles.imgCover} ${styles.iaWidth24} ${styles.iaBlackImage} ${styles.iaAlignCenter}`}
                                        />
                                        <span className={`${styles.iaAlignCenter} ${styles.iaFlex} ${styles.iaPaddingLeft16} ${styles.iaFlexG1}}`}>Profile</span>
                                    </li>
                                    <li onClick={buttonToSettings} className={`${styles.iaFlex} ${styles.iaGap16}}`}>
                                        <Image
                                            src={settings}
                                            alt="settings"
                                            width={48}
                                            height={48}
                                            className={`${styles.imgCover} ${styles.iaWidth24} ${styles.iaBlackImage} ${styles.iaAlignCenter}`}
                                        />
                                        <span className={`${styles.iaAlignCenter} ${styles.iaFlex} ${styles.iaPaddingLeft16} ${styles.iaFlexG1}}`}>Settings</span>
                                    </li>
                                    <li onClick={buttonLogout} className={`${styles.iaFlex} ${styles.iaGap16}}`}>
                                        <Image
                                            src={logout}
                                            alt="logout"
                                            width={48}
                                            height={48}
                                            className={`${styles.imgCover} ${styles.iaWidth24} ${styles.iaBlackImage} ${styles.iaAlignCenter}`}
                                        />
                                        <span className={`${styles.iaAlignCenter} ${styles.iaFlex} ${styles.iaPaddingLeft16} ${styles.iaFlexG1}}`}>Logout</span>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </span>
                )}
                {!isLoggedIn && (
                    <ul className={`${styles.iaLstyle} ${styles.iaFlex} ${styles.iaM0} ${styles.iaGap24} ${styles.iaP0} ${styles.iaAlignCenter}`}>
                        <li className={`${styles.iaAlignCenter} ${styles.iaHeight40} ${styles.iaFlex}`}>
                            <LoginButton />
                        </li>
                        <li className={`${styles.iaAlignCenter} ${styles.iaHeight40} ${styles.iaFlex}`}>
                            <SignupButton />
                        </li>
                    </ul>
                )}
            </nav>
        </>
    );
}
