import { useEffect, useState } from "react"

export default function useClock({
    isRunning,
    setIsRunning,
}: {
    isRunning: boolean
    setIsRunning: (newValue: boolean) => void
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
    }, [seconds])

    const clockMinutes = Math.floor(seconds / 60)
    const clockSeconds = Math.floor(seconds % 60)
    const clockExpression = `${
        clockMinutes < 10 ? 0 : ""
    } ${clockMinutes} :${" "}
    ${clockSeconds < 10 ? 0 : ""} ${clockSeconds}`

    return { clockExpression, seconds }
}
