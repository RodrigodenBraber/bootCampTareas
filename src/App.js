const Header = () => {
  return (
    <div>
      <h1>
        <p>Half Stack application development</p>
      </h1>
    </div>
  )
}
  const Content = (props) => {
  return (
    <div>
      <p>{props.part1}, excercises: {props.exercises1}</p>
      <p>{props.part2}, excercises: {props.exercises2}</p>
      <p>{props.part3}, excercises: {props.exercises3}</p>
    </div>
  )
}
  const Total = () => {
    return (
      <div>
        <p>Number of excercises {exercises1 + exercises2 + exercises3}</p>
      </div>
    )
}
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

const App = () => {
  return (
    <div>
      <Header course={course} />
      <Content part1={part1} exercises1={exercises1}
               part2={part2} exercises2={exercises2}
               part3={part3} exercises3={exercises3}/>
      <Total />
    </div>
  )
}

export default App