import { TimeMenuPropType } from "features/types"

export default function TimeMenu({
    timeMenu,
    setSelectedTime,
}: {
    timeMenu: TimeMenuPropType
    setSelectedTime: React.Dispatch<React.SetStateAction<TimeMenuPropType>>
}) {
    return (
        <div className="flex bg-slate-600 rounded-full p-1 gap-2">
            {Object.entries(timeMenu).map(([name, time]) => (
                <div
                    key={name}
                    className={`capitalize grid items-center px-2 bg-blue-400 cursor-pointer rounded-full`}
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
