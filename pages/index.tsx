import type { NextPage } from 'next'
import Nav from "../components/nav/nav"
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Nav/>
    </div>
  )
}

export default Home
