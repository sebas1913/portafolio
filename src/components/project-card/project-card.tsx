import React from "react";
import { AiFillGithub } from "react-icons/ai";
import styles from './project-card.module.scss';
import Button from "@/components/UI/button/button";

interface CardProjectProps {
    name: string;
    imageUrl: string;
    liveUrl: string;
    githubUrl: string;
}

const CardProject: React.FC<CardProjectProps> = ({ name, imageUrl, liveUrl, githubUrl }) => {
    return (
        <div className={styles.card}>
            <div className={styles.containerImage}>
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                    <img className={styles.image} src={imageUrl} alt={`Preview de ${name}`} />
                </a>
            </div>
            <div className={styles.description}>
                <div className={styles.name}>
                    <strong>{name}</strong>
                </div>
                <div className={styles.containerButton}>
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                        <Button className={styles.button}>
                            <AiFillGithub color="#fff" size={40} />
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default CardProject;
