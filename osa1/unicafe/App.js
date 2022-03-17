import './App.css';
import { useState } from 'react'

const Button = (props) => {
  return (
    <div>
      <button onClick = {props.handleAction}>
        {props.text}
      </button>
    </div>
  )
}

const StatsLine = (props) => {
  return (
    <div>
      <p> {props.text}</p>
    </div>
  )
}

const StatsValue = (props) => {
  return (
    <div>
      <p> {props.number} </p>
    </div>
  )
}

const Stats = (props) => {
  const good = props.good;
  const neutral = props.neutral;
  const bad = props.bad;
  const all = props.allclicks;
  const average = props.average;
  const positive = props.positive;

  if (all === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
    <table>
      <tbody>
        <tr>
        <th align="left"><StatsLine text="good"/></th>
        <th align="left"><StatsValue number={good} /></th>
        </tr>
        <tr>
          <th align="left"><StatsLine text="neutral"/></th>
          <th align="left"><StatsValue number={neutral}/></th>
        </tr>
        <tr>
        <th align="left"><StatsLine text="bad"/></th>
        <th align="left"><StatsValue number={bad}/></th>
        </tr>
        <tr>
        <th align="left"><StatsLine text="all"/></th>
        <th align="left"><StatsValue number={all}/></th>
        </tr>
        <tr>
        <th align="left"><StatsLine text="average"/></th>
        <th align="left"><StatsValue number={average}/></th>
        </tr>
        <tr>
        <th align="left"><StatsLine text="positive (%)"/></th>
        <th align="left"><StatsValue number={positive}/></th>
        </tr>
	    </tbody>
    </table>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allclicks, setAll] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
    setAll(allclicks + 1);
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
    setAll(allclicks + 1);
  }

  const handleBadClick = () => {
    setBad(bad + 1);
    setAll(allclicks + 1);
  }

  const calculateSum = () => {
    return good+neutral+bad;
  }

  const calculateAverage = () => {
    const sum = calculateSum();
    const total = good + bad*(-1);
    return total/sum;
  }

  const calculatePositive = () => {
    const sum = calculateSum();
    return (good/sum)*100;
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" handleAction={handleGoodClick} />
      <Button text="neutral" handleAction={handleNeutralClick} />
      <Button text="bad" handleAction={handleBadClick}/>

      <h1>statistics</h1>
      <Stats good={good} neutral={neutral} bad={bad} allclicks={allclicks} average={calculateAverage()} positive={calculatePositive()} />

    </div>
  );
}

export default App;