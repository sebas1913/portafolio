import React from 'react';
import { PiReadCvLogo } from "react-icons/pi";
import { IoLogoLinkedin } from "react-icons/io5";
import styles from './profile-card.module.scss'
import Button from '../UI/button/button';




const ProfileCard: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.descriptionContainer}>
                <h1 className={styles.title}>Hola, soy Sebastián</h1>
                <p className={styles.description}>Desarrollador frontend junior</p>
                <p className={styles.experience}>Me especializo en crear aplicaciones web modernas y adaptables, fusionando diseño atractivo con una experiencia de usuario fluida y accesible</p>
                <div className={styles.buttonContainer}>
                    <a href="https://drive.google.com/file/d/1DjZKea3hl0QtgaxmCze5P5iNgE93SvId/view?usp=drive_link" target='_blank' rel='noopener noreferrer'>
                        <Button className={styles.button} type='button'>
                            Currículum <PiReadCvLogo size={25} />
                        </Button></a>
                    <a href="https://www.linkedin.com/in/sebasti%C3%A1n-osorno-castrill%C3%B3n/" target='_blank' rel='noopener noreferrer'
                    >
                        <Button className={styles.button} type='button'>
                            LinkedIn <IoLogoLinkedin size={25} />

                        </Button>
                    </a>

                </div>
            </div>
            <div className={styles.logoContainer}>
                <img src="/images/logo.png" alt="" />
            </div>
        </div>
    );
}

export default ProfileCard;
