"use client";
import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import styles from './contact.module.scss';
import FormField from "@/UI/molecules/form-field/FormField";
import Button from "@/UI/atoms/button/button";
import Title from "@/UI/atoms/title/Title";

const ContactForm: React.FC = () => {
    const [state, handleSubmit] = useForm("myzyaywe");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    };

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    if (state.succeeded) {
        return <Title level={2}>¡Gracias por tu mensaje!</Title>;
    }

    return (
        <div className={styles.container}>

            <form className={styles.form} onSubmit={handleSubmit}>
                <FormField
                    id="name"
                    label="Nombre"
                    type="text"
                    name="name"
                    placeholder="Ingresa tu nombre"
                    value={name}
                    onChange={handleNameChange}
                    required
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />

                <FormField
                    id="email"
                    label="Correo Electrónico"
                    type="email"
                    name="email"
                    placeholder="Ingresa tu correo electrónico"
                    value={email}
                    onChange={handleEmailChange}
                    required
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />

                <FormField
                    id="message"
                    label="Mensaje"
                    type="text"
                    name="message"
                    placeholder="Ingresa tu mensaje"
                    value={message}
                    onChange={handleMessageChange}
                    required
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />

                <Button className={styles.button} type="submit" disabled={state.submitting}>
                    Enviar
                </Button>
            </form>
            <div className={styles.imageContainer}>
                <img className={styles.image} src="/images/cohete.jpg" alt="" />
            </div>
        </div>

    );
};

export default ContactForm;
