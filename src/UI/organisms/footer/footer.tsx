import React from "react";
import styles from './footer.module.scss';
import Paragraph from "@/UI/atoms/paragraph/Paragraph";
import { Icons } from "@/UI/atoms/icons/Icons";


const Footer: React.FC = () => {
    return (
        <footer className={styles.footerContainer}>
            <div>
                <Paragraph className={styles.copyright}>
                    <img src="/images/logo.png" alt="" />

                    2024 Sebastián Osorno Castrillón
                </Paragraph>
            </div>
            <div className={styles.socialContainer}>
                <a href="https://www.instagram.com/bastian__91/" target="_blank" rel="noopener noreferrer">
                    {Icons.instagram}
                </a>
                <a href="https://www.linkedin.com/in/sebasti%C3%A1n-osorno-castrill%C3%B3n/" target="_blank" rel="noopener noreferrer">
                    {Icons.linkedin}
                </a>
            </div>
        </footer>
    )
}

export default Footer;