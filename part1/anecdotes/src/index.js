import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({text, handleOnClick}) =>(
  <button onClick={handleOnClick}>{text}</button>
)
const random = (min, max) => {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}

const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(INITIAL_STATE)

  const incrementVote = () => {
    const newPoints = [...points]
    newPoints[selected] += 1
    setPoints(newPoints)
  }

  return (
    <div>
      {anecdotes[selected]}
      <p>has {points[selected]} votes</p>
      <div>
        <Button text='vote' handleOnClick={incrementVote} />
        <Button text='next anecdote' 
          handleOnClick={()=> setSelected(random(0,anecdotes.length-1))}/>
      </div>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const INITIAL_STATE = new Array(anecdotes.length).fill(0)

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
