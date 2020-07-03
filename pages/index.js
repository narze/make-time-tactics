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
    <div className={styles.container}>
      <Head>
        <title>Make Time Tactics</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-4/5 bg-white">
        <h1 className="text-6xl font-bold	text-center">
          Make Time Tactics
        </h1>

        <p className={styles.description}>
          Randomize your tactics.
        </p>

        <button className="btn btn-blue my-2" onClick={randomTactics}>Random!</button>

        <div className="flex w-full space-x-4 px-8 h-48">
            <div className="w-1/3 my-8 p-4 border border-gray-700 rounded">
              <h2 className="text-center text-xl font-bold">Highlight</h2>
              { highlightTactic &&
                <>
                  <p className="text-sm">#{highlightTactic.number}</p>
                  <p>{highlightTactic.tactic}</p>
                </>
              }
            </div>

            <div className="w-1/3 my-8 p-4 border border-gray-700 rounded">
              <h2 className="text-center text-xl font-bold">Laser</h2>
              { laserTactic &&
                <>
                  <p className="text-sm">#{laserTactic.number}</p>
                  <p>{laserTactic.tactic}</p>
                </>
              }
            </div>

            <div className="w-1/3 my-8 p-4 border border-gray-700 rounded">
              <h2 className="text-center text-xl font-bold">Energize</h2>
              { energizeTactic &&
                <>
                  <p className="text-sm">#{energizeTactic.number}</p>
                  <p>{energizeTactic.tactic}</p>
                </>
              }
            </div>
        </div>

        <p>
          <a href="https://maketimebook.com" target="_blank" className="text-blue-500">About "Make Time" Book</a>
        </p>
        <p>
          <a href="https://github.com/narze/make-time-tactics" target="_blank" className="text-blue-500">Fork on Github</a>
        </p>
      </main>
    </div>
  )
}

export default Home
