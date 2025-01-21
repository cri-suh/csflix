import Banner from "components/Banner";
import Card from "components/Card";
import styles from './Inicio.module.css';
import Btn from "components/Button";
import Videos from 'json/db.json';

function Inicio() {
    return (
        <>
            
            <Banner />
            <Btn>
                Front end
            </Btn>
            <div className={styles.cards}>
            <section className={styles.container}>
                {Videos.map((video) => { 
             return    <Card {...video} key={video.id} />
                } )}
            </section>
            <Btn>
                Back end
            </Btn>
            </div>
            
        </>
    )
}

export default Inicio;