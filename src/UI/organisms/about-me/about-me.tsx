"use client";
import React from "react";
import { motion } from 'framer-motion'
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
                    Soy técnico en programación de software, con experiencia en HTML, CSS, SCSS, JavaScript, TypeScript, React y Next.js.
                </Paragraph>
                <Paragraph className={styles.text}>
                    Durante mi tiempo como practicante en la empresa SoftwareONE Colombia, pertenecí al proyecto CHEC de EPM donde jugué un rol clave en el desarrollo y mantenimiento del portal web basado en el gestor de contenido DotNetNuke (DNN). Trabajé con JavaScript, CSS y SCSS para mejorar la funcionalidad y diseño del sitio. Mi trabajo incluyó la optimización del código y la mejora de la accesibilidad utilizando herramientas como SonarQube y UserWay.
                </Paragraph>
                <Paragraph className={styles.text}>
                    Me apasiona la tecnología y el aprendizaje continuo, lo que me impulsa a buscar siempre nuevas oportunidades para enfrentar desafíos y contribuir al éxito de proyectos innovadores. Mi objetivo es seguir creciendo como desarrollador, entregando soluciones elegantes, funcionales y de alto impacto.
                </Paragraph>

            </div>
        </motion.div >
    );
}


export default AboutMe;