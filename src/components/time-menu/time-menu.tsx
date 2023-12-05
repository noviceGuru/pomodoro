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
                <div key={name}>
                    <input
                        type="radio"
                        id={`input-${time}`}
                        onChange={() =>
                            setSelectedTime({
                                [`${name}`]: time,
                            } as TimeMenuPropType)
                        }
                        name="time-selection"
                        className="hidden"
                    ></input>
                    <label
                        htmlFor={`input-${time}`}
                        className={`inline-block capitalize px-2 text-center bg-blue-400 cursor-pointer rounded-full`}
                    >
                        {name}
                    </label>
                </div>
            ))}
        </div>
    )
}
