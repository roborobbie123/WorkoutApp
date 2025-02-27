import { useState } from 'react'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Workout from './components/Workout';

function App() {
  const [workout, setWorkout] = useState(
    [{
      exerciseName: null,
      weight: null,
      sets: null,
      rest: null
    }]
  );



  return (
    <div className="bg-[#36453B]">
      <NavBar />
      <br></br>
      <Header />
      <br></br>
      <Workout />

    </div>
  )
}

export default App
