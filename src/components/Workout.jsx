export default function Workout() {

    const inputStyle='ml-5 bg-[#F5F9E9] rounded-sm';

    return (
        <div className="flex bg-[#515751] justify-center">
            <div className="ml-5 flex flex-col my-5 gap-3 text-[#F5F9E9]">
                <input type="date"></input>
                <label>Exercise: <input className={inputStyle} type="text"></input></label>
                <label>Weight: <input type="number" className={inputStyle}></input></label>
                <label>Sets: <input type="number" className={inputStyle}></input></label>
                <label>Rest: <input type="number" className={inputStyle}></input></label>
                <button className='bg-[#F5F9E9] text-black px-5 py-1 rounded-md hover:bg-[#3b3a37] hover:text-white text-lg shadow-2xl'>Save</button>
            </div>
        </div>
    );
}