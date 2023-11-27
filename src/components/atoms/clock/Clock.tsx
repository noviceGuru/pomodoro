import { useEffect, useState } from "react"

export default function Clock({ isRunning }: { isRunning: boolean }) {
    const [seconds, setSeconds] = useState<number>(0)

    useEffect(() => {
        const interval = setInterval(() => {
            if (isRunning) {
                setSeconds(prevSeconds => prevSeconds + 1)
            }
        }, 1000)

        return () => clearInterval(interval)
    }, [isRunning])

    const clockMinutes = Math.floor(seconds / 60)
    const clockSeconds = Math.floor(seconds % 60)

    return (
        <div>
            <p>
                {clockMinutes < 10 ? 0 : ""} {clockMinutes} :
                {clockSeconds < 10 ? 0 : ""} {clockSeconds}
            </p>
        </div>
    )
}
