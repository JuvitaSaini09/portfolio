

export function HiCard() {
    return (
        <div
            className={`p-4 bg-[#faefcc] shadow-[0_20px_10px_-14px_#4031a047] w-33 h-33 flex items-center justify-center border-green-500 absolute right-[0] z-2`}>
            <p className="text-center text-[52px] font-bold text-[#474747]">👋</p>
        </div>
    );
}


export function EmployeeStatusCard() {
    return (
        <div
            className={`p-4 bg-[#B8FFC6] shadow-[0_20px_10px_-14px_#4031a047] w-33 h-33 flex items-center justify-center absolute top-[70px] z-1`}>
            <p className="text-center text-xl font-bold text-[#474747]">Available for hiring</p>
        </div>
    );
}

