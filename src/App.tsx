import { useState } from "react"

import Clock from "components/atoms/clock/Clock"
import Button from "components/atoms/button/button"
import Container from "components/atoms/container/container"

import PlayIcon from "assets/play.svg"
import PauseIcon from "assets/pause.svg"

function App() {
    const [isRunning, setIsRunning] = useState<boolean>(false)
    document.body.onkeyup = (e: KeyboardEvent) => {
        if (e.key === "Enter" || e.code === "Space") {
            setIsRunning(!isRunning)
        }
    }

    return (
        <Container className="gap-40">
            <Button
                className="hover:bg-red-500 rounded-full"
                onClick={() => setIsRunning(!isRunning)}
            >
                <img
                    src={isRunning ? PauseIcon : PlayIcon}
                    alt="play-pause-button"
                    className="m-6 w-20 sm:w-28 md:w-36 lg:w-40 xl:w-44 2xl:w-56"
                />
            </Button>
            <Clock isRunning={isRunning} setIsRunning={setIsRunning} selectedTime={25}/>
        </Container>
    )
}

export default App
