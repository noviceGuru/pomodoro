import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

import useClock from "./useClock"

export default function Clock({
    isRunning,
    setIsRunning,
}: {
    isRunning: boolean
    setIsRunning: (newValue: boolean) => void
}) {
    const { clockExpression, seconds } = useClock({ isRunning, setIsRunning })

    return (
        <div
            className={`border-2 border-lime-400 grid place-items-center rounded-full m-6 
        w-32 sm:w-36 md:w-40 lg:w-44 xl:w-56 2xl:w-64
        h-32 sm:h-36 md:h-40 lg:h-44 xl:h-56 2xl:h-64 
        ${isRunning ? "border-4 bg-amber-600" : ""}
        cursor-pointer`}
            onClick={() => setIsRunning(!isRunning)}
        >
            <p className="font-bold md:text-2xl lg:text-3xl 2xl:text-4xl absolute z-10">
                {clockExpression}
            </p>
            <CircularProgressbar
                value={(seconds * 100) / (25 * 60)}
                strokeWidth={2}
                styles={buildStyles({
                    strokeLinecap: "butt",
                    pathTransitionDuration: 0.5,
                    pathColor: "lime",
                    trailColor: "red",
                })}
            />
        </div>
    )
}
