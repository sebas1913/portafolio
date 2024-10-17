import React from "react";
import styles from './about-me.module.scss';


const AboutMe: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.description}>
                <h1 className={styles.title}>Sobre mí</h1>
                <p className={styles.text}>
                    Soy técnico en programación de software, con experiencia en HTML, CSS, SCSS, JavaScript, TypeScript, Next.js y MySQL.
                </p>
                <p className={styles.text}>
                    Durante mi tiempo como practicante en la empresa SoftwareONE Colombia, pertenecí al proyecto CHEC de EPM donde jugué un rol clave en el desarrollo y mantenimiento del portal web basado en el gestor de contenido DotNetNuke (DNN). Trabajé con JavaScript, CSS y SCSS para mejorar la funcionalidad y diseño del sitio. Mi trabajo incluyó la optimización del código y la mejora de la accesibilidad utilizando herramientas como SonarQube y UserWay.
                </p>
                <p className={styles.text}>
                    Me apasiona la tecnología y el aprendizaje continuo, lo que me impulsa a buscar siempre nuevas oportunidades para enfrentar desafíos y contribuir al éxito de proyectos innovadores. Mi objetivo es seguir creciendo como desarrollador, entregando soluciones elegantes, funcionales y de alto impacto.
                </p>

            </div>
        </div >
    );
}


export default AboutMe;