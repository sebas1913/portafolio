"use client";
import { motion } from 'framer-motion';
import styles from './contact.module.scss';
import Title from "@/UI/atoms/title/Title";
import ContactForm from "@/UI/organisms/contact-form/ContactForm"

const ContactTemplate = () => {
    return (
        <motion.div
            className={styles.container}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
        >
            <div className={styles.container}>
                <Title level={1} className={styles.title}>Contacto</Title>
                <ContactForm />
            </div>
        </motion.div>
    )
}

export default ContactTemplate;