import React from 'react';
import { MdEmail } from "react-icons/md";
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
                    <Button className={styles.button} type='button'>
                        Contacto <MdEmail size={25} />
                    </Button>
                    <a href="https://www.linkedin.com/in/sebasti%C3%A1n-osorno-castrill%C3%B3n/" target='_blank' rel='external noopener noreferrer'>
                        <Button className={styles.button} type='button'>
                            LinkedIn <IoLogoLinkedin size={25} />

                        </Button>
                    </a>

                </div>
            </div>
        </div>
    );
}

export default ProfileCard;
