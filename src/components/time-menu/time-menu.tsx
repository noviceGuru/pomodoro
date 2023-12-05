import { TimeMenuPropType } from "features/types"

export default function TimeMenu({
    timeMenu,
    setSelectedTime,
    selectedTime,
}: {
    timeMenu: TimeMenuPropType
    setSelectedTime: React.Dispatch<React.SetStateAction<TimeMenuPropType>>
    selectedTime: TimeMenuPropType
}) {
    return (
        <div className="flex bg-gray-700 rounded-full p-1 gap-2">
            {Object.entries(timeMenu).map(([name, time]) => (
                <div
                    key={name}
                    className={`capitalize text-center grid items-center px-2 cursor-pointer rounded-full ${
                        Object.keys(selectedTime)[0] === name ? "bg-lime-400" : ""
                    } 
                    transition-all duration-1000`}
                    onClick={() =>
                        setSelectedTime({
                            [`${name}`]: time,
                        } as TimeMenuPropType)
                    }
                >
                    {name}
                </div>
            ))}
        </div>
    )
}
