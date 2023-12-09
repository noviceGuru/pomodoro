import useApp from "./useApp"

import Clock from "components/atoms/clock/clock"
import Container from "components/atoms/container/container"
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
        <div>
            <Overlay show={showOverlay} setShow={setShowOverlay}>
                Records Table here
            </Overlay>
            <Container className="h-[100dvh] justify-between">
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
            </Container>
        </div>
    )
}

export default App
