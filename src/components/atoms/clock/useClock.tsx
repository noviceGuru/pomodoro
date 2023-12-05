import { useEffect, useState } from "react"

export default function useClock({
    isRunning,
    selectedTime,
}: {
    isRunning: boolean
    selectedTime: number
}) {
    const [seconds, setSeconds] = useState<number>(0)

    useEffect(() => {
        const interval = setInterval(() => {
            if (isRunning) {
                setSeconds(prevSeconds => prevSeconds + 1)
            }
        }, 1000)

        return () => clearInterval(interval)
    }, [isRunning])

    useEffect(() => {
        if (seconds > 0) {
            document.title = clockExpression
        }
    }, [seconds, selectedTime])

    const remainingSecs = selectedTime*60 - seconds

    const clockMinutes = Math.floor(remainingSecs / 60)
    const clockSeconds = Math.floor(remainingSecs % 60)
    const clockExpression = `${
        clockMinutes < 10 ? 0 : ""
    } ${clockMinutes} :${" "}
    ${clockSeconds < 10 ? 0 : ""} ${clockSeconds}`

    return { clockExpression, remainingSecs }
}
