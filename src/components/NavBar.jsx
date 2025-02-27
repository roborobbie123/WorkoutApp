export default function NavBar({ ...props }) {
    const buttonStyle = 'bg-[#F5F9E9] text-black px-5 py-1 rounded-md hover:bg-[#3b3a37] hover:text-white text-lg shadow-2xl';

    return (
        <div {...props} className=" fixed flex justify-center w-full bg-[#515751] drop-shadow-2xl">
            <div className="w-1/2 ">
                <ul className="flex justify-between px-5 py-5 mt-3">
                    <li><button className={buttonStyle}>Home</button></li>
                    <li><button className={buttonStyle}>Log</button></li>
                    <li><button className={buttonStyle}>Add Workout</button></li>
                    <li><button className={buttonStyle}>Settings</button></li>
                </ul>
            </div> 
        </div>
    );
}