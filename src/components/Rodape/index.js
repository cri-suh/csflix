import { Link } from 'react-router-dom';
import styles from './Rodape.module.css';
import logo from './logo.png';

function Rodape() {
    return (
        <footer className={styles.rodape}>
            <Link to="./">
                <img src={logo} alt='logo'></img>
            </Link>
        </footer>
    )
}

export default Rodape;