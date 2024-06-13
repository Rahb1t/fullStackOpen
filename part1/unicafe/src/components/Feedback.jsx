export function Feedback({ setGood, setNeutral, setBad }) {
  const handleGoodClick = () => {
    setGood((prev) => prev + 1)
  }
  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadCLick}>bad</button>
    </div>
  )
}
