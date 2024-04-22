// redirect.js
import Cookies from 'js-cookie';

const redirect = {
  reft: {

    login: () => {
      const REFT = Cookies.get('reft');
      if (REFT) {window.location.href = "/login";}
    },

    home: () => {
      const REFT = Cookies.get('reft');
      if (REFT) {window.location.href = "/";}
    },
  },
};

export default redirect;