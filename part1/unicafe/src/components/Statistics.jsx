const StatisticLine = ({ text, value }) => {
  console.log('value', value)
  const { good, neutral, bad } = value

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

  if (text === 'average')
    return (
      <p>
        {text} {averageScore()}
      </p>
    )

  if (text === 'positive')
    return (
      <p>
        {text} {positivePercentage()}
      </p>
    )
  return (
    <p>
      {text} {value}
    </p>
  )
}

export function Statistics({ good, neutral, bad }) {
  return (
    <div>
      {good === 0 && neutral === 0 && bad === 0 ? (
        <p>No feedback given</p>
      ) : (
        <>
          <h1>Statistics</h1>
          <StatisticLine text='good' value={good} />
          <StatisticLine text='neutral' value={neutral} />
          <StatisticLine text='bad' value={bad} />
          <StatisticLine text='all' value={good + neutral + bad} />
          <StatisticLine text='average' value={{ good, neutral, bad }} />
          <StatisticLine text='positive' value={{ good, neutral, bad }} />
        </>
      )}
    </div>
  )
}
