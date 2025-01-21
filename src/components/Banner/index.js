import Btn from 'components/Button';
import styles from './Banner.module.css';

function Banner() {
    return (
        <>
            <div className={styles.capa}>
                <div className={styles.conteudo}>
                    <Btn>Front end</Btn>
                    <h1>SEO com React</h1>
                    <p>Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma "Pokedex"! </p>
                </div>
                <div>
                <iframe width="546" height="333" src="https://www.youtube.com/embed/c8mVlakBESE?si=i5cRQwIYoq8gZqjJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
            <div className={styles.mascara}></div>
        </>
    )
}

export default Banner;