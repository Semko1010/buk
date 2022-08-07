import type { NextPage } from 'next'
import Nav from "../components/nav/nav"
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Nav/>
      <section className='mt-20'>
        <div className='flex flex-col items-center justify-center px-4'>
          <h2 className='text-3xl font-light leading-none'>18. BERGISCHER 
              UNTERNEHMER-
              KONGRESS 2022</h2>
          <p className='w-72 mr-auto my-6 font-light'>Am 03. Mai 2022. MIT DEM THEMA:  
            QUO VADIS? EINE Gesellschaft IM UMBRUCH</p>
            <button className='mr-auto bg-buttonPrimary py-3 px-4 text-white rounded-3xl'>Ticket Kaufen</button>
        </div>
        <div>
          <img className='mt-12' src="./img/hero1.png" alt="" />
        </div>
      </section>
      <main className='pt-20 mt-14' style={{ 
      backgroundImage: `url("./img/back.png")` 
    }}>
        <div className='w-11/12 mx-auto'>
          <h2 className='font-semibold text-white'>Der Kongress</h2>
          <p>Der Bergische Unternehmerkongress zeichnet sich dadurch aus, dass die Wirtschaftsjunioren Wuppertal jedes Jahr Unternehmer:innen, Führungskräfte und Multiplikator:innen aus dem Bergischen Land einladen um über gesellschaftspolitische Themen mit Experten zu diskutieren.

          In den vergangenen Jahren haben uns viele namenhafte Persönlichkeiten aus Wirtschaft, Politik und Gesellschaft inspiriert.</p>
        </div>
        <div>
          <h2>Die Wirtschaftsjunioren</h2>
          <p>Die Wirtschaftsjunioren Wuppertal sind das aktive Netzwerk der jungen Wirtschaft in der Schwebebahnstadt Wuppertal.

          In unserem Verein engagieren sich über 90 Unternehmer:innen und Führungskräfte, die aus allen Bereichen der regionalen Wirtschaft stammen.

          Sie sind Teil des mit rund 10.000 Mitglieder bundesweit größten Verbandes junger Unternehmer:innen und Führungskräfte in Deutschland.</p>
        </div>
        
      </main>
    </div>
  )
}

export default Home
