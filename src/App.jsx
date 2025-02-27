import { useState } from 'react'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Workout from './components/Workout';
import CurrentWorkout from './components/CurrentWorkout';
import Info from './components/Info';

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
  const [isWorkoutVisible, setIsWorkoutVisible] = useState(false);
  const [date, setDate] = useState();

  function handleWorkout(exercise) {
    setWorkout(prevWorkout => {
      if (prevWorkout.some(workout => workout.exerciseName === exercise.exerciseName)) {
        return prevWorkout
      }
      return [...prevWorkout, { ...exercise }];
    }
    )
  }

  function handleNewWorkout() {
    if (isWorkoutVisible === true) {
      setIsWorkoutVisible(false)
    } else {
      setIsWorkoutVisible(true);
    }
  }

  return (
    <div className="h-full bg-[#293241]">
      <NavBar />
      <br></br>
      <Header />
      <br></br>
      <div className="flex justify-center my-3">
        <button onClick={handleNewWorkout} className='bg-[#e0fbfc] text-black px-5 py-1 rounded-md hover:bg-[#293241] hover:text-white text-lg shadow-2xl'>+ Add Workout</button>
      </div>

      <div className="flex flex-col items-center my-5">
        {isWorkoutVisible ? <><Workout onAdd={handleWorkout} />
          <CurrentWorkout workout={workout} /></> : <Info />}
      </div>
    </div>
  )
}

export default App
