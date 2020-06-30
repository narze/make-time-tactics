import Head from 'next/head'
import styles from './index.module.css'
import { useState } from 'react'
import { data } from './_data'

const Home = () => {
  const [highlightTactic, setHighlightTactic] = useState(null)
  const [laserTactic, setLaserTactic] = useState(null)
  const [energizeTactic, setEnergizeTactic] = useState(null)

  const randomTactics = () => {
    const { highlights, lasers, energizes } = data
    const highlightResult = highlights[Math.floor(Math.random() * highlights.length)]
    const laserResult = lasers[Math.floor(Math.random() * lasers.length)]
    const energizeResult = energizes[Math.floor(Math.random() * energizes.length)]

    setHighlightTactic(highlightResult)
    setLaserTactic(laserResult)
    setEnergizeTactic(energizeResult)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Make Time Tactics</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Make Time Tactics
        </h1>

        <p className={styles.description}>
          Randomize your tactics.
          <br />
          <button className={styles.button} onClick={randomTactics}>Random!</button>
        </p>

        <div className={styles.grid}>
          { highlightTactic &&
            <div className={styles.card}>
              <h3>Highlight</h3>
              <p>#{highlightTactic.number}</p>
              <p>{highlightTactic.tactic}</p>
            </div>
          }

          { laserTactic &&
            <div className={styles.card}>
              <h3>Laser</h3>
              <p>#{laserTactic.number}</p>
              <p>{laserTactic.tactic}</p>
            </div>
          }

          { energizeTactic &&
            <div className={styles.card}>
              <h3>Energize</h3>
              <p>#{energizeTactic.number}</p>
              <p>{energizeTactic.tactic}</p>
            </div>
          }
        </div>

        <p>
          <a href="https://maketimebook.com">About "Make Time" Book</a>
        </p>
      </main>
    </div>
  )
}

export default Home
