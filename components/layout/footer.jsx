import styles from 'css/invalsia.module.css'
import { useRouter } from 'next/router'

export function Footer() {
    const router = useRouter()
    const buttonToHome = () => { router.push('/') }

    // Get the current year dynamically
    const currentYear = new Date().getFullYear()

    return (
        <footer className={`${styles.iaFontsize12}`}>
            <div className={`${styles.iaPaddingBottom16}`}>
                <div className={`${styles.iaFlex} ${styles.iaAlignCenter}`}>
                    <p>&copy;{currentYear} <span onClick={buttonToHome} className={`${styles.iaHov1} ${styles.iaCursorPointer}`}>Invalsia Inc.</span> All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}