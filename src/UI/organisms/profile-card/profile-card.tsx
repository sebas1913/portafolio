"use client";
import { motion } from 'framer-motion'
import { PiReadCvLogo } from "react-icons/pi";
import { IoLogoLinkedin } from "react-icons/io5";
import styles from './profile-card.module.scss';
import Button from '@/UI/atoms/button/button';
import Title from '@/UI/atoms/title/Title';
import Paragraph from '@/UI/atoms/paragraph/Paragraph';


const ProfileCard: React.FC = () => {
    return (
        <motion.div className={styles.container}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}>
            <div className={styles.descriptionContainer}>
                <Title level={1} className={styles.title}>Hola, soy Sebastián</Title>
                <Paragraph className={styles.description}>Desarrollador frontend junior</Paragraph>
                <Paragraph className={styles.experience}>Me especializo en crear aplicaciones web modernas y adaptables, fusionando diseño atractivo con una experiencia de usuario fluida y accesible.</Paragraph>
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
        </motion.div>
    );
}

export default ProfileCard;
