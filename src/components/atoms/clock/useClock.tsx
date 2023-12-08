import { useEffect, useState } from "react"

import ring from "assets/ring.mp3"

export default function useClock({
    isRunning,
    selectedTime,
}: {
    isRunning: boolean
    selectedTime: number
}) {
    const [seconds, setSeconds] = useState<number>(0)
    const audio = new Audio(ring)

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

        if (remainingSecs === 0) {
            audio.play()
        }

        if (!isRunning) {
            audio.pause()
            audio.currentTime = 0
        }
    }, [seconds, selectedTime])

    useEffect(() => setSeconds(0), [selectedTime])

    const remainingSecs = selectedTime * 60 - seconds

    const clockMinutes =
        remainingSecs < 0 ? -Math.ceil(remainingSecs / 60) : Math.floor(remainingSecs / 60)
    const clockSeconds =
        remainingSecs < 0 ? -Math.ceil(remainingSecs % 60) : Math.floor(remainingSecs % 60)
    const clockExpression = `${clockMinutes < 10 ? 0 : ""} ${clockMinutes} :${" "}
    ${clockSeconds < 10 ? 0 : ""} ${clockSeconds}`

    return { clockExpression, remainingSecs }
}
