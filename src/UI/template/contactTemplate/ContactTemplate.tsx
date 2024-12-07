import styles from './contact.module.scss';
import Title from "@/UI/atoms/title/Title";
import ContactForm from "@/UI/organisms/contact-form/ContactForm"

const ContactTemplate = () => {
    return (
        <div className={styles.container}>
            <Title level={1} className={styles.title}>Contacto</Title>
            <ContactForm />
        </div>
    )
}

export default ContactTemplate;