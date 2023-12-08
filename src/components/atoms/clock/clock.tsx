import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

import useClock from "./useClock"

export default function Clock({
    isRunning,
    setIsRunning,
    selectedTime,
}: {
    isRunning: boolean
    setIsRunning: (newValue: boolean) => void
    selectedTime: number
}) {
    const { clockExpression, remainingSecs } = useClock({
        isRunning,
        selectedTime,
    })

    return (
        <div
            className={`grid place-items-center rounded-full m-6
        w-32 sm:w-36 md:w-40 lg:w-44 xl:w-56 2xl:w-64
        h-32 sm:h-36 md:h-40 lg:h-44 xl:h-56 2xl:h-64 
        ${isRunning ? "bg-lime-400" : ""}
        ${remainingSecs < 0 ? "bg-rose-800" : ""}
        cursor-pointer`}
            onClick={() => setIsRunning(!isRunning)}
            data-testid="clock"
        >
            <p className={`font-bold md:text-2xl lg:text-3xl 2xl:text-4xl absolute z-10 select-none text-center`}>
                {remainingSecs < 0 && <span className="block">OverTime</span>}
                {clockExpression}
            </p>
            <CircularProgressbar
                value={(remainingSecs * 100) / (selectedTime * 60)}
                strokeWidth={2}
                styles={buildStyles({
                    strokeLinecap: "butt",
                    pathTransitionDuration: 0.5,
                    pathColor: "rgb(21,128,61)",
                    trailColor: "lime", 
                })}
                counterClockwise
            />
        </div>
    )
}
