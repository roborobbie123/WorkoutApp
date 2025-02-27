import { useRef } from "react";

const inputStyle = 'ml-5 bg-[#F5F9E9] rounded-sm text-black';

export default function Workout({ onAdd }) {
    const dateRef = useRef();
    const exerciseRef = useRef();
    const weightRef = useRef();
    const repsRef = useRef();
    const setsRef = useRef();
    const restRef = useRef();

    function handleAdd() {
        if (exerciseRef.current.value && weightRef.current.value && repsRef.current.value && setsRef.current.value && restRef.current.value) {
            const newExercise = {
                exerciseName: exerciseRef.current.value,
                weight: weightRef.current.value,
                reps: repsRef.current.value,
                sets: setsRef.current.value,
                rest: restRef.current.value
            }
            onAdd(newExercise);

            exerciseRef.current.value = "";
            weightRef.current.value = "";
            repsRef.current.value = "";
            setsRef.current.value = "";
            restRef.current.value = "";

        }
    }


    return (
        <div className="flex bg-[#293241] justify-center">
            <div className="ml-5 flex flex-col my-5 gap-3 text-[#F5F9E9]">
                <input ref={dateRef} type="date"></input>

                <div className="flex justify-between">
                    <label>Exercise:</label>
                    <input ref={exerciseRef} className={inputStyle} type="text"></input>
                </div>

                <div className="flex items-center justify-between">
                    <label>Weight (lbs):</label>
                    <input ref={weightRef} type="number" className={inputStyle}></input>
                </div>

                <div className="flex items-center justify-between">
                    <label>Reps:</label>
                    <input ref={repsRef} type="number" className={inputStyle}></input>
                </div>

                <div className="flex items-center justify-between">
                    <label>Sets:</label>
                    <input ref={setsRef} type="number" className={inputStyle}></input>
                </div>

                <div className="flex items-center justify-between">
                    <label>Rest (min):</label>
                    <input ref={restRef} type="number" className={inputStyle}></input>
                </div>

                <button onClick={handleAdd} className='bg-[#F5F9E9] text-black px-5 py-1 rounded-md hover:bg-[#3b3a37] hover:text-white text-lg shadow-2xl'>Add</button>
            </div>
        </div>
    );
}