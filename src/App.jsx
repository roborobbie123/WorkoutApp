import { useState } from 'react'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Workout from './components/Workout';
import CurrentWorkout from './components/CurrentWorkout';

const defaultWorkout = [
  {
    exerciseName: "Bench press",
    weight: 185,
    reps: 8,
    sets: 4,
    rest: 3
  },
  {
    exerciseName: "Incline DB press",
    weight: 65,
    reps: 8,
    sets: 4,
    rest: 3
  }
];

function App() {
  const [workout, setWorkout] = useState(defaultWorkout);

  function handleWorkout(exercise) {
    setWorkout(prevWorkout => {
      if (prevWorkout.some(workout => workout.exerciseName === exercise.exerciseName)) {
        return prevWorkout
      }
      return [...prevWorkout, {...exercise}];
    }
    )
  }

  return (
    <div className="bg-[#36453B]">
      <NavBar />
      <br></br>
      <Header />
      <br></br>
      <Workout onAdd={handleWorkout}/>
      <CurrentWorkout workout={workout}/>
    </div>
  )
}

export default App
