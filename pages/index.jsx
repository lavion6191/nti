import styles from 'css/invalsia.module.css';
import SEO from 'layout/SEO';
import { Navigation } from 'layout/nav';
import { Footer } from 'layout/footer';

export default function HomePage() {
    return (
        <>
            <SEO
                title="Home"
                description="Welcome to my school page!"
                image=""
            />
            <div className={`${styles.iaCustomFont} ${styles.iaWrapper} ${styles.iaFlex} ${styles.iaFlexDirectionColumn} ${styles.iaH100}`}>
                <header className={`${styles.iaPositionSticky} ${styles.iaFlex}`}>
                    <Navigation />
                </header>
                <div className={`${styles.iaContent} ${styles.iaH100} ${styles.iaFlex} ${styles.iaFlexDirectionColumn}`}>
                    <main className={`${styles.iaFlexG1}`}>
                        <p>Hello world</p>
                    </main>
                    <Footer />
                </div>
            </div>
        </>
    );
}