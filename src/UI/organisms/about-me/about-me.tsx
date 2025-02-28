"use client";
import React from "react";
import { motion } from 'framer-motion';
import styles from './about-me.module.scss';
import Paragraph from "@/UI/atoms/paragraph/Paragraph";
import Title from "@/UI/atoms/title/Title";

const AboutMe: React.FC = () => {
    return (
        <motion.div
            className={styles.container}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
        >
            <div className={styles.description}>
                <Title level={1} className={styles.title}>Sobre mí</Title>
                <Paragraph className={styles.text}>
                    Soy un desarrollador frontend apasionado por la optimización de interfaces, la accesibilidad web y el desarrollo de soluciones escalables. Con experiencia en React, Next.js, TypeScript y SASS, me especializo en construir aplicaciones eficientes, accesibles y de alto rendimiento.
                </Paragraph>
                <Paragraph className={styles.text}>
                    Durante mi tiempo en SoftwareONE Colombia, trabajé en el portal web de CHEC (EPM) utilizando DNN, donde optimicé código con SonarQube y mejoré la accesibilidad con UserWay. Además, he desarrollado proyectos freelance como UrgenciasYa, PlayBall, y SiekGPT, aplicando integración de APIs, gestión de datos con Prisma y las últimas versiones de Next.js.
                </Paragraph>
                <Paragraph className={styles.text}>
                    Me motiva el aprendizaje continuo y la búsqueda de soluciones innovadoras. Mi objetivo es seguir creciendo como desarrollador y aportar valor a proyectos desafiantes con código limpio y bien estructurado.
                </Paragraph>

            </div>
        </motion.div >
    );
}


export default AboutMe;