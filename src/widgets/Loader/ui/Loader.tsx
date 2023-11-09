import styles from './Loader.module.scss';

export const Loader = () => {
    return (
        <div className={styles.loader}>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
        </div>
    );
};