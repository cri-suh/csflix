import styles from './Card.module.css';

function Card({id, link}){
    return(
       <div classNome={styles.container}>
            <iframe className={styles.video}
                width="400"
                height="300"
                src={link}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
       </div>
    )
}

export default Card;