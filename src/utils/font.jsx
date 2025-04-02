import { useEffect } from 'react';

const FontLoader = () => {
  useEffect(() => {
    window.WebFontConfig = {
      google: {
        families: [
          'Cairo:300,400,500,600,700,900&display=swap',
        ],
      },
    };

    const wf = document.createElement('script');
    wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
    wf.type = 'text/javascript';
    wf.async = true;

    const s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);

    return () => {
      if (window.WebFont) {}
    };
  },[]);

  return null;
}

export default FontLoader;
