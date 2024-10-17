import React from 'react';
import Link from 'next/link';
import styles from './navbar.module.scss';

const Navbar: React.FC = () => {
    return (
        <div className={styles.container}>
            <nav className={styles.navContainer}>
                <Link className={styles.link} href={'/about'}>Sobre mí</Link>
                <Link className={styles.link} href={'/projects'}>Proyectos</Link>
                <Link className={styles.link} href={'/contact'}>Contacto</Link>
            </nav>
        </div>
    )
}

export default Navbar;
