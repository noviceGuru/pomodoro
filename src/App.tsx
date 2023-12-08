import { useState } from "react"

import Clock from "components/atoms/clock/clock"
import Button from "components/atoms/button/button"
import Container from "components/atoms/container/container"

import PlayIcon from "assets/play.svg"
import PauseIcon from "assets/pause.svg"
import TimeMenu from "components/time-menu/time-menu"

import { TimeMenuPropType } from "features/types"

function App() {
    const [isRunning, setIsRunning] = useState<boolean>(false)
    const [selectedTime, setSelectedTime] = useState<TimeMenuPropType>({ pomodoro: 25 })
    document.body.onkeyup = (e: KeyboardEvent) => {
        if (e.key === "Enter" || e.code === "Space") {
            setIsRunning(!isRunning)
        }
    }
    const initialTimeMenu = {
        pomodoro: 25,
        "short break": 5,
        "long break": 15,
    }
const [timeMenu, setTimeMenu] = useState(initialTimeMenu)

    return (
        <Container className="h-[100dvh] justify-between">
            <TimeMenu
                setSelectedTime={setSelectedTime}
                timeMenu={timeMenu}
                selectedTime={selectedTime}
            />
            <Button className="rounded-full" onClick={() => setIsRunning(!isRunning)}>
                <img
                    src={isRunning ? PauseIcon : PlayIcon}
                    alt="play-pause-button"
                    className="m-6 w-20 sm:w-28 md:w-36 lg:w-40 xl:w-44 2xl:w-56"
                />
            </Button>
            <Clock
                isRunning={isRunning}
                setIsRunning={setIsRunning}
                selectedTime={Object.values(selectedTime)[0]}
            />
        </Container>
    )
}

export default App
