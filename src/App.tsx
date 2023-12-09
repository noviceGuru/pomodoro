import useApp from "./useApp"

import Clock from "components/atoms/clock/clock"
import TimeMenu from "components/time-menu/time-menu"
import Overlay from "components/atoms/overlay/overlay"
import StatsButton from "components/atoms/stats-button/stats-button"
import PlayPauseButton from "components/atoms/play-pause-button/play-pause-button"
import NextButton from "components/atoms/next-button/next-button"

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
    } = useApp()

    return (
        <div className="p-10 flex flex-col justify-between items-center h-[100dvh]">
            <Overlay show={showOverlay} setShow={setShowOverlay}>
                Records Table here
            </Overlay>
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
            <StatsButton setShowOverlay={setShowOverlay} />
            <Clock
                isRunning={isRunning}
                setIsRunning={setIsRunning}
                selectedTime={Object.values(selectedTime)[0]}
            />
        </div>
    )
}

export default App
