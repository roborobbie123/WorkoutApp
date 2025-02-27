export default function NavBar({ ...props }) {
    const buttonStyle = 'bg-[#e0fbfc] text-black px-5 py-1 rounded-md hover:bg-[#293241] hover:text-white text-lg shadow-2xl';

    return (
        <div {...props} className="fixed flex justify-center w-full bg-[#293241]">
            <div className="w-1/2 ">
                <ul className="flex gap-1 px-5 py-5 mt-3 justify-center">
                    <li><button className={buttonStyle}>Home</button></li>
                    <li><button className={buttonStyle}>Log</button></li>
                    <li><button className={buttonStyle}>Add Workout</button></li>
                    <li><button className={buttonStyle}>Settings</button></li>
                </ul>
            </div> 
            
        </div>
    );
}