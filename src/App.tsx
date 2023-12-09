import useApp from "./useApp"

import Clock from "components/atoms/clock/clock"
import Container from "components/atoms/container/container"
import TimeMenu from "components/time-menu/time-menu"
import Overlay from "components/atoms/overlay/overlay"
import StatsButton from "components/atoms/stats-button/stats-button"

import PlayIcon from "assets/play.svg"
import PauseIcon from "assets/pause.svg"
import NextItem from "assets/nextItem.svg"

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
                    <button className="rounded-full" onClick={() => setIsRunning(!isRunning)}>
                        <img
                            src={isRunning ? PauseIcon : PlayIcon}
                            alt="play-pause-button"
                            className="m-6 w-20 sm:w-28 md:w-36 lg:w-40 xl:w-44 2xl:w-56"
                        />
                    </button>
                    <button className="flex justify-center" onClick={handleNext}>
                        <img src={NextItem} alt="next-item-button" className="m-6 w-8 sm:w-14" />
                    </button>
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
