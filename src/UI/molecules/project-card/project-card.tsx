import React from "react";
import styles from './project-card.module.scss';
import Button from "@/UI/atoms/button/button";
import { Icons } from "@/UI/atoms/icons/Icons";
import Paragraph from "@/UI/atoms/paragraph/Paragraph";
import Title from "@/UI/atoms/title/Title";
interface CardProjectProps {
    name: string;
    imageUrl: string;
    liveUrl?: string;
    githubUrl: string;
    description: string;
}

const CardProject: React.FC<CardProjectProps> = ({ name, imageUrl, liveUrl, githubUrl, description }) => {
    return (
        <div className={styles.card}>
            <div className={styles.containerImage}>
                <img className={styles.image} src={imageUrl} alt={`Preview de ${name}`} />
            </div>
            <div className={styles.headerCard}>
                <div className={styles.name}>
                    <Title level={3}>{name}</Title>
                </div>
                <div className={styles.containerButton}>
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                        <Button className={styles.button}>
                            {Icons.github}
                        </Button>
                    </a>
                    {liveUrl && (
                        <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                            <Button className={styles.button}>
                                {Icons.link}
                            </Button>
                        </a>
                    )}
                </div>

            </div>
            <div className={styles.description}>
                <Paragraph>{description}</Paragraph>
            </div>
        </div>
    )
}

export default CardProject;
