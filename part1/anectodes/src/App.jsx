import { useState } from 'react'

function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const [display, setDisplay] = useState(false)

  const handleNextAnecdote = () => {
    setSelected(getRandomInt(anecdotes.length))
  }

  const handleVote = () => {
    setDisplay(true)
    const newAnecdoteVote = [...votes]
    newAnecdoteVote[selected] += 1
    setVotes(newAnecdoteVote)
  }

  const mostVotedAnecdote = (votesNumber) => {
    const maxVotes = Math.max(...votes)
    const index = votes.indexOf(maxVotes)
    return votesNumber ? maxVotes : anecdotes[index]
  }

  return (
    <>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>has {votes[selected]} votes</div>
      <button onClick={handleVote}>vote</button>
      <button onClick={handleNextAnecdote}>next anecdote</button>
      {display && (
        <>
          <h1>Anecdote with most votes</h1>
          <div>{mostVotedAnecdote()}</div>
          <div>has {mostVotedAnecdote(true)} votes</div>
        </>
      )}
    </>
  )
}

export default App
