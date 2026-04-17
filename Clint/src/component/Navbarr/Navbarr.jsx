import React from 'react';
import { Link } from 'react-router-dom';

const Navbarr = () => {
    return (
        <nav style={styles.nav}>
            <ul style={styles.navList}>
                <li style={styles.navItem}>
                    <Link to="/login" style={styles.link}>Login</Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/register" style={styles.link}>Register</Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/profile" style={styles.link}>Profile</Link>
                </li>
            </ul>
        </nav>
    );
};

const styles = {
    nav: {
        backgroundColor: '#333',
        padding: '10px',
    },
    navList: {
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-around',
        margin: 0,
        padding: 0,
    },
    navItem: {
        margin: '0 10px',
    },
    link: {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '16px',
    },
};

export default Navbarr;