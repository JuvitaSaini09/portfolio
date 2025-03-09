

export function Title({ label }: { label: string }) {
    return (
        <div className="flex items-center justify-around w-full">
            <div className="w-[100px] h-[3px] bg-grid-small bg-[#474747] rounded"></div>
            <h1 className="text-center text-[52px] font-bold text-[#474747]">{label}</h1>
            <div className="w-[100px] h-[3px] bg-grid-small bg-[#474747] rounded"></div>
        </div>
    )
}