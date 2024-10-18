import React from 'react';
import CardProject from '@/components/project-card/project-card';
import styles from './projects.module.scss'

const Projects: React.FC = () => {
    const projects = [
        {
            name: "Urgencias Ya",
            imageUrl: "/images/urgenciasYa.png",
            liveUrl: "https://urgenciasya-frontend-3.onrender.com/",
            githubUrl: "https://github.com/sebas1913/UrgenciasYa-Frontend/tree/develop"
        },
        {
            name: "Urgencias Ya",
            imageUrl: "/images/urgenciasYa.png",
            liveUrl: "https://urgenciasya-frontend-3.onrender.com/",
            githubUrl: "https://github.com/sebas1913/UrgenciasYa-Frontend/tree/develop"
        }

    ];

    return (
        <div className={styles.containerProjects}>
            <h1 className={styles.title}>Proyectos</h1>
            <div className={styles.projects}>
                {projects.map((project, index) => (
                    <CardProject
                        key={index}
                        name={project.name}
                        imageUrl={project.imageUrl}
                        liveUrl={project.liveUrl}
                        githubUrl={project.githubUrl}
                    />
                ))}
            </div>

        </div>
    )
}

export default Projects;
