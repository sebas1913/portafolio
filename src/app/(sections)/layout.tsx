import { ReactNode } from 'react';
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';
import styles from './layout.module.scss'; 

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className={styles.layoutContainer}>
            <Navbar />
            <main className={styles.main}>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
