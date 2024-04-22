import styles from 'css/invalsia.module.css'

export function SignupButton() {
    const handleLoginClick = () => {
        window.location.href = '/signup';
    };

    return(
        <button className={`${styles.iaFlex} ${styles.iaBtn2} ${styles.iaAlignCenter} ${styles.iaHeight40} ${styles.iaShadow}`} onClick={handleLoginClick}>
            <p className={` ${styles.iaAlignCenter} ${styles.iaPaddingX8} ${styles.iaFontsize14} ${styles.iaFontweight600} ${styles.iaFontInter} ${styles.iaLs1}`}>Signup</p>
        </button>
    );
}

export function LoginButton() {
    const handleLoginClick = () => {
        window.location.href = '/login';
    };

    return (
        <button className={`${styles.iaFlex} ${styles.iaBtn1} ${styles.iaAlignCenter} ${styles.iaHeight40} ${styles.iaFontsize4} ${styles.iaShadow}`} onClick={handleLoginClick}>
            <p className={`${styles.iaAlignCenter} ${styles.iaPaddingX8} ${styles.iaFontsize14} ${styles.iaFontweight600} ${styles.iaFontInter} ${styles.iaLs1}`}>Login</p>
        </button>
    );
}

