import React from 'react';
import { getCloudinaryUrl } from '../../config/cloudinary';

export const Footer: React.FC = () => {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <img
            src={getCloudinaryUrl('RKSSTGM_text_white', { width: 300 })}
            alt="RadhaKrishna Satsangam Logo"
            className="footer-logo"
            loading="lazy"
            decoding="async"
            width={300}
            height={46}
          />
          <div className="social-links">
            <a href="https://www.youtube.com/@GurujeeGopalavallidasar" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><i className="fa-brands fa-youtube"></i></a>
            <a href="https://www.facebook.com/gopalavalli.dasan/#" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fa-brands fa-facebook"></i></a>
            <a href="https://www.instagram.com/gurujee_gopalavallidasar?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://api.whatsapp.com/send/?phone=917010888236&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><i className="fa-brands fa-whatsapp"></i></a>
          </div>
        </div>

        <div className="footer-copy-block">
          <p className="copy-line-1">&copy; 2026 RadhaKrishna Satsangam</p>
          <p className="copy-line-2">All Rights Reserved.</p>
          <p className="copy-line-3">Designed &amp; Developed by</p>
          <p className="copy-line-name">Vedha Mahadevan</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-divider"></div>
      </div>
    </footer>
  );
};

export default Footer;
