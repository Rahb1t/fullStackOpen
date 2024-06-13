const StatisticLine = ({ text, value }) => {
  const { good, neutral, bad } = value

  const averageScore = () => {
    // good: 1, neutral: 0, bad: -1
    const total = good + neutral + bad
    const score = good - bad
    return total === 0 ? 0 : Number.parseFloat(score / total).toFixed(1)
  }

  const positivePercentage = () => {
    const total = good + neutral + bad
    const positive = good / total
    return total === 0
      ? '0%'
      : `${Number.parseFloat(positive).toFixed(3) * 100}%`
  }

  if (text === 'average')
    return (
      <tr>
        <td>{text}</td>
        <td>{averageScore()}</td>
      </tr>
    )

  if (text === 'positive')
    return (
      <tr>
        <td>{text}</td>
        <td>{positivePercentage()}</td>
      </tr>
    )
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

export function Statistics({ good, neutral, bad }) {
  return (
    <div>
      {good === 0 && neutral === 0 && bad === 0 ? (
        <p>No feedback given</p>
      ) : (
        <>
          {' '}
          <h2>Statistics</h2>
          <table>
            <tbody>
              <StatisticLine text='good' value={good} />
              <StatisticLine text='neutral' value={neutral} />
              <StatisticLine text='bad' value={bad} />
              <StatisticLine text='all' value={good + neutral + bad} />
              <StatisticLine text='average' value={{ good, neutral, bad }} />
              <StatisticLine text='positive' value={{ good, neutral, bad }} />
            </tbody>
          </table>
        </>
      )}
    </div>
  )
}
