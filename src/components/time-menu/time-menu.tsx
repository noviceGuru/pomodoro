import { TimeMenuPropType } from "features/types"

export default function TimeMenu({
    timeMenu,
    setSelectedTime,
    selectedTime,
    setIsRunning,
}: {
    timeMenu: TimeMenuPropType
    setSelectedTime: (newState: TimeMenuPropType) => void
    selectedTime: TimeMenuPropType
    setIsRunning: React.Dispatch<React.SetStateAction<boolean>>
}) {
    const handleTimeMenuClick = (name: string, time: number) => {
        setSelectedTime({ [`${name}`]: time } as TimeMenuPropType)
        if(name !== Object.keys(selectedTime)[0]){
            setIsRunning(false)
        }
    }

    return (
        <div className="flex bg-stone-700 rounded-full p-1 gap-2 mt-6 sm:mt-0">
            {Object.entries(timeMenu).map(([name, time]) => (
                <div
                    key={name}
                    className={`capitalize text-center grid items-center px-2 cursor-pointer rounded-full select-none
                    ${Object.keys(selectedTime)[0] === name ? "bg-lime-400" : ""} 
                    transition-color duration-1000
                    md:text-xl lg:text-2xl 2xl:text-3xl`}
                    onClick={() => handleTimeMenuClick(name, time)}
                >
                    {name}
                </div>
            ))}
        </div>
    )
}
