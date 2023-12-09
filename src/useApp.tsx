import { useEffect, useState } from "react"
import { TimeMenuPropType } from "features/types"
import { initDB } from "features/db"

const initialTimeMenu = {
    pomodoro: 25,
    "short break": 5,
    "long break": 15,
}

export default function useApp() {
    const [isRunning, setIsRunning] = useState<boolean>(false)
    const [selectedTime, setSelectedTime] = useState<TimeMenuPropType>({ pomodoro: 25 })
    const [timeMenu, setTimeMenu] = useState(initialTimeMenu)
    const [showOverlay, setShowOverlay] = useState<boolean>(false)

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
        setSelectedTime,
        timeMenu,
        isRunning,
        setIsRunning,
    }
}
