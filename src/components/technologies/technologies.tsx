import React from "react";
import styles from './technologies.module.scss';

const Technologies: React.FC = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Habilidades</h1>
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
                    <img className={styles.image} src="/images/svgs/SASS.svg" alt="Sass" title="Sass"/>
                    <strong>SASS</strong>
                </div>

                <div className={styles.skillContainer}>
                    <img className={styles.image} src="/images/svgs/JS.svg" alt="Javascript" title="Javascript" />
                    <strong>Javascript</strong>
                </div>

                <div className={styles.skillContainer}>
                    <img className={styles.image} src="/images/svgs/TS.svg" alt="Typescript" title="Typescript"/>
                    <strong>Typescript</strong>
                </div>

                <div className={styles.skillContainer}>
                    <img className={styles.image} src="/images/svgs/react.svg" alt="React" title="React" />
                    <strong>React</strong>
                </div>

                <div className={styles.skillContainer}>
                    <img className={styles.image} src="/images/svgs/nextjs.svg" alt="Next JS" title="Next JS" />
                    <strong>Next JS</strong>
                </div>

                <div className={styles.skillContainer}>
                    <img className={styles.image} src="/images/svgs/bootstrap.svg" alt="Bootstrap" title="Bootstrap" />
                    <strong>Bootstrap</strong>
                </div>

                <div className={styles.skillContainer}>
                    <img className={styles.image} src="/images/svgs/Git.svg" alt="Git" title="GIT"/>
                    <strong>GIT</strong>
                </div>


            </div>
        </div>
    )
}

export default Technologies;




