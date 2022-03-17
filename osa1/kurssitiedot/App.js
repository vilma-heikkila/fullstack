const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
      {props.part} {props.ex}
      </p>
    </div>
  )
}

const Content = (props) => {

  const parts = props.parts;
  const part0 = parts[0];
  const part1 = parts[1];
  const part2 = parts[2];

  return (
    <div>
      <Part part={part0.name} ex={part0.exercises}/>
      <Part part={part1.name} ex={part1.exercises}/>
      <Part part={part2.name} ex={part2.exercises}/>
    </div>
  )
}

const Total = (props) => {

  const parts = props.parts;
  return (
    <div>
      <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
    </div>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts} />
    </div>
  )
}

export default App