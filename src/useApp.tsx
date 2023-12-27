import { useEffect, useState } from "react"
import { v4 as uuidv4 } from "uuid"
import { LapRecord, addLaps, initDB } from "features/db"
import { TimeMenuPropType } from "features/types"

const initialTimeMenu = {
    pomodoro: 25,
    "short break": 5,
    "long break": 15,
}

export default function useApp() {
    const [isRunning, setIsRunning] = useState<boolean>(false)
    const [selectedTime, setSelectedTime] = useState<TimeMenuPropType>({ pomodoro: 25 })
    const [timeMenu] = useState(initialTimeMenu)
    const [showOverlay, setShowOverlay] = useState<boolean>(false)
    const [seconds, setSeconds] = useState<number>(0)
    const [lapRecord, setLapRecord] = useState<LapRecord>()

    const setSelectedTimeWrapper = (newState: TimeMenuPropType) => {
        setSelectedTime(oldState => {
            if (seconds > 0) {
                setLapRecord({
                    id: uuidv4(),
                    type: Object.keys(oldState)[0] === "pomodoro" ? "pomodoro" : "break",
                    time: seconds,
                })
            }
            return newState
        })
    }

    useEffect(() => {
        if (lapRecord) {
            addLaps(lapRecord)
        }
    }, [lapRecord])

    const handleNext = () => {
        setSelectedTimeWrapper(
            Object.keys(selectedTime)[0] === "pomodoro" ? { "short break": 5 } : { pomodoro: 25 }
        )

        setIsRunning(false)
    }

    document.body.onkeyup = (e: KeyboardEvent) => {
        if ((e.key === "Enter" || e.code === "Space") && !showOverlay) {
            setIsRunning(!isRunning)
        }
    }

    useEffect(() => {
        initDB()
    }, [])

    return {
        showOverlay,
        setShowOverlay,
        selectedTime,
        setSelectedTime: setSelectedTimeWrapper,
        timeMenu,
        isRunning,
        setIsRunning,
        handleNext,
        seconds,
        setSeconds,
    }
}
