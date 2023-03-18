import React from 'react';
import LogInForm from '../components/forms/LogInForm';
import styles from "./pages.module.scss";

const LoginPage = () => {
    return (
        <section className={styles.section}>
            <h1 className={styles.h1_log}>LOGIN TO YOUR ACCOUNT</h1>
            <LogInForm/>
        </section>
    );
}

export default LoginPage;
