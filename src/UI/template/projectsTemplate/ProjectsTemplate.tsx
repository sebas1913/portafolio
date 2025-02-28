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
            githubUrl: "https://github.com/sebas1913/UrgenciasYa-Frontend/tree/develop",
            description: "Desarrollo de un sitio web que permite localizar, de manera rápida, el hospital más cercano con convenio para emergencias, construido en React con el framework Next.js, TypeScript y Sass, integrando un backend a través de consumo de APIs. Como resultado, se mejoró el acceso a servicios críticos durante emergencias."
        },
        {
            name: "PlayBall",
            imageUrl: "/images/playBall.png",
            liveUrl: "https://api-football-eight.vercel.app/",
            githubUrl: "https://github.com/sebas1913/api-football",
            description: "Creación de un buscador interactivo de equipos, jugadores y estadios de fútbol, integrando datos de API-SPORTS con Next.js 14, que potenció la experiencia del usuario al facilitar la consulta de datos."
        },
        {
            name: "siekGPT",
            imageUrl: "/images/siekGPT.png",
            liveUrl: "",
            githubUrl: "https://github.com/sebas1913/api-openai",
            description: "Implementación de una aplicación utilizando la API de ChatGPT, con gestión de datos mediante Prisma, desarrollada con Next.js, React y SASS."
        },
        {
            name: "El Barbero",
            imageUrl: "/images/barbero.png",
            liveUrl: "",
            githubUrl: "https://github.com/sebas1913/turnoGo",
            description: " Desarrollo en curso de una aplicación para la gestión de citas en barberías, enfocada en mejorar la organización y experiencia del cliente. Construida con Next.js 15 e integración de servicios de backend."
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
                            description={project.description}
                        />
                    ))}
                </div>

            </div>
        </motion.div>
    )
}

export default ProjectsTemplate;