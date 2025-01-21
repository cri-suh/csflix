import styles from './Button.module.css';

function Btn({children}) {
    return (
        <button className={styles.btn}>{children}</button>
    )
}

export default Btn;