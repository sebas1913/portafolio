"use client";
import { motion } from 'framer-motion';
import CardProject from '@/UI/molecules/project-card/project-card';
import styles from './projects.module.scss'
import Title from '@/UI/atoms/title/Title';

const ProjectsTemplate = () => {
    const projects = [
        {
            name: "Urgencias Ya",
            imageUrl: "/images/urgenciasYa.png",
            liveUrl: "https://urgenciasya-frontend-3.onrender.com/",
            githubUrl: "https://github.com/sebas1913/UrgenciasYa-Frontend/tree/develop"
        },
        {
            name: "PlayBall",
            imageUrl: "/images/playBall.png",
            liveUrl: "https://api-football-eight.vercel.app/",
            githubUrl: "https://github.com/sebas1913/api-football"
        },
        {
            name: "Portafolio",
            imageUrl: "/images/portafolio.png",
            liveUrl: "https://portafolio-sebas-osorno-c.vercel.app/",
            githubUrl: "https://github.com/sebas1913/portafolio"
        },
        {
            name: "Beauty Salon",
            imageUrl: "/images/beauty-salon.png",
            liveUrl: "",
            githubUrl: "https://github.com/sebas1913/beauty-salon"
        }

    ];

    return (
        <motion.div
            className={styles.container}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
        >
            <div className={styles.containerProjects}>
                <Title level={1} className={styles.title}>Proyectos</Title>
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
        </motion.div>
    )
}

export default ProjectsTemplate;