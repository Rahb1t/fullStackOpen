export function Button({ type, setType, value }) {
  const handleClick = () => {
    setType(type + 1)
  }
  return <button onClick={handleClick}>{value}</button>
}
