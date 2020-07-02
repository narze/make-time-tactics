import Head from 'next/head'
import styles from './index.module.css'
import { useState } from 'react'
import { data } from '../data'

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
    <div className={styles.container + " py-20"}>
      <Head>
        <title>Make Time Tactics</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-4/5 bg-white">
        <h1 className="text-6xl font-bold	text-center">
          Make Time Tactics
        </h1>

        <p className={styles.description + " my-2"}>
          Randomize your tactics.
        </p>

        <button className="btn btn-blue my-2" onClick={randomTactics}>Random!</button>

        <div className="flex w-full space-x-4 px-8">
          { highlightTactic &&
            <div className="w-1/3 my-8 p-4 border border-gray-700 rounded">
              <h2 className="text-xl font-bold">Highlight</h2>
              <p>#{highlightTactic.number}</p>
              <p>{highlightTactic.tactic}</p>
            </div>
          }

          { laserTactic &&
            <div className="w-1/3 my-8 p-4 border border-gray-700 rounded">
              <h2 className="text-xl font-bold">Laser</h2>
              <p>#{laserTactic.number}</p>
              <p>{laserTactic.tactic}</p>
            </div>
          }

          { energizeTactic &&
            <div className="w-1/3 my-8 p-4 border border-gray-700 rounded">
              <h2 className="text-xl font-bold">Energize</h2>
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
