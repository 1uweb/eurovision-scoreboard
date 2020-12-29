import Head from 'next/head'
import Image from "next/image";
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
      <div className={styles.container}>
          <section className={styles.backdrop} />
          <section className='information'>
              <div className="wrapper">
                  <div className={styles.pagehead}>
                      <Image src='/images/theme/ESC2021_Rotterdam_web_white.png' loading="lazy" width={256} height={100} alt="Eurovision Logo" />
                      <h1>Eurovision Scoreboard</h1>
                      <Image src='/images/content/esc-flags-2021/Albania.png' loading="lazy" width={512} height={460} quality={100} alt="Eurovision Logo" />
                  </div>
              </div>
          </section>
      </div>
  )
}
