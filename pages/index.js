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
          <button onClick={randomTactics}>Random!</button>
        </p>

        { highlightTactic &&
          <div>Highlight : #{highlightTactic.number} - {highlightTactic.tactic}</div>
        }

        { laserTactic &&
          <div>Laser : #{laserTactic.number} - {laserTactic.tactic}</div>
        }

        { energizeTactic &&
          <div>Energize : #{energizeTactic.number} - {energizeTactic.tactic}</div>
        }
  {/*
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a href="https://vercel.com/import/nextjs" className={styles.card}>
            <h3>Deploy &rarr;</h3>
            <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
          </a>
        </div> */}
      </main>
    </div>
  )
}

export default Home
