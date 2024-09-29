import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>© {new Date().getFullYear()} EduStats. Minden jog fenntartva.</p>
                <div className="footer-links">
                    <a href="/contact">Kapcsolat</a>
                    <a href="/privacy">Adatvédelmi nyilatkozat</a>
                    <a href="/terms">Felhasználási feltételek</a>
                </div>
                <div className="social-media">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
