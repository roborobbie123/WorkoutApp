export default function CurrentWorkout({ workout }) {
    return (
        <div className="w-1/2 flex flex-wrap gap-5 justify-center p-2">
            {workout && workout.map(exercise =>
                <ul className="border-2 p-1 rounded-sm text-white" key={exercise.exerciseName}>
                    <li className="font-bold text-lg">{exercise.exerciseName.toUpperCase()}</li>
                    <li>Weight: {exercise.weight} lbs</li>
                    <li>Reps: {exercise.reps}</li>
                    <li>Sets: {exercise.sets}</li>
                    <li>Rest: {exercise.rest} min</li>
                </ul>)}
        </div>
    );
}