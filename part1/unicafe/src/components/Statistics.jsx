export function Statistics({ good, neutral, bad }) {
  const averageScore = () => {
    // good: 1, neutral: 0, bad: -1
    const total = good + neutral + bad
    const score = good - bad
    return total === 0 ? 0 : score / total
  }

  const positivePercentage = () => {
    const total = good + neutral + bad
    const positive = good / total
    return total === 0 ? '0%' : `${positive * 100}%`
  }
  return (
    <div>
      {good === 0 && neutral === 0 && bad === 0 ? (
        <p>No feedback given</p>
      ) : (
        <>
          <h1>Statistics</h1>
          <p>good {good}</p>
          <p>neutral {neutral}</p>
          <p>bad {bad}</p>
          <p>all {good + neutral + bad}</p>
          <p>average {averageScore()}</p>
          <p>positive {positivePercentage()}</p>
        </>
      )}
    </div>
  )
}
