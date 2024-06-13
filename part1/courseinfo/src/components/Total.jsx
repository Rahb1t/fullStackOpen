export function Total({ parts }) {
  return (
    <p>
      Number of exercises{' '}
      {parts.part1.exercises + parts.part2.exercises + parts.part3.exercises}
    </p>
  )
}
