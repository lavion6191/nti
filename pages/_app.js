import 'css/global.css';
import Cookies from 'js-cookie';
import { TokenManager } from 'util/token';
import { ThemeManager } from 'util/theme';

function MyApp({ Component, pageProps }) {

    const REFT = Cookies.get('reft');
    const ACT = Cookies.get('act');

    ThemeManager(); // Manage user themes
    TokenManager(REFT, ACT); // Regenerate access tokens

    return (
        <>
          <Component {...pageProps} />
        </>
    );
}

export default MyApp;
