export default function CurrentWorkout({ workout }) {
    return (
        <div className="flex gap-5">
            {workout && workout.map(exercise =>
                <ul key={exercise.exerciseName}>
                    <li className="font-bold text-lg">{exercise.exerciseName}</li>
                    <li>Weight: {exercise.weight} lbs</li>
                    <li>Reps: {exercise.reps}</li>
                    <li>Sets: {exercise.sets}</li>
                    <li>Rest: {exercise.rest} min</li>
                </ul>)}
        </div>
    );
}