// error.jsx
import React from 'react';
import styles from "css/invalsia.module.css";
import SEO from 'layout/SEO';
import Footer from 'layout/footer';

const Error = ({ http, title, description }) => {
    return (
        <>
            {/* Head */}
            <SEO
                title={`${http} - ${title}`}
                description=""
                type="something"
                image="https://cdn.invalsia.com/public/covers/background1.png"
            />

            {/* Body */}
            <div className={`${styles.iaCustomFont} ${styles.wrapper}`}>
                <div className={`${styles.iaContent} ${styles.iaH100} ${styles.iaFlex} ${styles.iaFlexCol}`}>
                    <main className={`${styles.iaFlexG1}`}>
                        <div className={`${styles.iaFlex} ${styles.iaAlignCenter} ${styles.iaH100} ${styles.iaW100}`}>
                            <div className={`${styles.quantumCard} ${styles.iaAlignCenter} ${styles.iaTextAlignCenter} ${styles.iaPaddingY32} ${styles.iaPaddingX48}`}>
                                <div className={`${styles.iaAlignCenter} ${styles.iaFlex} ${styles.iaFlexCol}`}>
                                    <p className={`
                                        ${styles.quantumHighlight}
                                        ${styles.iaMarginTop0}
                                        ${styles.iaMarginLeft0}
                                        ${styles.iaMarginBottom10}
                                        ${styles.iaMarginRight0}
                                        ${styles.iaPaddingY2}
                                        ${styles.iaPaddingX16}
                                    `}>
                                    {http} - {title}
                                    </p>
                                </div>
                                {/* Render HTML tags */}
                                <p className={`${styles.iaTextAlignCenter}`} dangerouslySetInnerHTML={{ __html: description }}></p>
                            </div>
                        </div>
                    </main>
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default Error;
