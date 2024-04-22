
import React from 'react';
import Head from 'next/head';

export default function SEO({title, description, type, image}) {
    const siteName = 'Invalsia Inc.'; 
    const siteUrl = 'https://www.invalsia.com';
    const faviconUrl = 'https://cdn.invalsia.com/logo/P_L1D2WB_R.png';
    const twitterCreator = '@invalsia';

    return (
        <Head>
            {/* Favicon */}
            <link rel="icon" href={faviconUrl} />

            {/* Meta tags */}
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta charSet="utf-8" />

            {/* Title */}
            <title>{title + " - " + siteName}</title>

            {/* Metadata */}
            <meta name="description"    content={description}   />
            <meta name="image"          content={image}         />
            <meta name="type"           content={type}          />

            {/* Open Graph (OG) */}
            <meta property="og:title"       content={title + " - " + siteName}  />
            <meta property="og:type"        content={type}                      />
            <meta property="og:description" content={description}               />
            <meta property="og:image"       content={image}                     />
            <meta property="og:url"         content={siteUrl}                   />
            <meta property="og:site_name"   content={siteName}                  />

            {/* Additional OG metadata */}
            <meta property="og:image:width"     content="1920"      />
            <meta property="og:image:height"    content="1080"      />
            <meta property="og:locale"          content="en_US"     />
            
            {/* Twitter Card */}
            <meta name="twitter:card"           content="summary_large_image"       />
            <meta name="twitter:title"          content={title + " - " + siteName}  />
            <meta name="twitter:description"    content={description}               />
            <meta name="twitter:image"          content={image}                     />
            
            {/* Additional Twitter metadata */}
            <meta name="twitter:site" content={twitterCreator} />
            <meta name="twitter:domain" content={siteUrl} />
        </Head>
    )
}