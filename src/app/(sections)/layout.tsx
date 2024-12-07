import { ReactNode } from 'react';
import Navbar from '@/UI/organisms/navbar/navbar';
import Footer from '@/UI/organisms/footer/footer';
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
