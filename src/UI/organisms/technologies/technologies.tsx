"use client";
import React from "react";
import { motion } from 'framer-motion';
import styles from './technologies.module.scss';
import Title from "@/UI/atoms/title/Title";

const Technologies: React.FC = () => {
    return (
        <motion.div
            className={styles.container}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
        >
            <Title level={1} className={styles.title}>Habilidades</Title>
            <div className={styles.skills}>
                <div className={styles.skillContainer}>
                    <img className={styles.image} src="/images/svgs/HTML.svg" alt="HTML" title="HTML" />
                    <strong>HTML</strong>
                </div>

                <div className={styles.skillContainer}>
                    <img className={styles.image} src="/images/svgs/CSS.svg" alt="CSS" title="CSS" />
                    <strong>CSS</strong>
                </div>

                <div className={styles.skillContainer}>
                    <img className={styles.image} src="/images/svgs/SASS.svg" alt="Sass" title="Sass" />
                    <strong>Sass</strong>
                </div>

                <div className={styles.skillContainer}>
                    <img className={styles.image} src="/images/svgs/JS.svg" alt="Javascript" title="Javascript" />
                    <strong>JavaScript</strong>
                </div>

                <div className={styles.skillContainer}>
                    <img className={styles.image} src="/images/svgs/TS.svg" alt="Typescript" title="Typescript" />
                    <strong>TypeScript</strong>
                </div>

                <div className={styles.skillContainer}>
                    <img className={styles.image} src="/images/svgs/react.svg" alt="React" title="React" />
                    <strong>React</strong>
                </div>

                <div className={styles.skillContainer}>
                    <img className={styles.image} src="/images/svgs/nextjs.svg" alt="Next JS" title="Next JS" />
                    <strong>Next.js</strong>
                </div>

                <div className={styles.skillContainer}>
                    <img className={styles.image} src="/images/svgs/Firebase.svg" alt="Firebase" title="Firebase" />
                    <strong>Firebase</strong>
                </div>
{/* 
                <div className={styles.skillContainer}>
                    <img className={styles.image} src="/images/svgs/bootstrap.svg" alt="Bootstrap" title="Bootstrap" />
                    <strong>Bootstrap</strong>
                </div> */}

                <div className={styles.skillContainer}>
                    <img className={styles.image} src="/images/svgs/Git.svg" alt="Git" title="GIT" />
                    <strong>Git</strong>
                </div>
            </div>
        </motion.div>
    );
}

export default Technologies;
