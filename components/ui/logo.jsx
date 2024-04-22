/*
    ui/logo.jsx
*/

import { useRouter } from 'next/router';
import styles from 'css/invalsia.module.css';
import Image from 'next/image';
import logoImg from 'logo/nti.jpg';

export default function Logo() {
    
    const router = useRouter();
    const buttonToHome = () => { router.push('/'); };

    return (
        <>
            <span
                href="https://invalsia.com/"
                className={`
                    ${styles.iaTextDecorationNone} 
                    ${styles.iaAlignItemsCenter} 
                    ${styles.iaJustifyContentCenter} 
                    ${styles.iaCursorPointer} 
                    ${styles.iaWidth48} 
                    ${styles.iaHeight48} 
                    ${styles.iaFlex}
                `}
                onClick={buttonToHome}
            >
                <Image
                    src={logoImg}
                    alt="logo"
                    priority={true}
                    width={48}
                    height={48}
                    layout="fixed"
                    objectFit="contain"
                    className={`${styles.iaBorderRadius10P}`}
                />
            </span>
        </>
    );
}
