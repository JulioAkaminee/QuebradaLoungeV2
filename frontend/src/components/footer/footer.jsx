import styles from '@/styles/componentes/footer.module.css'
import Image from 'next/image'
export default function Footer(){
   return(
    <>
    <footer className={styles.footer}>
        <div className={styles.containerNavegacao}>
            <h1>Navegação</h1>
            <ul>
                <li>Home</li>
                <li>Produtos</li>
                <li>Nos Conheça</li>
                <li>Fale Conosco</li>
            </ul>
        </div>
        <div className={styles.containerFooterInformation}>
            <div className={styles.containerHorarioAtendimento}>
                <h1>Horario de Atendimento</h1>
            <p>De Qua. a Dom. das 18:00h ás 23:30h</p>
            </div>
            <div className={styles.containerLocalizacao}>
                <h1>Localização</h1>
            <p>Rua Homa,158 <br /> CEP 02984-000 - São Paulo - SP</p>
            </div>
        </div>
        
        <div className={styles.containerBaixeNossoApp}>
        <h1>Baixe Nosso Aplicativo</h1>
        <div style={{display:'flex'}}>
            <Image
                  src="/assets/images/disponivelEm/disponivel-google-play.svg"
                className={styles.imageDisponivelEm}
                  width={100}
                  height={100}
                />
                  <Image
                  src="/assets/images/disponivelEm/disponivelAppleStore.svg"
                className={styles.imageDisponivelEm}
                  width={150}
                  height={150}
                />
        </div>
        </div>
        

    </footer>
    </>
   )
}