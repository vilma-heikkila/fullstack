const Header = (props) => {
    return (
      <div>
        <h1>{props.course}</h1>
      </div>
    )
  }
  
  const Part = ({part}) => {
    return (
      <li>{part.name} {part.exercises}</li>
    )
  }
  
  const Content = ({parts}) => {
  
    return (
      <div>
        <ul>
          {parts.map(part => <Part key={part.id} part={part}/>)}
        </ul>
      </div>
    )
  }
  
  const Total = ({parts}) => {
    const exercises = parts.map(part => part.exercises);
    const sum = exercises.reduce((a,b) => a + b, 0);
  
    return (
      <div>
        <p>Total of {sum} exercises</p>
      </div>
    )
  }

const Course = ({course}) => {
    return (
     <li>
       <Header course={course.name}/>
       <Content parts={course.parts}/>
       <Total parts={course.parts}/>
     </li>
    )
  }

  export default Course