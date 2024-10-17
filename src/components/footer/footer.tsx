import React from "react";
import styles from './footer.module.scss';
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";



const Footer: React.FC = () => {
    return(
        <footer className={styles.footerContainer}>
            <div>
                <p className={styles.copyright}>© 2024 Sebastián Osorno Castrillón</p>
            </div>
            <div className={styles.socialContainer}>
                <a href="https://www.instagram.com/bastian__91/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={30}/>
                </a>
                <a href="https://www.linkedin.com/in/sebasti%C3%A1n-osorno-castrill%C3%B3n/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn size={30}/>
                </a>

            </div>
        </footer>
    )
}

export default Footer;