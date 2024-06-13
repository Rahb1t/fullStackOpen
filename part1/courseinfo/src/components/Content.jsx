const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

export function Content({ parts }) {
  return (
    <div>
      <Part part={parts.part1.name} exercises={parts.part1.exercises} />
      <Part part={parts.part2.name} exercises={parts.part2.exercises} />
      <Part part={parts.part3.name} exercises={parts.part3.exercises} />
    </div>
  )
}
