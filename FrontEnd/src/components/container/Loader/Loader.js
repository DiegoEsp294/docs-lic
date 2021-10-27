import React from 'react';
import styles from './Loader.module.scss';

const Loader = () => {
    return (
        <div className={styles.loader}>
            <div className={styles.loaderBackdrop}></div>
            <div className={styles.loaderAnimation}></div>
            <p>Loading...</p>
        </div>
    )
}

export default Loader;