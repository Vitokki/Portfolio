import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import CoverPage from '../Components/CoverPage/index';

export default function Home() {
  return (
    <div className={styles.container}>
      <CoverPage></CoverPage>
      <CoverPage></CoverPage>
    </div>
  )
}
