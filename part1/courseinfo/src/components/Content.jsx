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
      <Part part={parts[0].name} exercises={parts[0].exercises} />
      <Part part={parts[1].name} exercises={parts[1].exercises} />
      <Part part={parts[2].name} exercises={parts[2].exercises} />
    </div>
  )
}
