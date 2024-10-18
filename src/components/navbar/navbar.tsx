"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; 
import styles from './navbar.module.scss';

const Navbar: React.FC = () => {
    const pathname = usePathname(); 

    return (
        <div className={styles.container}>
            <nav className={styles.navContainer}>
                <Link
                    href="/about"
                    className={`${styles.link} ${pathname === '/about' ? styles.active : ''}`}
                >
                    Sobre mí
                </Link>
                <Link
                    href="/projects"
                    className={`${styles.link} ${pathname === '/projects' ? styles.active : ''}`}
                >
                    Proyectos
                </Link>
                <Link
                    href="/contact"
                    className={`${styles.link} ${pathname === '/contact' ? styles.active : ''}`}
                >
                    Contacto
                </Link>
            </nav>
        </div>
    );
}

export default Navbar;
