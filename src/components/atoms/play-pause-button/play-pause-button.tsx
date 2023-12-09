import PlayIcon from "assets/play.svg"
import PauseIcon from "assets/pause.svg"

export default function PlayPauseButton({
    isRunning,
    setIsRunning,
}: {
    isRunning: boolean
    setIsRunning: (value: React.SetStateAction<boolean>) => void
}) {
    return (
        <button className="rounded-full" onClick={() => setIsRunning(!isRunning)}>
            <img
                src={isRunning ? PauseIcon : PlayIcon}
                alt="play-pause-button"
                className="m-6 w-20 sm:w-28 md:w-36 lg:w-40 xl:w-44 2xl:w-56"
            />
        </button>
    )
}
