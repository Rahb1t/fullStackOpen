import { useState } from 'react'
import { Statistics } from './components/Statistics'
import { Button } from './components/Button'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button type={good} setType={setGood} value='good' />
      <Button type={neutral} setType={setNeutral} value='neutral' />
      <Button type={bad} setType={setBad} value='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
