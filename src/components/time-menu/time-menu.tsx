import { TimeMenuPropType } from "features/types"

export default function TimeMenu({
    timeMenu,
    setSelectedTime,
    selectedTime,
    setIsRunning,
}: {
    timeMenu: TimeMenuPropType
    setSelectedTime: React.Dispatch<React.SetStateAction<TimeMenuPropType>>
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
        <div className="flex bg-stone-700 rounded-full p-1 gap-2">
            {Object.entries(timeMenu).map(([name, time]) => (
                <div
                    key={name}
                    className={`capitalize text-center grid items-center px-2 cursor-pointer rounded-full select-none
                    ${Object.keys(selectedTime)[0] === name ? "bg-lime-400" : ""} 
                    transition-all duration-1000`}
                    onClick={() => handleTimeMenuClick(name, time)}
                >
                    {name}
                </div>
            ))}
        </div>
    )
}
