import useApp from "./useApp"

import Clock from "components/atoms/clock/clock"
import TimeMenu from "components/atoms/time-menu/time-menu"
import Overlay from "components/atoms/overlay/overlay"
import StatsButton from "components/atoms/stats-button/stats-button"
import PlayPauseButton from "components/atoms/play-pause-button/play-pause-button"
import NextButton from "components/atoms/next-button/next-button"
import GitHubButton from "components/atoms/github-button/github-button"

function App() {
    const {
        showOverlay,
        setShowOverlay,
        selectedTime,
        setSelectedTime,
        timeMenu,
        isRunning,
        setIsRunning,
        handleNext,
        seconds,
        setSeconds,
    } = useApp()

    return (
        <div className="p-10 flex flex-col justify-between items-center h-[100dvh]">
            <Overlay show={showOverlay} setShow={setShowOverlay} />
            <TimeMenu
                setSelectedTime={setSelectedTime}
                timeMenu={timeMenu}
                selectedTime={selectedTime}
                setIsRunning={setIsRunning}
            />
            <div className="flex flex-col gap-8">
                <PlayPauseButton isRunning={isRunning} setIsRunning={setIsRunning} />
                <NextButton handleNext={handleNext} />
            </div>
            <GitHubButton />
            <StatsButton setShowOverlay={setShowOverlay} />
            <Clock
                isRunning={isRunning}
                setIsRunning={setIsRunning}
                selectedTime={Object.values(selectedTime)[0]}
                seconds={seconds}
                setSeconds={setSeconds}
            />
        </div>
    )
}

export default App
