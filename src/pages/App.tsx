import React, { ReactElement } from 'react'
import './app.css'
import { NetworkFrame } from '../scripts/neuralNetwork/networkFrame'
import { init } from '../scripts'

init()

export default function App() {

  return (
    <div className="app">
      <main>
          <NetworkFrame></NetworkFrame>
      </main>
    </div>
  )
}